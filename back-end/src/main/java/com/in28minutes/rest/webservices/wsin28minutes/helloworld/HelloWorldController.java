/**
 * 
 */
package com.in28minutes.rest.webservices.wsin28minutes.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author misdagbo
 *
 */
@CrossOrigin("*")
@RestController
public class HelloWorldController {

	// @RequestMapping(method = RequestMethod.GET, path = "/hello-world")
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}

	@RequestMapping(method = RequestMethod.GET, path = "/hello-world-bean")
	// @GetMapping(path = "/hello-world")
	public HelloWorldBean helloWorldBean() {
		// throw new RuntimeException("Some Error has Happened ! Contact Support at
		// ***");
		return new HelloWorldBean("Hello World - Changed");
	}

	@RequestMapping(method = RequestMethod.GET, path = "/hello-world/path-variable/{name}")
	// @GetMapping(path = "/hello-world")
	public HelloWorldBean helloWorldBeanPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}
}
