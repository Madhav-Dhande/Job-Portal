package com.jobportal.entity;

import com.jobportal.entity.NotificationType;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "notifications")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Notification extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String title;

    @Column(length = 3000)
    private String message;

    @Enumerated(EnumType.STRING)
    private NotificationType type;

    private Boolean isRead = false;
}