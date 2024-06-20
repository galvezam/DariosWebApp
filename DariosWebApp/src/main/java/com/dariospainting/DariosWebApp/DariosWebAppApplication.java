package com.dariospainting.DariosWebApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DariosWebAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(DariosWebAppApplication.class, args);
	}

	@RequestMapping("/")
	public String hello() {
		return "Hello World";
	}
}
