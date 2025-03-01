package com.springboot.jpa.mvc;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepo extends JpaRepository<Task, Integer>
{
     List<Task> findByUserId(int id);
}
