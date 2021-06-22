-- mid_category Table Create SQL
CREATE TABLE mid_category
(
    `mid_category_id`  INT            NOT NULL    AUTO_INCREMENT COMMENT '중분류 카테고리 아이디', 
    `big_category_id`  INT            NULL        COMMENT '대분류 카테고리 아이디', 
    `name`             VARCHAR(45)    NULL        COMMENT '카테고리명', 
    CONSTRAINT PK_mid_category PRIMARY KEY (mid_category_id)
);

ALTER TABLE mid_category