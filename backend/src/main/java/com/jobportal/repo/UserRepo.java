package com.jobportal.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobportal.entity.User;

import jakarta.validation.constraints.Email;

public interface UserRepo extends JpaRepository<User, Long> {

	public Optional<User> findByEmail(String email);
	boolean existsByEmail(String email);
}
