package com.academic.resource;

import com.academic.entity.Course;
import com.academic.service.CourseService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

@Path("/courses")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@RolesAllowed({"ADMIN", "COORDINATOR"})
public class CourseResource {

    @Inject
    CourseService courseService;

    @GET
    public List<Course> listAll() {
        return courseService.listAll();
    }

    @GET
    @Path("/{id}")
    public Course findById(@PathParam("id") Long id) {
        return courseService.findById(id);
    }

    @POST
    public Response create(Course course) {
        courseService.create(course);
        return Response.status(Response.Status.CREATED).build();
    }

    @PUT
    @Path("/{id}")
    public Response update(@PathParam("id") Long id, Course course) {
        courseService.update(id, course);
        return Response.ok().build();
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") Long id) {
        courseService.delete(id);
        return Response.noContent().build();
    }
}
