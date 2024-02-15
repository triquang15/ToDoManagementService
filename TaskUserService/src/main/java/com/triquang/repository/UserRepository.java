package com.triquang.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.triquang.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	public User findByEmail(String email);
}
