package dev.affonsera.phoenix.exercise;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

public interface ExerciseRepository extends CrudRepository<Exercise, UUID> {
}
