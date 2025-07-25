package com.academico.service;

import com.academico.model.Usuario;
import com.academico.repository.UsuarioRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import java.util.List;

@ApplicationScoped
public class UsuarioService {

    @Inject
    UsuarioRepository repository;

    public List<Usuario> listar() {
        return repository.listAll();
    }

    public Usuario criar(Usuario usuario) {
        repository.persist(usuario);
        return usuario;
    }
}