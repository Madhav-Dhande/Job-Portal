package com.jobportal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobportal.entity.Job;

public interface JobRepo extends JpaRepository<Job, Long> {

}
