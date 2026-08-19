package com.jobportal.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class User extends BaseEntity{

	  @Column(nullable = false)
	    private String firstName;

	    @Column(nullable = false)
	    private String lastName;

	    @Column(nullable = false, unique = true)
	    private String email;

	    @Column(unique = true)
	    private String mobile;

	    @Column(nullable = false)
	    private String password;

	    private String profileImage;

	    private Boolean emailVerified = false;

	    private Boolean status = true;

	    @ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name = "role_id")
	    private Role role;
}
