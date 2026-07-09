package dev.affonsera.phoenix.exercise;

public record ExerciseFilter(
		Boolean active,
		ExerciseScope scope,
		MovementPattern movementPattern,
		BodyArea bodyArea,
		EquipmentType equipmentType) {

	public boolean activeOnly() {
		return active == null || active;
	}
}
