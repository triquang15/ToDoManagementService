package com.triquang.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.triquang.model.Submission;

public interface SubmissionRepository extends JpaRepository<Submission, Long> {
	List<Submission> findByTaskId(Long taskId);
}
