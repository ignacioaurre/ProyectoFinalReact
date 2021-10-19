package com.backend.proyectofinal.dto;


import com.backend.proyectofinal.entity.Odontologo;
import com.backend.proyectofinal.entity.Paciente;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDate;

@JsonIgnoreProperties(ignoreUnknown = true)
public class EstudioComplementarioDTO {

    /* Atributos */
    private Long id;
    private String nombre;
    private LocalDate fecha;
    private Odontologo odontologo;
    private Paciente paciente;


    /* Constructor */

    public EstudioComplementarioDTO(String nombre, LocalDate fecha, Odontologo odontologo, Paciente paciente) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.odontologo = odontologo;
        this.paciente = paciente;
    }

    /* Getters y Setters */

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public Odontologo getOdontologo() {
        return odontologo;
    }

    public void setOdontologo(Odontologo odontologo) {
        this.odontologo = odontologo;
    }

    public Paciente getPaciente() {
        return paciente;
    }

    public void setPaciente(Paciente paciente) {
        this.paciente = paciente;
    }
}
