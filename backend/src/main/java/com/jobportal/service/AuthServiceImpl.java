package com.jobportal.service;

import com.jobportal.dto.LoginRequest;
import com.jobportal.dto.RegisterRequest;
import com.jobportal.dto.AuthResponse;
import com.jobportal.dto.UserResponse;
import com.jobportal.entity.Role;
import com.jobportal.entity.User;
import com.jobportal.exception.BadRequestException;
import com.jobportal.repo.RoleRepo;
import com.jobportal.repo.UserRepo;
import com.jobportal.security.CustomUserDetails;
import com.jobportal.security.JwtService;

import lombok.RequiredArgsConstructor;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepo userRepository;

    private final RoleRepo roleRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    private final JwtService jwtService;


    @Override
    public AuthResponse register(RegisterRequest request) {
    	
    	System.out.println("Params=======+"+request);

        // 1. Check email
        if (userRepository.existsByEmail(request.getEmail())) {

            throw new BadRequestException(
                    "Email already exists"
            );
        }


        // 2. Find role
        Role role = roleRepository
                .findById(request.getRoleId())
                .orElseThrow(() ->
                        new BadRequestException(
                                "Role not found"
                        )
                );

        // 3. Create user
        User user = new User();

        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setMobile(request.getMobile());

        // 4. Encrypt password
        user.setPassword(
                passwordEncoder.encode(
                        request.getPassword()
                )
        );

        user.setRole(role);
        user.setStatus(true);
        user.setEmailVerified(false);


        // 5. Save user
        userRepository.save(user);


        // 6. Generate JWT
        String token = jwtService.generateToken(
                new CustomUserDetails(user)
        );


        // 7. Response
        UserResponse userResponse =
                UserResponse.builder()
                        .id(user.getId())
                        .firstName(user.getFirstName())
                        .lastName(user.getLastName())
                        .email(user.getEmail())
                        .mobile(user.getMobile())
                        .role(user.getRole().getName())
                        .build();


        return AuthResponse.builder()
                .token(token)
                .tokenType("Bearer")
                .user(userResponse)
                .build();
    }


    @Override
    public AuthResponse login(LoginRequest request) {

        // Authenticate email + password
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );


        // Find user
        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new BadRequestException(
                                "Invalid credentials"
                        )
                );


        // Generate JWT
        String token =
                jwtService.generateToken(
                        new CustomUserDetails(user)
                );


        UserResponse userResponse =
                UserResponse.builder()
                        .id(user.getId())
                        .firstName(user.getFirstName())
                        .lastName(user.getLastName())
                        .email(user.getEmail())
                        .mobile(user.getMobile())
                        .role(user.getRole().getName())
                        .build();


        return AuthResponse.builder()
                .token(token)
                .tokenType("Bearer")
                .user(userResponse)
                .build();
    }
}