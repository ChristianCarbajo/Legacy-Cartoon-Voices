package com.example.Api.Rest.interfaces;

import com.example.Api.Rest.model.CComments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IComments extends JpaRepository<CComments, Long> {
}
