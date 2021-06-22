CREATE TABLE big_category
(
    `big_category_id`  INT            NOT NULL    AUTO_INCREMENT COMMENT '대분류 카테고리 아이디', 
    `name`             VARCHAR(45)    NULL        COMMENT '카테고리명', 
    CONSTRAINT PK_big_category PRIMARY KEY (big_category_id)
);

ALTER TABLE big_category COMMENT '카테고리';
