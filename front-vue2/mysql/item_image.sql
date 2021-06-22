CREATE TABLE item_image
(
    `item_image_id`  INT            NOT NULL    AUTO_INCREMENT COMMENT '이미지 아이디', 
    `path`           VARCHAR(45)    NULL        COMMENT '이미지 경로', 
    `orders`         INT            NULL        COMMENT '이미지 순서', 
    `item_id`        INT            NULL        COMMENT '상품 아이디', 
    CONSTRAINT PK_item_image PRIMARY KEY (item_image_id)
);