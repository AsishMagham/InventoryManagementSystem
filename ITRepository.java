package com.asish.demo3;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.asish.demo3.IT;

public interface ITRepository extends JpaRepository<IT,Integer>{
	@Query("SELECT u FROM IT u WHERE u.category = :category")
    List<IT> findByCategory(String category);
}