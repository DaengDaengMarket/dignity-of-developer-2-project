package com.dignity.puppymarket.dto;

import com.dignity.puppymarket.domain.BigCategory;
import com.dignity.puppymarket.domain.Blame;
import com.dignity.puppymarket.domain.ChatMessage;
import com.dignity.puppymarket.domain.ChatRoom;
import com.dignity.puppymarket.domain.Gu;
import com.dignity.puppymarket.domain.Item;
import com.dignity.puppymarket.domain.Si;
import com.dignity.puppymarket.domain.Wish;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class UserResponseDto {
    private Long id;

    private String email;

    private String password;

    private String nickname;

    private String imagePath;

    private String tel;

    private Float rate;

    private Si si;

    private Gu gu;

    private BigCategory bigCategory;

    private List<Item> sellerItemList;

    private List<Item> buyerItemList;

    private Blame blame;

    private Wish wish;

    private List<ChatRoom> chatRoomList;

    private List<ChatMessage> chatMessageList;
}
