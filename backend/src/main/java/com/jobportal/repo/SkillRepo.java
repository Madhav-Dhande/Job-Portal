package com.jobportal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobportal.entity.Skill;

public interface SkillRepo extends JpaRepository<Skill, Long>{

}
