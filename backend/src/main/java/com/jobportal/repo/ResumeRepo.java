package com.jobportal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobportal.entity.Resume;

public interface ResumeRepo extends JpaRepository<Resume, Long> {

}
