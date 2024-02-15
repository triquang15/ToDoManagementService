package com.triquang.response;

import lombok.Data;

@Data
public class AuthResponse{
	private String jwt;
	private String message;
	private boolean status;
	
}

