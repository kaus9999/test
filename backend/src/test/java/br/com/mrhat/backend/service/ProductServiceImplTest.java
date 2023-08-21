package br.com.mrhat.backend.service;

import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import br.com.mrhat.backend.controller.ProductController;
import br.com.mrhat.backend.dto.ProductFormDTO;
import br.com.mrhat.backend.model.Product;
import br.com.mrhat.backend.repository.ProductRepository;
import br.com.mrhat.backend.service.ProductServiceImpl;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.ArrayList;

@RunWith(SpringRunner.class)
@ExtendWith(MockitoExtension.class)
public class ProductServiceImplTest {

    @InjectMocks
    private ProductServiceImpl service;
    @Mock
    private ProductRepository repository;

    @Test
    @DisplayName("Post do produto")
    public void postTest() throws Exception {
        when(repository.save(any())).thenReturn(new Product("teste"));
        assertNotNull(service.post(new ProductFormDTO()));
    }

    @Test
    @DisplayName("Post encontrar todos")
    public void findAllTest() throws Exception {
        when(repository.findAll()).thenReturn(new ArrayList<Product>());
        assertEquals(service.findAll().size(),0);
    }
    
}
