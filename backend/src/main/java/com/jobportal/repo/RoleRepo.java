package com.jobportal.repo;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobportal.entity.Role;

public interface RoleRepo extends JpaRepository<Role , Long> {
	
    
}
