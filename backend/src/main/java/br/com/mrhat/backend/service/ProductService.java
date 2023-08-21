package br.com.mrhat.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.mrhat.backend.dto.ProductFormDTO;
import br.com.mrhat.backend.model.Product;

@Service
public interface ProductService {
    public List<Product> findAll();
    public Product post(ProductFormDTO productDTO);
}
