package com.asish.demo3;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.asish.demo3.User;
import com.asish.demo3.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;
	
	@Transactional(readOnly=true)
	public User getOneUser(String username)
	{
		Optional<User> user = userRepository.findById(username);
		if(user.isPresent())
			return user.get();
		return null;
	}
	

	@Transactional
	public boolean insertUser(User user)
	{
		return userRepository.save(user)!=null;
	}
}
