CREATE TABLE wish
(
    `wish_id`  INT        NOT NULL    AUTO_INCREMENT COMMENT '찜 아이디', 
    `user_id`  INT        NULL        COMMENT '회원 아이디', 
    `item_id`  INT        NULL        COMMENT '상품 아이디', 
    `wished`   CHAR(1)    NULL        COMMENT '찜 여부', 
    CONSTRAINT PK_wish PRIMARY KEY (wish_id)
);