CREATE TABLE advertise
(
    `advertise_id`  INT            NOT NULL    AUTO_INCREMENT COMMENT '광고 아이디', 
    `image_path`    VARCHAR(45)    NULL        COMMENT '광고 이미지 경로', 
    `orders`        INT            NULL        COMMENT '광고 순서', 
    CONSTRAINT PK_advertise PRIMARY KEY (advertise_id)
);

ALTER TABLE advertise COMMENT '광고';
