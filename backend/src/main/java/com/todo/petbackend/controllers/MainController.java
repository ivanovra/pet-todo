package com.todo.petbackend.controllers;

import com.todo.petbackend.entity.TodosEntity;
import com.todo.petbackend.repo.TodosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/todos")
public class MainController {

    @Autowired
    private TodosRepository todosRepository;

    @GetMapping
    public ResponseEntity getTodos() {
        try {
            return ResponseEntity.ok("Save success");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error");
        }
    }

    @PostMapping("/add")
    public ResponseEntity postTodo(@RequestBody TodosEntity todo) {
        try {
            todosRepository.save(todo);
            return ResponseEntity.ok("Save success");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error");
        }
    }
}
