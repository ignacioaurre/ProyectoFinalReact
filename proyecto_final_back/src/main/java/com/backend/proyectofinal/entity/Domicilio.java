package com.backend.proyectofinal.entity;


import javax.persistence.*;


@Entity
@Table(name="domicilios")
public class Domicilio {

    /* Atributos */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "id_domicilio")
    private Long id;
    private String calle;
    private String numero;
    private String localidad;
    private String provincia;


    /* Cosntructor */
    public Domicilio() {
    }

    public Domicilio(String calle, String numero, String localidad, String provincia) {
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
        this.provincia = provincia;
    }

    /* Getters y Setters */
    public Long getId() {
        return id;
    }

    public String getCalle() {
        return calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getLocalidad() {
        return localidad;
    }

    public void setLocalidad(String localidad) {
        this.localidad = localidad;
    }

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    /* Métodos */
    @Override
    public String toString() {
        return "Domicilio: " +
                calle + " " + numero + ", " + localidad +
                ", " + provincia +
                '.';
    }
}
