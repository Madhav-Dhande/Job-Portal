package com.jobportal.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Experience extends BaseEntity {

    private String company;

    private String designation;

    @Column(length = 3000)
    private String description;

    private LocalDate startDate;

    private LocalDate endDate;

    private Boolean currentlyWorking;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "resume_id")
    private Resume resume;
}