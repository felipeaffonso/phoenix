package dev.affonsera.phoenix;

import dev.affonsera.phoenix.exercise.ExerciseRepository;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

@SpringBootTest(properties = {
		"spring.autoconfigure.exclude="
				+ "org.springframework.boot.jdbc.autoconfigure.DataSourceAutoConfiguration,"
				+ "org.springframework.modulith.events.config.EventExternalizationAutoConfiguration,"
				+ "org.springframework.modulith.events.config.EventPublicationAutoConfiguration,"
				+ "org.springframework.modulith.events.jdbc.JdbcEventPublicationAutoConfiguration"
})
class PhoenixApplicationTests {

	@MockitoBean
	private ExerciseRepository exerciseRepository;

	@MockitoBean
	private JdbcClient jdbcClient;

	@Test
	void contextLoads() {
	}

}
