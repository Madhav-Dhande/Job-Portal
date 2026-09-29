package com.jobportal.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jobportal.entity.Education;
public interface EducationRepo extends JpaRepository<Education, Long> {

}
