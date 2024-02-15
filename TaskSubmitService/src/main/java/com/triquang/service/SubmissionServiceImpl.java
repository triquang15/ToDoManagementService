package com.triquang.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.triquang.model.Submission;
import com.triquang.model.TaskDto;
import com.triquang.repository.SubmissionRepository;

@Service
public class SubmissionServiceImpl implements SubmissionService {
	@Autowired
	private SubmissionRepository submissionRepository;

	@Autowired
	private TaskService taskService;

	@Override
	public Submission submitTask(Long taskId, String githubLink, Long userId, String jwt) throws Exception {
		TaskDto taskDto = taskService.getTaskById(taskId, jwt);
		if (taskDto != null) {
			var submission = new Submission();
			submission.setTaskId(taskId);
			submission.setUserId(userId);
			submission.setGithubLink(githubLink);
			submission.setSubmissionTime(LocalDateTime.now());
			return submissionRepository.save(submission);
		}
		throw new Exception("Task not found with ID: " + taskId);
	}

	@Override
	public Submission getTaskSubmissionById(Long submissionId) throws Exception {
		return submissionRepository.findById(submissionId)
				.orElseThrow(() -> new Exception("Task submission not found with ID: " + submissionId));
	}

	@Override
	public List<Submission> getAllTaskSubmit() {
		return submissionRepository.findAll();
	}

	@Override
	public List<Submission> getTaskSubmissionByTaskId(Long taskId) {
		return submissionRepository.findByTaskId(taskId);
	}

	@Override
	public Submission acceptDeadlineSubmit(Long id, String status) throws Exception {
		Submission submission = getTaskSubmissionById(id);
		submission.setStatus(status);
		if (status.equals("ACCEPT")) {
			taskService.completedTask(submission.getTaskId());
		}

		return submissionRepository.save(submission);
	}

}
