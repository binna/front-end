USE frontenddb;

CREATE TABLE tb_board(
	b_idx bigint auto_increment primary key,
    b_userid varchar(20) not null,
    b_title varchar(200) not null,
    b_content text,
    b_hit int default 0,
    b_regdate datetime default now(),
    b_file varchar(100),
    b_up int default 0
);

SELECT * FROM tb_board;
SELECT * FROM tb_board ORDER BY b_idx DESC;