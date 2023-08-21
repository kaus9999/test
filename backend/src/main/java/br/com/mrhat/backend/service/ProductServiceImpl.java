package br.com.mrhat.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.mrhat.backend.dto.ProductFormDTO;
import br.com.mrhat.backend.model.Product;
import br.com.mrhat.backend.repository.ProductRepository;

@Component
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository repository;

    public List<Product> findAll(){
        return repository.findAll();
    }

    public Product post(ProductFormDTO productDTO){
        return repository.save(new Product(productDTO.getName()));
    }
}
