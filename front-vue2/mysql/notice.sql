CREATE TABLE notice
(
    `notice_id`   INT            NOT NULL    AUTO_INCREMENT COMMENT '공지사항 아이디', 
    `title`       VARCHAR(45)    NULL        COMMENT '공지사항 제목', 
    `content`     VARCHAR(45)    NULL        COMMENT '공지사항 내용', 
    `created_at`  DATE           NULL        COMMENT '공지사항 등록 시간', 
    CONSTRAINT PK_notice PRIMARY KEY (notice_id)
);