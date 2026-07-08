package dev.affonsera.phoenix;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(properties = {
		"spring.autoconfigure.exclude="
				+ "org.springframework.boot.jdbc.autoconfigure.DataSourceAutoConfiguration,"
				+ "org.springframework.modulith.events.config.EventExternalizationAutoConfiguration,"
				+ "org.springframework.modulith.events.config.EventPublicationAutoConfiguration,"
				+ "org.springframework.modulith.events.jdbc.JdbcEventPublicationAutoConfiguration"
})
class PhoenixApplicationTests {

	@Test
	void contextLoads() {
	}

}
