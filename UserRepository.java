package com.asish.demo3;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.asish.demo3.User;

public interface UserRepository extends JpaRepository<User,String>{

}