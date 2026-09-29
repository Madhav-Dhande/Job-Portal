package com.jobportal.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Company extends BaseEntity {

    @Column(nullable = false)
    private String companyName;

    private String email;

    private String website;

    private String industry;

    private String logo;

    @Column(length = 3000)
    private String description;

    private Integer employeeCount;

    private String location;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "created_by")
    private User createdBy;
}
