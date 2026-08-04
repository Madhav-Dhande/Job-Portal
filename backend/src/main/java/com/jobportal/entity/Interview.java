package com.jobportal.entity;

import com.jobportal.entity.InterviewMode;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "interviews")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Interview extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "application_id", nullable = false)
    private JobApplication application;

    private LocalDateTime interviewDate;

    @Enumerated(EnumType.STRING)
    private InterviewMode mode;

    private String meetingLink;

    @Column(length = 3000)
    private String feedback;

    private Boolean completed = false;
}