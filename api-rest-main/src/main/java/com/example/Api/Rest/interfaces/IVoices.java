package com.example.Api.Rest.interfaces;

import com.example.Api.Rest.model.CVoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IVoices extends JpaRepository<CVoice, Long> {

}
