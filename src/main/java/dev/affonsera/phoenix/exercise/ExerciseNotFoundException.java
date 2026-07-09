package dev.affonsera.phoenix.exercise;

import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
class ExerciseNotFoundException extends RuntimeException {

	ExerciseNotFoundException(UUID id) {
		super("Exercise not found: " + id);
	}
}
