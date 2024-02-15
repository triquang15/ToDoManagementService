package com.triquang.service;

import java.util.List;

import com.triquang.model.Task;
import com.triquang.model.TaskStatus;

public interface TaskService {
	Task createTask(Task task, String reqRole) throws Exception;

	Task getTaskById(Long id) throws Exception;

	List<Task> getAllTask(TaskStatus status);

	Task updateTask(Long id, Task updatedTask, Long userId) throws Exception;

	void deleteTask(Long id) throws Exception;;

	Task assignedUser(Long userId, Long taskId) throws Exception;

	List<Task> assignedUsersTask(Long userId, TaskStatus status);

	Task completeTask(Long taskId) throws Exception;
}
