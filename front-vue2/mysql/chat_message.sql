CREATE TABLE chat_message
(
    `chatmessage_id`  INT            NOT NULL    AUTO_INCREMENT COMMENT '채팅 메시지 아이디', 
    `chatroom_id`     INT            NULL        COMMENT '채팅방 아이디', 
    `sender_id`       INT            NULL        COMMENT '발신회원 아이디', 
    `created_at`      DATE           NULL        COMMENT '생성 일자', 
    `chatmessage`     VARCHAR(45)    NULL        COMMENT '채팅 메세지', 
    CONSTRAINT PK_chat_message PRIMARY KEY (chatmessage_id)
);