package com.asish.demo3;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asish.demo3.User;
import com.asish.demo3.UserService;
import com.asish.demo3.UserRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/user/")
public class UserController {
	@Autowired
	UserService userService;
	
	
	@GetMapping(value="/{username}",produces="application/json")
	public ResponseEntity<User> getOneUser(@PathVariable String username)
	{
		User e = userService.getOneUser(username);
		if(e!=null)
			return new ResponseEntity<User>(e,HttpStatus.OK);
		return new ResponseEntity<User>(e,HttpStatus.NOT_FOUND);
	}
	@PostMapping(value="/",consumes="application/json")
	public HttpStatus addUser(@RequestBody User user)
	{
		if(userService.insertUser(user))
			return HttpStatus.OK;
		return HttpStatus.NOT_FOUND;
	}
}
