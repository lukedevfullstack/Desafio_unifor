package com.academico.resource;

import com.academico.model.Usuario;
import com.academico.service.UsuarioService;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

@Path("/usuarios")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UsuarioResource {

    @Inject
    UsuarioService service;

    @GET
    public List<Usuario> listarUsuarios() {
        return service.listar();
    }

    @POST
    public Response criarUsuario(Usuario usuario) {
        Usuario novo = service.criar(usuario);
        return Response.status(Response.Status.CREATED).entity(novo).build();
    }
}