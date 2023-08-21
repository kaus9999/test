package br.com.mrhat.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.mrhat.backend.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    
}
