package com.jobportal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobportal.entity.Company;

public interface CompanyRepo extends JpaRepository<Company, Long> {

}
