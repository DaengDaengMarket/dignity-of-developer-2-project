package com.dignity.puppymarket.dto;

import com.dignity.puppymarket.domain.ItemImage;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ItemImageResponseDto {
    private Long id;

    private String path;

    private int orders;

    @Builder
    public ItemImageResponseDto(Long id, String path, int orders) {
        this.id = id;
        this.path = path;
        this.orders = orders;
    }

    public static ItemImageResponseDto of(ItemImage itemImage) {
        return ItemImageResponseDto.builder()
                .id(itemImage.getId())
                .path(itemImage.getPath())
                .orders(itemImage.getOrders())
                .build();
    }
}
