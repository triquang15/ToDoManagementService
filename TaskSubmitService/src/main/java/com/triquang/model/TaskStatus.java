package com.triquang.model;

public enum TaskStatus {
	TODO("TODO"),
	IN_PROGRESS("IN PROGRESS"),
	MONITOR("MONITOR"),
	NEW("NEW"),
	ASSIGNED("ASSIGNED"),
	DONE("DONE");
	
	private TaskStatus(String status) {
	}
}
