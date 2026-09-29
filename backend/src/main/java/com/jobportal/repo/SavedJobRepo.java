package com.jobportal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobportal.entity.SavedJob;

public interface SavedJobRepo extends JpaRepository<SavedJob, Long>{

}
