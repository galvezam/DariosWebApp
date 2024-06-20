package com.dariospainting.DariosWebApp.core;

import com.fasterxml.jackson.annotation.JacksonInject;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Getter;
import org.hibernate.service.spi.InjectService;
import org.springframework.data.annotation.Id;

public class Employee {


    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Getter
    private String name;
    @Getter
    private double salary;
    @Getter
    private String address;
    @Getter
    private int phoneNumber;
    private String status;
    @Getter
    private String email;

    public Employee() {
        super();
    }

    public Employee(String name, double salary, String address, int phoneNumber, String status) {
        this.name = name;
        this.salary = salary;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.status = status;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Employee: " + name  + "\nPhoneNumber: " + phoneNumber + "\nStatus:" + status;
    }
}
