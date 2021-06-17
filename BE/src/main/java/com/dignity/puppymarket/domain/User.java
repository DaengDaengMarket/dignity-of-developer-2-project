package com.dignity.puppymarket.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {
    @Id
    @GeneratedValue
    private Long id;

    private String email;

    private String password;

    private String nickname;

    private String imagePath;

    private String tel;

    private Float rate;

    @Enumerated(EnumType.STRING)
    private String si;

    @Enumerated(EnumType.STRING)
    private String gu;

    @Enumerated(EnumType.STRING)
    private BigCategory bigCategory;

    //User(seller) 1 : N Item
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "seller")
    List<Item> sellItemList = new ArrayList<>();

    //User(buyer) 1: N Item
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "buyer")
    List<Item> buyItemList = new ArrayList<>();
}
