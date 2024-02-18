package com.triquang.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.triquang.model.Task;
import com.triquang.model.TaskStatus;
import com.triquang.model.UserDto;
import com.triquang.service.TaskService;
import com.triquang.service.UserService;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

	@Autowired
	private TaskService taskService;

	@Autowired
	private UserService userService;

	@PostMapping("/create")
	public ResponseEntity<Task> createTask(@RequestBody Task task, @RequestHeader("Authorization") String token)
			throws Exception {
		UserDto userDto = userService.getUserProfile(token);
		Task createTask = taskService.createTask(task, userDto.getRole());
		return new ResponseEntity<>(createTask, HttpStatus.CREATED);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Task> getTaskById(@PathVariable Long id, @RequestHeader("Authorization") String token)
			throws Exception {
		userService.getUserProfile(token);
		Task task = taskService.getTaskById(id);

		return new ResponseEntity<>(task, HttpStatus.OK);
	}

	@GetMapping("/user")
	public ResponseEntity<List<Task>> getAssignedUserTask(@RequestParam(required = false) TaskStatus status,
			@RequestHeader("Authorization") String token) throws Exception {
		UserDto userDto = userService.getUserProfile(token);
		List<Task> tasks = taskService.assignedUsersTask(userDto.getId(), status);

		return new ResponseEntity<>(tasks, HttpStatus.OK);
	}

	@GetMapping()
	public ResponseEntity<List<Task>> getAllTasks(@RequestParam(required = false) TaskStatus status,
			@RequestHeader("Authorization") String token) throws Exception {
		userService.getUserProfile(token);
		List<Task> tasks = taskService.getAllTask(status);

		return new ResponseEntity<>(tasks, HttpStatus.OK);
	}

	@PutMapping("/{id}/user/{userId}/assigned")
	public ResponseEntity<Task> assignTaskToUser(@PathVariable Long id, @PathVariable Long userId,
			@RequestHeader("Authorization") String token) throws Exception {
		userService.getUserProfile(token);
		Task tasks = taskService.assignedUser(userId, id);

		return new ResponseEntity<>(tasks, HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task reqTask,
			@RequestHeader("Authorization") String token) throws Exception {
		UserDto userDto = userService.getUserProfile(token);
		Task tasks = taskService.updateTask(id, reqTask, userDto.getId());

		return new ResponseEntity<>(tasks, HttpStatus.OK);
	}

	@PutMapping("/{id}/complete")
	public ResponseEntity<Task> completedTask(@PathVariable Long id) throws Exception {
		Task tasks = taskService.completeTask(id);
		return new ResponseEntity<>(tasks, HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteTask(@PathVariable Long id) throws Exception {
		taskService.deleteTask(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
