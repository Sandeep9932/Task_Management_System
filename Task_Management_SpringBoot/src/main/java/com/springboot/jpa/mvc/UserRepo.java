package com.springboot.jpa.mvc;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer>{

	int countByUsername(String username);
	User findByUsername(String username);
}
