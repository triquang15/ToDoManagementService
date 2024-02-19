package com.triquang.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.triquang.model.Task;
import com.triquang.model.TaskStatus;
import com.triquang.repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService {
	@Autowired
	private TaskRepository taskRepository;

	@Override
	public Task createTask(Task task, String reqRole) throws Exception {
		if (!reqRole.equals(("ROLE_ADMIN"))) {
			throw new Exception("You do not have access");
		}
		task.setStatus(TaskStatus.NEW);
		task.setCreatedAt(LocalDateTime.now());
		return taskRepository.save(task);
	}

	@Override
	public Task getTaskById(Long id) throws Exception {
		return taskRepository.findById(id).orElseThrow(() -> new Exception("Task not found with ID: " + id));
	}

	@Override
	public List<Task> getAllTask(TaskStatus status) {
		List<Task> listTasks = taskRepository.findAll();
		List<Task> filteredTask = listTasks.stream()
				.filter(t -> status == null || t.getStatus().name().equalsIgnoreCase(status.toString()))
				.collect(Collectors.toList());
		return filteredTask;
	}

	@Override
	public Task updateTask(Long id, Task updatedTask, Long userId) throws Exception {
		Task existingTask = getTaskById(id);
		if (updatedTask.getTitle() != null) {
			existingTask.setTitle(updatedTask.getTitle());
		}
		if (updatedTask.getImage() != null) {
			existingTask.setImage(updatedTask.getImage());
		}
		if (updatedTask.getTags() != null) {
			existingTask.setTags(updatedTask.getTags());
		}
		if (updatedTask.getDescription() != null) {
			existingTask.setDescription(updatedTask.getDescription());
		}
		if (updatedTask.getStatus() != null) {
			existingTask.setStatus(updatedTask.getStatus());
		}
		if (updatedTask.getDeadLine() != null) {
			existingTask.setDeadLine(updatedTask.getDeadLine());
		}
		return taskRepository.save(existingTask);
	}

	@Override
	public void deleteTask(Long id) throws Exception {
		getTaskById(id);
		taskRepository.deleteById(id);

	}

	@Override
	public Task assignedUser(Long userId, Long taskId) throws Exception {
		Task task = getTaskById(taskId);
		task.setAssignUserId(userId);
		task.setStatus(TaskStatus.IN_PROGRESS);
		
		return taskRepository.save(task);
	}

	@Override
	public List<Task> assignedUsersTask(Long userId, TaskStatus status) {
		List<Task> listTasks = taskRepository.findByAssignUserId(userId);
		List<Task> filteredTask = listTasks.stream()
				.filter(t -> status == null || t.getStatus().name().equalsIgnoreCase(status.toString()))
				.collect(Collectors.toList());
		return filteredTask;
	}

	@Override
	public Task completeTask(Long taskId) throws Exception {
		Task task = getTaskById(taskId);
		task.setStatus(TaskStatus.DONE);
		return taskRepository.save(task);
	}

}
