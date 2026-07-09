package dev.affonsera.phoenix.exercise;

import java.time.Instant;
import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table("exercises")
public record Exercise(
		@Id UUID id,
		ExerciseScope scope,
		@Column("owner_user_id") UUID ownerUserId,
		String name,
		@Column("name_pt") String namePt,
		@Column("movement_pattern") MovementPattern movementPattern,
		@Column("body_area") BodyArea bodyArea,
		@Column("equipment_type") EquipmentType equipmentType,
		@Column("default_safety_notes") String defaultSafetyNotes,
		boolean active,
		@Column("created_at") Instant createdAt,
		@Column("updated_at") Instant updatedAt) {

	public Exercise {
		if (id == null) {
			throw new IllegalArgumentException("Exercise id is required");
		}
		if (scope == null) {
			throw new IllegalArgumentException("Exercise scope is required");
		}
		if (scope == ExerciseScope.GLOBAL && ownerUserId != null) {
			throw new IllegalArgumentException("Global exercises cannot have an owner");
		}
		if (scope == ExerciseScope.USER && ownerUserId == null) {
			throw new IllegalArgumentException("User exercises require an owner");
		}
		name = requireText(name, "Exercise name", 120);
		namePt = requireText(namePt, "Exercise Portuguese name", 160);
		if (movementPattern == null) {
			throw new IllegalArgumentException("Exercise movement pattern is required");
		}
		if (bodyArea == null) {
			throw new IllegalArgumentException("Exercise body area is required");
		}
		if (equipmentType == null) {
			throw new IllegalArgumentException("Exercise equipment type is required");
		}
		defaultSafetyNotes = optionalText(defaultSafetyNotes, "Exercise default safety notes", 2000);
		if (createdAt == null) {
			throw new IllegalArgumentException("Exercise createdAt is required");
		}
		if (updatedAt == null) {
			throw new IllegalArgumentException("Exercise updatedAt is required");
		}
	}

	private static String requireText(String value, String label, int maxLength) {
		String normalized = value == null ? "" : value.trim();
		if (normalized.isEmpty()) {
			throw new IllegalArgumentException(label + " is required");
		}
		if (normalized.length() > maxLength) {
			throw new IllegalArgumentException(label + " must be at most " + maxLength + " characters");
		}
		return normalized;
	}

	private static String optionalText(String value, String label, int maxLength) {
		if (value == null) {
			return null;
		}
		String normalized = value.trim();
		if (normalized.isEmpty()) {
			return null;
		}
		if (normalized.length() > maxLength) {
			throw new IllegalArgumentException(label + " must be at most " + maxLength + " characters");
		}
		return normalized;
	}
}
