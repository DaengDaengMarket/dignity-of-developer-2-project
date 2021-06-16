package com.dignity.puppymarket.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Advertise {
    @Id
    @GeneratedValue
    private Long id;
    private String imagePath;

    @Builder
    public Advertise(Long id, String imagePath) {
        this.id = id;
        this.imagePath = imagePath;
    }
}
