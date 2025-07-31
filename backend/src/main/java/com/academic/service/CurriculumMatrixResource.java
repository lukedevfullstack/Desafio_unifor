package com.academic.resource;

import com.academic.entity.CurriculumMatrix;
import com.academic.service.CurriculumMatrixService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

@Path("/curriculum-matrix")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@RolesAllowed({"ADMIN", "COORDINATOR", "PROFESSOR", "STUDENT"})
public class CurriculumMatrixResource {

    @Inject
    CurriculumMatrixService matrixService;

    @GET
    public List<CurriculumMatrix> listAll() {
        return matrixService.listAll();
    }

    @GET
    @Path("/{id}")
    public CurriculumMatrix findById(@PathParam("id") Long id) {
        return matrixService.findById(id);
    }

    @POST
    @RolesAllowed({"ADMIN", "COORDINATOR"})
    public Response create(CurriculumMatrix matrix) {
        matrixService.create(matrix);
        return Response.status(Response.Status.CREATED).build();
    }

    @PUT
    @Path("/{id}")
    @RolesAllowed({"ADMIN", "COORDINATOR"})
    public Response update(@PathParam("id") Long id, CurriculumMatrix matrix) {
        matrixService.update(id, matrix);
        return Response.ok().build();
    }

    @DELETE
    @Path("/{id}")
    @RolesAllowed({"ADMIN", "COORDINATOR"})
    public Response delete(@PathParam("id") Long id) {
        matrixService.delete(id);
        return Response.noContent().build();
    }
}
