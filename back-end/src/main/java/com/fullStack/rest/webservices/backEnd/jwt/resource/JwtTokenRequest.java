package com.fullStack.rest.webservices.backEnd.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

	private static final long serialVersionUID = -5616176897013108345L;

	/*{
	    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU0OTQ2NzAyOCwiaWF0IjoxNTQ4ODYyMjI4fQ.bNaQJNvFuHbb4VlbMfKYMIIdSnif0A1Ks7USwiK49SGx-47vB9B1spEnbVqTWeQJ8fwGsg9qNweJhzJqukxlTA"
	}*/

	private String username;
	private String password;

	public JwtTokenRequest() {
		super();
	}

	public JwtTokenRequest(String username, String password) {
		this.setUsername(username);
		this.setPassword(password);
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
