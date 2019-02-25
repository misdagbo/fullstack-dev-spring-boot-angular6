/**
 * 
 */
package com.fullStack.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author misdagbo
 *
 */
@CrossOrigin("*")
@RestController
public class BasicAuthenticationController {

	@RequestMapping(method = RequestMethod.GET, path = "/basic-auth")
	// @GetMapping(path = "/hello-world")
	public AuthenticationBean authenticationBean() {
		// throw new RuntimeException("Some Error has Happened ! Contact Support at
		// ***");
		return new AuthenticationBean("you are authenticated");
	}
}
