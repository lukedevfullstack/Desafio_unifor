package com.academic.resource;

import com.academic.entity.Semester;
import com.academic.service.SemesterService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

@Path("/semesters")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@RolesAllowed({"ADMIN", "COORDINATOR"})
public class SemesterResource {

    @Inject
    SemesterService semesterService;

    @GET
    public List<Semester> listAll() {
        return semesterService.listAll();
    }

    @GET
    @Path("/{id}")
    public Semester findById(@PathParam("id") Long id) {
        return semesterService.findById(id);
    }

    @POST
    public Response create(Semester semester) {
        semesterService.create(semester);
        return Response.status(Response.Status.CREATED).build();
    }

    @PUT
    @Path("/{id}")
    public Response update(@PathParam("id") Long id, Semester semester) {
        semesterService.update(id, semester);
        return Response.ok().build();
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") Long id) {
        semesterService.delete(id);
        return Response.noContent().build();
    }
}
