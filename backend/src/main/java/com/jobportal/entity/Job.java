package com.jobportal.entity;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Job extends BaseEntity {
	  @Column(nullable = false)
	    private String title;

	    @Column(length = 5000)
	    private String description;

	    private BigDecimal salaryMin;

	    private BigDecimal salaryMax;

	    private String experience;

	    private Integer vacancy;

	    private LocalDate lastDate;

	    private Boolean status = true;

	    @ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name = "company_id")
	    private Company company;

	    @ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name = "category_id")
	    private JobCategory category;

	    @ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name = "location_id")
	    private Location location;
	    
	    @Enumerated(EnumType.STRING)
	    @Column(nullable = false)
	    private EmploymentType employmentType;
}
