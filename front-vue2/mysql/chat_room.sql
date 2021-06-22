-- chat_room Table Create SQL
CREATE TABLE chat_room
(
    `chat_room_id`    INT            NOT NULL    AUTO_INCREMENT COMMENT '채팅방 아이디', 
    `item_id`         INT            NULL        COMMENT '상품 아이디', 
    `user_id`         INT            NULL        COMMENT '회원 아이디', 
    `chat_room_path`  VARCHAR(45)    NULL        COMMENT '채팅 주소', 
    CONSTRAINT PK_chat_room PRIMARY KEY (chat_room_id)
);

ALTER TABLE chat_room COMMENT '채팅방';