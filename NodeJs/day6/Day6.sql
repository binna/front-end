use frontenddb;

create table tb_simplemember(
	sm_idx int auto_increment primary key,
    sm_userid varchar(20) unique not null,
    sm_pass varchar(200) not null,
    sm_name varchar(20) not null,
    sm_age int,
    sm_regdate datetime default now()
);

select * from tb_simplemember;

insert into tb_simplemember (sm_userid, sm_pass, sm_name, sm_age) values ('apple', sha1(1111), '김사과', 20);
select * from tb_simplemember;
select * from tb_simplemember where sm_userid='apple' and sm_pass=sha1('1111');

select * from tb_simplemember;