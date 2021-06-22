CREATE TABLE blame
(
    `blame_id`    INT            NOT NULL    AUTO_INCREMENT COMMENT '신고 아이디', 
    `item_id`     INT            NULL        COMMENT '상품 아이디', 
    `user_id`     INT            NULL        COMMENT '신고 회원 아이디', 
    `content`     VARCHAR(45)    NULL        COMMENT '신고 내용', 
    `created_at`  DATE           NULL        COMMENT '신고 일자', 
    CONSTRAINT PK_blame PRIMARY KEY (blame_id)
);