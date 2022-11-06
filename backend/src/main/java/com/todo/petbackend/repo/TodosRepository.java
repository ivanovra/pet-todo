package com.todo.petbackend.repo;

import com.todo.petbackend.entity.TodosEntity;
import org.springframework.data.repository.CrudRepository;

public interface TodosRepository extends CrudRepository<TodosEntity, Long> {
}
