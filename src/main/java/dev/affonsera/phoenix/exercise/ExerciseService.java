package dev.affonsera.phoenix.exercise;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ExerciseService {

	private final ExerciseRepository exerciseRepository;
	private final ExerciseQueryRepository exerciseQueryRepository;

	ExerciseService(ExerciseRepository exerciseRepository, ExerciseQueryRepository exerciseQueryRepository) {
		this.exerciseRepository = exerciseRepository;
		this.exerciseQueryRepository = exerciseQueryRepository;
	}

	@Transactional(readOnly = true)
	List<Exercise> listExercises(ExerciseFilter filter) {
		return exerciseQueryRepository.findAll(filter);
	}

	@Transactional(readOnly = true)
	Exercise getExercise(UUID id) {
		return exerciseRepository.findById(id).orElseThrow(() -> new ExerciseNotFoundException(id));
	}
}
