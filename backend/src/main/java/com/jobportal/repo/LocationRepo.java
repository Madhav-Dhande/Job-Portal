package com.jobportal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobportal.entity.Location;

public interface LocationRepo extends JpaRepository<Location, Long> {

}
