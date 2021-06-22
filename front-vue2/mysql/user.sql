CREATE TABLE user
(
    `user_id`          INT            NOT NULL    AUTO_INCREMENT COMMENT '회원 아이디', 
    `email`            VARCHAR(45)    NULL        COMMENT '회원 이메일', 
    `password`         VARCHAR(45)    NULL        COMMENT '비밀번호', 
    `nickname`         VARCHAR(45)    NULL        COMMENT '닉네임', 
    `big_category_id`  INT            NULL        COMMENT '관심사 카테고리', 
    `image_path`       VARCHAR(45)    NULL        COMMENT '회원 이미지 경로', 
    `tel`              VARCHAR(45)    NULL        COMMENT '핸드폰 번호', 
    `si`               VARCHAR(45)    NULL        COMMENT '시', 
    `gu`               VARCHAR(45)    NULL        COMMENT '구', 
    `rate`             FLOAT          NULL        COMMENT '리뷰 점수', 
    CONSTRAINT PK_user PRIMARY KEY (user_id)
);