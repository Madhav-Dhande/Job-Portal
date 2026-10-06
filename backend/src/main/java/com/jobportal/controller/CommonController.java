package com.jobportal.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobportal.repo.RoleRepo;
import com.jobportal.response.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController 
@RequestMapping("/api/common")
@RequiredArgsConstructor
public class CommonController {
	
	private final RoleRepo roleRepo;
	
	 @GetMapping("/getRoles")
	    public ApiResponse<List<Map<String,Object>>> getRoles() {
		 System.out.println("Common Get Roles");
	        List <Map<String,Object>> roles = roleRepo.findAll()
	        		.stream()
	        		.map(role ->Map.<String,Object>of 
	        				("id", role.getId(), "name", role.getName()
	        		))
	        		.toList();
	        
	        return ApiResponse.<List<Map<String,Object>>>builder().success(true).message("Role Fetched Successfully").data(roles).build();
	        
	        
	    }
	

}
