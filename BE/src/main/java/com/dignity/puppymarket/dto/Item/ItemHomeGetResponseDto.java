package com.dignity.puppymarket.dto.Item;

import com.dignity.puppymarket.domain.Gu;
import com.dignity.puppymarket.domain.ItemImage;
import com.dignity.puppymarket.domain.Si;
import lombok.AccessLevel;
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
}
