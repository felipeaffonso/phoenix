package dev.affonsera.phoenix.exercise;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import java.time.Instant;
import java.util.UUID;

import org.junit.jupiter.api.Test;

class ExerciseTest {

	@Test
	void mapsDocumentedEnumValues() {
		assertThat(MovementPattern.valueOf("HORIZONTAL_PUSH")).isEqualTo(MovementPattern.HORIZONTAL_PUSH);
		assertThat(BodyArea.valueOf("CHEST")).isEqualTo(BodyArea.CHEST);
		assertThat(EquipmentType.valueOf("MACHINE")).isEqualTo(EquipmentType.MACHINE);
		assertThat(ExerciseScope.valueOf("GLOBAL")).isEqualTo(ExerciseScope.GLOBAL);
	}

	@Test
	void trimsNamesAndSafetyNotes() {
		Exercise exercise = validExercise("  Chest Press (Machine)  ", "  Supino maquina  ", "  Back supported  ");

		assertThat(exercise.name()).isEqualTo("Chest Press (Machine)");
		assertThat(exercise.namePt()).isEqualTo("Supino maquina");
		assertThat(exercise.defaultSafetyNotes()).isEqualTo("Back supported");
	}

	@Test
	void rejectsMissingName() {
		assertThatThrownBy(() -> validExercise(" ", "Supino maquina", null))
				.isInstanceOf(IllegalArgumentException.class)
				.hasMessageContaining("Exercise name is required");
	}

	@Test
	void rejectsLongName() {
		assertThatThrownBy(() -> validExercise("a".repeat(121), "Supino maquina", null))
				.isInstanceOf(IllegalArgumentException.class)
				.hasMessageContaining("at most 120");
	}

	@Test
	void rejectsLongPortugueseName() {
		assertThatThrownBy(() -> validExercise("Chest Press", "a".repeat(161), null))
				.isInstanceOf(IllegalArgumentException.class)
				.hasMessageContaining("at most 160");
	}

	@Test
	void rejectsLongSafetyNotes() {
		assertThatThrownBy(() -> validExercise("Chest Press", "Supino maquina", "a".repeat(2001)))
				.isInstanceOf(IllegalArgumentException.class)
				.hasMessageContaining("at most 2000");
	}

	@Test
	void rejectsGlobalExerciseWithOwner() {
		assertThatThrownBy(() -> new Exercise(
				UUID.randomUUID(),
				ExerciseScope.GLOBAL,
				UUID.randomUUID(),
				"Chest Press",
				"Supino maquina",
				MovementPattern.HORIZONTAL_PUSH,
				BodyArea.CHEST,
				EquipmentType.MACHINE,
				null,
				true,
				Instant.parse("2026-07-09T00:00:00Z"),
				Instant.parse("2026-07-09T00:00:00Z")))
				.isInstanceOf(IllegalArgumentException.class)
				.hasMessageContaining("Global exercises cannot have an owner");
	}

	@Test
	void rejectsUserExerciseWithoutOwner() {
		assertThatThrownBy(() -> new Exercise(
				UUID.randomUUID(),
				ExerciseScope.USER,
				null,
				"Custom Press",
				"Custom Press",
				MovementPattern.HORIZONTAL_PUSH,
				BodyArea.CHEST,
				EquipmentType.MACHINE,
				null,
				true,
				Instant.parse("2026-07-09T00:00:00Z"),
				Instant.parse("2026-07-09T00:00:00Z")))
				.isInstanceOf(IllegalArgumentException.class)
				.hasMessageContaining("User exercises require an owner");
	}

	private static Exercise validExercise(String name, String namePt, String notes) {
		return new Exercise(
				UUID.randomUUID(),
				ExerciseScope.GLOBAL,
				null,
				name,
				namePt,
				MovementPattern.HORIZONTAL_PUSH,
				BodyArea.CHEST,
				EquipmentType.MACHINE,
				notes,
				true,
				Instant.parse("2026-07-09T00:00:00Z"),
				Instant.parse("2026-07-09T00:00:00Z"));
	}
}
