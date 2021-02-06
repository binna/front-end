USE frontenddb;

-- 댓글 테이블 생성
CREATE TABLE tb_reply(
	re_idx bigint auto_increment primary key,
    re_userid varchar(20) not null,
    re_content varchar(1000) not null,
    re_regdate datetime default now(),
    re_board_idx bigint not null,
    FOREIGN KEY (re_board_idx) REFERENCES tb_board(b_idx)
);

SELECT * FROM tb_reply;