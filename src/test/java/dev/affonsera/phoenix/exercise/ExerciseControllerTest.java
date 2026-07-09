package dev.affonsera.phoenix.exercise;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(ExerciseController.class)
class ExerciseControllerTest {

	private static final UUID EXERCISE_ID = UUID.fromString("7f2b5a5e-1c2d-4d0f-8c71-6c3fdc85b2ab");

	@Autowired
	private MockMvc mockMvc;

	@MockitoBean
	private ExerciseService exerciseService;

	@Test
	void listsExercisesWithDefaultActiveFilter() throws Exception {
		when(exerciseService.listExercises(any())).thenReturn(List.of(exercise()));

		mockMvc.perform(get("/api/exercises").with(user("athlete")))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$[0].id").value(EXERCISE_ID.toString()))
				.andExpect(jsonPath("$[0].scope").value("GLOBAL"))
				.andExpect(jsonPath("$[0].ownerUserId").doesNotExist())
				.andExpect(jsonPath("$[0].name").value("Chest Press (Machine)"))
				.andExpect(jsonPath("$[0].namePt").value("Supino na maquina / Chest press"))
				.andExpect(jsonPath("$[0].movementPattern").value("HORIZONTAL_PUSH"))
				.andExpect(jsonPath("$[0].bodyArea").value("CHEST"))
				.andExpect(jsonPath("$[0].equipmentType").value("MACHINE"))
				.andExpect(jsonPath("$[0].defaultSafetyNotes").value("Back supported"))
				.andExpect(jsonPath("$[0].active").value(true));

		verify(exerciseService).listExercises(new ExerciseFilter(null, null, null, null, null));
	}

	@Test
	void listsExercisesWithFilters() throws Exception {
		when(exerciseService.listExercises(any())).thenReturn(List.of(exercise()));

		mockMvc.perform(get("/api/exercises")
					.param("active", "false")
					.param("scope", "GLOBAL")
					.param("movementPattern", "HORIZONTAL_PUSH")
					.param("bodyArea", "CHEST")
					.param("equipmentType", "MACHINE")
					.with(user("athlete")))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$[0].id").value(EXERCISE_ID.toString()));

		verify(exerciseService).listExercises(new ExerciseFilter(
				false,
				ExerciseScope.GLOBAL,
				MovementPattern.HORIZONTAL_PUSH,
				BodyArea.CHEST,
				EquipmentType.MACHINE));
	}

	@Test
	void getsExerciseById() throws Exception {
		when(exerciseService.getExercise(EXERCISE_ID)).thenReturn(exercise());

		mockMvc.perform(get("/api/exercises/{id}", EXERCISE_ID).with(user("athlete")))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.id").value(EXERCISE_ID.toString()))
				.andExpect(jsonPath("$.name").value("Chest Press (Machine)"));
	}

	@Test
	void returnsNotFoundForMissingExercise() throws Exception {
		when(exerciseService.getExercise(EXERCISE_ID)).thenThrow(new ExerciseNotFoundException(EXERCISE_ID));

		mockMvc.perform(get("/api/exercises/{id}", EXERCISE_ID).with(user("athlete")))
				.andExpect(status().isNotFound());
	}

	@Test
	void rejectsUnauthenticatedRequests() throws Exception {
		mockMvc.perform(get("/api/exercises"))
				.andExpect(status().isUnauthorized());
	}

	private static Exercise exercise() {
		return new Exercise(
				EXERCISE_ID,
				ExerciseScope.GLOBAL,
				null,
				"Chest Press (Machine)",
				"Supino na maquina / Chest press",
				MovementPattern.HORIZONTAL_PUSH,
				BodyArea.CHEST,
				EquipmentType.MACHINE,
				"Back supported",
				true,
				Instant.parse("2026-07-09T00:00:00Z"),
				Instant.parse("2026-07-09T00:00:00Z"));
	}
}
