package com.triquang.service;

import java.util.List;

import com.triquang.model.Submission;

public interface SubmissionService {
	Submission submitTask(Long taskId, String githubLink, Long userId, String jwt) throws Exception;

	Submission getTaskSubmissionById(Long submissionId) throws Exception;

	List<Submission> getAllTaskSubmit();

	List<Submission> getTaskSubmissionByTaskId(Long taskId);
	
	Submission acceptDeadlineSubmit(Long id, String status)throws Exception;
}
