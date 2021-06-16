package com.dignity.puppymarket.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Item {
    @Id
    @GeneratedValue
    @Column(name = "item_id")
    private Long id;

    private String name;
    private int price;
    private String description;
    private int hit;

    @ManyToOne
    private User seller;

    @ManyToOne
    private User buyer;

    private ItemStatus itemStatus;
    private NegoStatus negoStatus;
    private Categories categoryMid;
    private LocalDateTime createAt;
    private LocalDateTime updatedAt;
    private String si;
    private String gu;
}
