package com.jobportal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobportal.entity.Login;

public interface LoginRepo extends JpaRepository<Login, Long> {

}
