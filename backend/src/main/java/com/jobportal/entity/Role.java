package com.jobportal.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Role extends BaseEntity {

	@Column(nullable = false,unique = true)
	private String name;
	private String description;
	private boolean status;
	
}
