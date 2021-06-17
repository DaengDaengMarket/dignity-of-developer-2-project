package com.dignity.puppymarket.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class Item {
    @Id
    @GeneratedValue
    @Column(name = "item_id")
    private Long id;

    private String name;

    private int price;

    private String description;

    @Builder.Default
    private int hit = 0;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private ItemStatus itemStatus = ItemStatus.NEW;

    @Enumerated(EnumType.STRING)
    private NegoStatus negoStatus;

    @Enumerated(EnumType.STRING)
    private BigCategory bigCategory;

    @Enumerated(EnumType.STRING)
    private MidCategory midCategory;

    @CreatedDate
    private LocalDateTime createAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    @Enumerated(EnumType.STRING)
    private Si si;

    @Enumerated(EnumType.STRING)
    private Gu gu;

    //Item N : 1 User(seller)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User seller;

    //Item N : 1 User(buyer)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "buyer_id")
    private User buyer;

    public Item(Long id, String name, int price, String description, int hit, ItemStatus itemStatus,
                NegoStatus negoStatus, BigCategory bigCategory, MidCategory midCategory, LocalDateTime createAt,
                LocalDateTime updatedAt, Si si, Gu gu, User seller, User buyer) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.hit = hit;
        this.itemStatus = itemStatus;
        this.negoStatus = negoStatus;
        this.bigCategory = bigCategory;
        this.midCategory = midCategory;
        this.createAt = createAt;
        this.updatedAt = updatedAt;
        this.si = si;
        this.gu = gu;
        this.seller = seller;
        this.buyer = buyer;
    }
}
