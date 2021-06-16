package com.dignity.puppymarket.domain;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Item {

    @Id @GeneratedValue
    private Long id;

    private String name;
    private int price;
    private String description;
    private int hit;

    @ManyToOne
    private User seller;

//    private Member buyer;

    private ItemStatus status;
    private NegoStatus negoFlag;
    private Categories categoryMid;
    private LocalDateTime createAt;
    private LocalDateTime updatedAt;
    private String si;
    private String gu;
}
