package com.dignity.puppymarket.dto;

import com.dignity.puppymarket.dto.Item.ItemHomeGetResponseDto;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class HomeResponseDto {
    private List<ItemHomeGetResponseDto> itemList;

    private List<AdvertiseResponseDto> advertiseList;

    @Builder
    public HomeResponseDto(List<ItemHomeGetResponseDto> itemList, List<AdvertiseResponseDto> advertiseList) {
        this.itemList = itemList;
        this.advertiseList = advertiseList;
    }
}
