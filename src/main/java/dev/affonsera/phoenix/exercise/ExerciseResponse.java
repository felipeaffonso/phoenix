package dev.affonsera.phoenix.exercise;

import java.util.UUID;

record ExerciseResponse(
		UUID id,
		ExerciseScope scope,
		UUID ownerUserId,
		String name,
		String namePt,
		MovementPattern movementPattern,
		BodyArea bodyArea,
		EquipmentType equipmentType,
		String defaultSafetyNotes,
		boolean active) {

	static ExerciseResponse from(Exercise exercise) {
		return new ExerciseResponse(
				exercise.id(),
				exercise.scope(),
				exercise.ownerUserId(),
				exercise.name(),
				exercise.namePt(),
				exercise.movementPattern(),
				exercise.bodyArea(),
				exercise.equipmentType(),
				exercise.defaultSafetyNotes(),
				exercise.active());
	}
}
