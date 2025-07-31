package com.academic.resource;

import com.academic.entity.Discipline;
import com.academic.service.DisciplineService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

@Path("/disciplines")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@RolesAllowed({"ADMIN", "COORDINATOR"})
public class DisciplineResource {

    @Inject
    DisciplineService disciplineService;

    @GET
    public List<Discipline> listAll() {
        return disciplineService.listAll();
    }

    @GET
    @Path("/{id}")
    public Discipline findById(@PathParam("id") Long id) {
        return disciplineService.findById(id);
    }

    @POST
    public Response create(Discipline discipline) {
        disciplineService.create(discipline);
        return Response.status(Response.Status.CREATED).build();
    }

    @PUT
    @Path("/{id}")
    public Response update(@PathParam("id") Long id, Discipline discipline) {
        disciplineService.update(id, discipline);
        return Response.ok().build();
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") Long id) {
        disciplineService.delete(id);
        return Response.noContent().build();
    }
}
