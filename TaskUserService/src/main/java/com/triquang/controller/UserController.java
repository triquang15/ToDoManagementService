package com.triquang.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.triquang.model.User;
import com.triquang.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	@Autowired
	private UserService userService;

	@GetMapping("/profile")
	public ResponseEntity<User> getUserProfile(@RequestHeader("Authorization") String token) {
		User user = userService.getUserProfile(token);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}

	@GetMapping()
	public ResponseEntity<List<User>> getAllUsers(@RequestHeader("Authorization") String token) {
		List<User> listUsers = userService.getAllUsers();
		return new ResponseEntity<>(listUsers, HttpStatus.OK);
	}

}
