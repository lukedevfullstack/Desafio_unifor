package com.academic.resource;

import com.academic.entity.User;
import com.academic.service.UserService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

@Path("/users")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@RolesAllowed({"ADMIN"})
public class UserResource {

    @Inject
    UserService userService;

    @GET
    public List<User> listAll() {
        return userService.listAll();
    }

    @GET
    @Path("/{id}")
    public User findById(@PathParam("id") Long id) {
        return userService.findById(id);
    }

    @POST
    public Response create(User user) {
        userService.create(user);
        return Response.status(Response.Status.CREATED).build();
    }

    @PUT
    @Path("/{id}")
    public Response update(@PathParam("id") Long id, User user) {
        userService.update(id, user);
        return Response.ok().build();
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") Long id) {
        userService.delete(id);
        return Response.noContent().build();
    }
}
