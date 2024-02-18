package com.triquang.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.triquang.model.Submission;
import com.triquang.model.UserDto;
import com.triquang.service.SubmissionService;
import com.triquang.service.UserService;

@RestController
@RequestMapping("/api/submissions")
public class SubmissionController {
	@Autowired
	private SubmissionService submissionService;

	@Autowired
	private UserService userService;

	@PostMapping()
	public ResponseEntity<Submission> submitTask(@RequestParam Long taskId, @RequestParam String githubLink,
			@RequestHeader("Authorization") String jwt) throws Exception {
		UserDto dto = userService.getUserProfile(jwt);
		Submission submission = submissionService.submitTask(taskId, githubLink, dto.getId(), jwt);
		return new ResponseEntity<>(submission, HttpStatus.CREATED);

	}

	@GetMapping("/{id}")
	public ResponseEntity<Submission> getSubmissionById(@PathVariable Long id,
			@RequestHeader("Authorization") String jwt) throws Exception {
		userService.getUserProfile(jwt);
		Submission submission = submissionService.getTaskSubmissionById(id);
		return new ResponseEntity<>(submission, HttpStatus.OK);

	}

	@GetMapping()
	public ResponseEntity<List<Submission>> getAllSubmission(@RequestHeader("Authorization") String jwt)
			throws Exception {
		userService.getUserProfile(jwt);
		List<Submission> submission = submissionService.getAllTaskSubmit();
		return new ResponseEntity<>(submission, HttpStatus.OK);

	}

	@GetMapping("/task/{taskId}")
	public ResponseEntity<List<Submission>> getSubmissionByTaskId(@PathVariable Long taskId,
			@RequestHeader("Authorization") String jwt) throws Exception {
		userService.getUserProfile(jwt);
		List<Submission> submission = submissionService.getTaskSubmissionByTaskId(taskId);
		return new ResponseEntity<>(submission, HttpStatus.OK);

	}

	@PutMapping("/{id}")
	public ResponseEntity<Submission> acceptSubmission(@PathVariable Long id, @RequestParam("status") String status,
			@RequestHeader("Authorization") String jwt) throws Exception {
		userService.getUserProfile(jwt);
		Submission submission = submissionService.acceptDeadlineSubmit(id, status);
		return new ResponseEntity<>(submission, HttpStatus.OK);

	}
}
