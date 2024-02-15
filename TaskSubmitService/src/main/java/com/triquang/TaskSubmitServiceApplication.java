package com.triquang;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class TaskSubmitServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskSubmitServiceApplication.class, args);
	}

}
