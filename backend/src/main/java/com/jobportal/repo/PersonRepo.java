package com.jobportal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobportal.entity.Person;

public interface PersonRepo extends JpaRepository<Person, Long> {

}
