package com.jobportal.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class JobCategory extends BaseEntity{

	private String name;
	private String icon;
	private boolean status = true;
}
