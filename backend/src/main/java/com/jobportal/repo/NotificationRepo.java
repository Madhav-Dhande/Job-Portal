package com.jobportal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobportal.entity.Notification;

public interface NotificationRepo extends JpaRepository<Notification, Long> {

}
