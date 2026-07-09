package dev.affonsera.phoenix.exercise;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

@Repository
class ExerciseQueryRepository {

	private final JdbcClient jdbcClient;

	ExerciseQueryRepository(JdbcClient jdbcClient) {
		this.jdbcClient = jdbcClient;
	}

	List<Exercise> findAll(ExerciseFilter filter) {
		StringBuilder sql = new StringBuilder("select id, scope, owner_user_id, name, name_pt, movement_pattern, body_area, equipment_type, default_safety_notes, active, created_at, updated_at from exercises where 1 = 1");
		List<Object> params = new ArrayList<>();

		Boolean active = filter.active();
		if (active == null) {
			active = true;
		}
		sql.append(" and active = ?");
		params.add(active);

		if (filter.scope() != null) {
			sql.append(" and scope = ?");
			params.add(filter.scope().name());
		}
		if (filter.movementPattern() != null) {
			sql.append(" and movement_pattern = ?");
			params.add(filter.movementPattern().name());
		}
		if (filter.bodyArea() != null) {
			sql.append(" and body_area = ?");
			params.add(filter.bodyArea().name());
		}
		if (filter.equipmentType() != null) {
			sql.append(" and equipment_type = ?");
			params.add(filter.equipmentType().name());
		}

		sql.append(" order by name asc");

		return jdbcClient.sql(sql.toString())
				.params(params)
				.query(ExerciseQueryRepository::mapExercise)
				.list();
	}

	private static Exercise mapExercise(ResultSet rs, int rowNum) throws SQLException {
		return new Exercise(
				rs.getObject("id", UUID.class),
				ExerciseScope.valueOf(rs.getString("scope")),
				rs.getObject("owner_user_id", UUID.class),
				rs.getString("name"),
				rs.getString("name_pt"),
				MovementPattern.valueOf(rs.getString("movement_pattern")),
				BodyArea.valueOf(rs.getString("body_area")),
				EquipmentType.valueOf(rs.getString("equipment_type")),
				rs.getString("default_safety_notes"),
				rs.getBoolean("active"),
				toInstant(rs.getTimestamp("created_at")),
				toInstant(rs.getTimestamp("updated_at")));
	}

	private static Instant toInstant(Timestamp timestamp) {
		return timestamp == null ? null : timestamp.toInstant();
	}
}
