package com.academic.school.controller;

import com.academic.school.dto.StudentRequest;
import com.academic.school.dto.StudentResponse;
import com.academic.school.service.StudentService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/api/students")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class StudentController {

    @Inject
    StudentService studentService;

    @GET
    @RolesAllowed({"admin", "coordinator", "professor"})
    public List<StudentResponse> getAll() {
        return studentService.listAll();
    }

    @GET
    @Path("/{id}")
    @RolesAllowed({"admin", "coordinator", "professor"})
    public StudentResponse getById(@PathParam("id") Long id) {
        return studentService.findById(id);
    }

    @POST
    @RolesAllowed({"admin"})
    public Response create(StudentRequest request) {
        StudentResponse student = studentService.create(request);
        return Response.status(Response.Status.CREATED).entity(student).build();
    }

    @PUT
    @Path("/{id}")
    @RolesAllowed({"admin"})
    public StudentResponse update(@PathParam("id") Long id, StudentRequest request) {
        return studentService.update(id, request);
    }

    @DELETE
    @Path("/{id}")
    @RolesAllowed({"admin"})
    public Response delete(@PathParam("id") Long id) {
        studentService.delete(id);
        return Response.noContent().build();
    }
}
