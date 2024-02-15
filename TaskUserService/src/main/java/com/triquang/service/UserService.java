package com.triquang.service;

import java.util.List;

import com.triquang.model.User;

public interface UserService {
	public User getUserProfile(String jwt);
	
	List<User> getAllUsers();
}
