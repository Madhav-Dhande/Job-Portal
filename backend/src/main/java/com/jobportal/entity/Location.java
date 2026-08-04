package com.jobportal.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Location extends BaseEntity {

	private String city;
	private String state;
	private String country;
}
