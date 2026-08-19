package com.jobportal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobportal.entity.Interview;

public interface InterviewRepo extends JpaRepository<Interview, Long> {

}
