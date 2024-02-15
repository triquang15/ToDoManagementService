package com.triquang.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.triquang.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
	public List<Task> findByAssignUserId(Long userId);
}
