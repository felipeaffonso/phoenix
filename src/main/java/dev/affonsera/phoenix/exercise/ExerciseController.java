package dev.affonsera.phoenix.exercise;

import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/exercises")
class ExerciseController {

	private final ExerciseService exerciseService;

	ExerciseController(ExerciseService exerciseService) {
		this.exerciseService = exerciseService;
	}

	@GetMapping
	List<ExerciseResponse> listExercises(
			@RequestParam(required = false) Boolean active,
			@RequestParam(required = false) ExerciseScope scope,
			@RequestParam(required = false) MovementPattern movementPattern,
			@RequestParam(required = false) BodyArea bodyArea,
			@RequestParam(required = false) EquipmentType equipmentType) {
		ExerciseFilter filter = new ExerciseFilter(active, scope, movementPattern, bodyArea, equipmentType);
		return exerciseService.listExercises(filter).stream()
				.map(ExerciseResponse::from)
				.toList();
	}

	@GetMapping("/{id}")
	ExerciseResponse getExercise(@PathVariable UUID id) {
		return ExerciseResponse.from(exerciseService.getExercise(id));
	}
}
