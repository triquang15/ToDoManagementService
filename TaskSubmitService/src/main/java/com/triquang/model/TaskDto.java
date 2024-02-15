package com.triquang.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TaskDto {
	private Long id;
	private String title;
	private String description;
	private String image;
	private Long assignUserId;
	private List<String> tags = new ArrayList<>();
	private TaskStatus status;
	private LocalDateTime deadLine;
	private LocalDateTime createdAt;
}
