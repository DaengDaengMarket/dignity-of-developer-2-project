CREATE TABLE item
(
    `item_id`          INT            NOT NULL    AUTO_INCREMENT COMMENT '상품 아이디', 
    `category_mid_id`  INT            NULL        COMMENT '중분류 카테고리 아이디', 
    `title`            VARCHAR(45)    NULL        COMMENT '제목', 
    `price`            INT            NULL        COMMENT '상품 가격', 
    `description`      VARCHAR(45)    NULL        COMMENT '상품 설명', 
    `hit`              INT            NULL        COMMENT '조회 수', 
    `nego_status`      INT            NULL        COMMENT '네고 상태', 
    `created_at`       DATE           NULL        COMMENT '생성 일자', 
    `seller_id`        INT            NULL        COMMENT '판매자 아이디', 
    `item_status`      STRING         NULL        COMMENT '상품 상태', 
    `updated_at`       DATE           NULL        COMMENT '변경 일자', 
    `buyer_id`         INT            NULL        COMMENT '구매자 아이디', 
    `si`               VARCHAR(45)    NULL        COMMENT '시', 
    `gu`               VARCHAR(45)    NULL        COMMENT '구', 
    CONSTRAINT PK_item PRIMARY KEY (item_id)
);