-- review Table Create SQL
CREATE TABLE review
(
    `review_id`   INT            NOT NULL    AUTO_INCREMENT COMMENT '리뷰 아이디', 
    `content`     VARCHAR(45)    NULL        COMMENT '리뷰 내용', 
    `rate`        FLOAT          NULL        COMMENT '리뷰 점수', 
    `item_id`     INT            NULL        COMMENT '상품 아이디', 
    `created_at`  DATE           NULL        COMMENT '생성 일자', 
    CONSTRAINT PK_review PRIMARY KEY (review_id)
);

ALTER TABLE review COMMENT '후기';
