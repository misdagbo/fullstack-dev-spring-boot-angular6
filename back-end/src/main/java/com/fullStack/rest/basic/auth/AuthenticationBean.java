/**
 * 
 */
package com.fullStack.rest.basic.auth;

/**
 * @author misdagbo
 *
 */
public class AuthenticationBean {
	private String message;

	public AuthenticationBean(String message) {
		// TODO Auto-generated constructor stub
		this.message = message;
	}

	/**
	 * @return the message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * @param message the message to set
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}
}
