package com.jobportal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobportal.entity.CompanyReview;

public interface CompanyReviewRepo  extends JpaRepository<CompanyReview, Long>{

}
