package com.triquang.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.triquang.exception.UserException;
import com.triquang.model.User;
import com.triquang.repository.UserRepository;
import com.triquang.request.LoginRequest;
import com.triquang.response.AuthResponse;
import com.triquang.security.JwtProvider;
import com.triquang.service.impl.CustomUserServiceImpl;

@RestController
@RequestMapping("/auth")
public class AuthController {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private CustomUserServiceImpl userDetails;

	@PostMapping("/signup")
	public ResponseEntity<AuthResponse> registerUserHandler(@RequestBody User user) throws UserException {
		String email = user.getEmail();
		String password = user.getPassword();
		String fullName = user.getFullName();
		String roles = user.getRole();

		User isEmailExists = userRepository.findByEmail(email);
		if (isEmailExists != null) {
			throw new UserException("Email is already used with another account");
		}

		var newUser = new User();
		newUser.setEmail(email);
		newUser.setFullName(fullName);
		newUser.setRole(roles);
		newUser.setPassword(passwordEncoder.encode(password));

		User savedUser = userRepository.save(newUser);
		userRepository.save(savedUser);

		Authentication authentication = new UsernamePasswordAuthenticationToken(email, password);
		SecurityContextHolder.getContext().setAuthentication(authentication);

		String token = JwtProvider.generateToken(authentication);
		var response = new AuthResponse();
		response.setJwt(token);
		response.setMessage("Register successfully");
		response.setStatus(true);

		return new ResponseEntity<>(response, HttpStatus.OK);

	}

	@PostMapping("/signin")
	public ResponseEntity<AuthResponse> signInHandler(@RequestBody LoginRequest request) {
		String username = request.getEmail();
		String password = request.getPassword();

		Authentication authentication = authenticate(username, password);
		SecurityContextHolder.getContext().setAuthentication(authentication);

		String token = JwtProvider.generateToken(authentication);
		var response = new AuthResponse();
		response.setMessage("Login Success");
		response.setJwt(token);
		response.setStatus(true);

		return new ResponseEntity<>(response, HttpStatus.OK);

	}

	private Authentication authenticate(String username, String password) {
		UserDetails details = userDetails.loadUserByUsername(username);
		if (details == null || !passwordEncoder.matches(password, details.getPassword())) {
			throw new BadCredentialsException("Invalid username or password");
		}
		return new UsernamePasswordAuthenticationToken(details, null, details.getAuthorities());
	}
}
