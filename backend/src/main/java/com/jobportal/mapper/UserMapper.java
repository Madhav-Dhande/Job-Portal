package com.jobportal.mapper;

import com.jobportal.dto.RegisterRequest;
import com.jobportal.entity.User;

public class UserMapper {

    public static User toEntity(RegisterRequest dto){

        User user = new User();

        user.setFirstName(dto.getFirstName());

        user.setLastName(dto.getLastName());

        user.setEmail(dto.getEmail());

        user.setMobile(dto.getMobile());

        user.setPassword(dto.getPassword());

        return user;
    }

}
