package com.dignity.puppymarket.dto.Item;

import com.dignity.puppymarket.domain.Gu;
import com.dignity.puppymarket.domain.Item;
import com.dignity.puppymarket.domain.ItemImage;
import com.dignity.puppymarket.domain.Si;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ItemHomeGetResponseDto {
    private Long id;

    private String name;

    private int price;

    private LocalDateTime createdAt;

    private List<ItemImage> itemImageList;

    private Si si;

    private Gu gu;

    @Builder
    public ItemHomeGetResponseDto(Long id, String name, int price, LocalDateTime createdAt,
                                  List<ItemImage> itemImageList, Si si, Gu gu) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.createdAt = createdAt;
        this.itemImageList = itemImageList;
        this.si = si;
        this.gu = gu;
    }

    public static ItemHomeGetResponseDto of(Item item) {
        return ItemHomeGetResponseDto.builder()
                .id(item.getId())
                .name(item.getName())
                .price(item.getPrice())
                .createdAt(item.getCreatedAt())
                .itemImageList(item.getItemImageList())
                .si(item.getSi())
                .gu(item.getGu())
                .build();
    }
}
