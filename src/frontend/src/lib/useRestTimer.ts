'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

export type RestTimerState = {
  remaining: number | null; // seconds left, null = not active
  isActive: boolean;
  start: (seconds: number, exerciseName?: string) => void;
  skip: () => void;
};

/** Request browser notification permission (call once, idempotent). */
export async function requestNotificationPermission(): Promise<boolean> {
  if (typeof window === 'undefined' || !('Notification' in window)) return false;
  if (Notification.permission === 'granted') return true;
  if (Notification.permission === 'denied') return false;
  const result = await Notification.requestPermission();
  return result === 'granted';
}

/** Fire a browser notification if permission is granted. */
function fireNotification(title: string, body?: string) {
  if (typeof window === 'undefined' || !('Notification' in window)) return;
  if (Notification.permission !== 'granted') return;
  new Notification(title, {
    body,
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    tag: 'phoenix-rest-timer', // replace previous notification of same type
    requireInteraction: false,
  });
}

/** Format seconds as MM:SS */
export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function useRestTimer(): RestTimerState {
  const [remaining, setRemaining] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const exerciseNameRef = useRef<string | undefined>(undefined);

  const clear = () => {
    if (intervalRef.current != null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const skip = useCallback(() => {
    clear();
    setIsActive(false);
    setRemaining(null);
  }, []);

  const start = useCallback((seconds: number, exerciseName?: string) => {
    clear();
    exerciseNameRef.current = exerciseName;
    setRemaining(seconds);
    setIsActive(true);

    intervalRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          setIsActive(false);
          fireNotification(
            '⚡ Descanso concluído!',
            exerciseNameRef.current
              ? `Próxima série: ${exerciseNameRef.current}`
              : 'Hora de ir para a próxima série.',
          );
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  // Clean up on unmount
  useEffect(() => () => clear(), []);

  return { remaining, isActive, start, skip };
}
