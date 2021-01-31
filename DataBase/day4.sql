-- 데이터베이스 확인
-- SHOW DATABASES;
SHOW DATABASES;

-- 데이터베이스 생성
-- CREATE DATABASE 데이터베이스명;
CREATE DATABASE frontenddb;
SHOW DATABASES;

-- 데이터베이스 삭제
-- DROP DATABASE 데이터베이스명;
DROP DATABASE frontenddb;
SHOW DATABASES;
CREATE DATABASE frontenddb;

-- 데이터베이스 사용
-- USE 데이터베이스명;
USE frontenddb;

-- 회원테이블 만들기
CREATE TABLE tb_member (
    mem_idx bigint auto_increment primary key,
    mem_userid varchar(20) unique not null,
    mem_userpw varchar(20) not null,
    mem_name varchar(20) not null,
    mem_hp varchar(13) not null,
    mem_email varchar(50),
    mem_hobby varchar(100),
    mem_ssh1 char(6) not null,
    mem_ssh2 char(7) not null,
    mem_zipcode char(5) not null,
    mem_address1 varchar(100),
    mem_address2 varchar(100),
    mem_address3 varchar(100),
    mem_regdate datetime default now()
);

-- 테이블 구조 확인
-- DESC 테이블명;
DESC tb_member;

-- 테이블 삭제
-- DROP TABLE 테이블명;
DROP TABLE tb_member;
DESC tb_member;
CREATE TABLE tb_member (
    mem_idx bigint auto_increment primary key,
    mem_userid varchar(20) unique not null,
    mem_userpw varchar(20) not null,
    mem_name varchar(20) not null,
    mem_hp varchar(13) not null,
    mem_email varchar(50),
    mem_hobby varchar(100),
    mem_ssh1 char(6) not null,
    mem_ssh2 char(7) not null,
    mem_zipcode char(5) not null,
    mem_address1 varchar(100),
    mem_address2 varchar(100),
    mem_address3 varchar(100),
    mem_regdate datetime default now()
);
DESC tb_member;

-- 테이블 필드 추가
-- ALTER TABLE 테이블명 ADD 컬럼명 컬럼타입 제약조건
ALTER TABLE tb_member ADD mem_point int default 0;
DESC tb_member;

-- 테이블 필드 수정
-- ALTER TABLE 테이블명 modify colum 컬럼명 컬럼타입 제약조건;
ALTER TABLE tb_member modify column mem_address3 varchar(50);
DESC tb_member;

-- 테이블 필드 삭제
-- ALTER TABLE 테이블명 DROP 컬럼명;
ALTER TABLE tb_member DROP mem_point;
DESC tb_member;

-- 데이터 삽입(INSERT)
-- 1. INSERT INTO 테이블명 VALUES (값1, 값2, 값3, 값4, ... );
-- 2. INSERT INTO 테이블명 (필드명1, 필드명2, 필드명3, ... ) VALUES (값1, 값2, 값3, ... );
INSERT INTO tb_member (mem_userid, mem_userpw, mem_name, mem_hp, mem_email, mem_hobby, 
							mem_ssh1, mem_ssh2, mem_zipcode, mem_address1, mem_address2, mem_address3) 
			VALUES ('apple', '1111', '김사과', '010-1111-1111', 'apple@apple.com', '드라이브',
						'001011', '4068518', '12345', '서울 강남구', '역삼동', '11-1');

-- 모든 데이터 확인
SELECT * FROM tb_member;

ALTER TABLE tb_member ADD mem_point int default 0;
DESC tb_member;
SELECT * FROM tb_member;

-- 값이 다른 행을 10개 추가
INSERT INTO tb_member (mem_userid, mem_userpw, mem_name, mem_hp, mem_email, mem_hobby, 
							mem_ssh1, mem_ssh2, mem_zipcode, mem_address1, mem_address2, mem_address3) 
			VALUES ('banana', '1234', '반하나', '010-2222-2222', 'banana@banana.com', '영화감상',
						'001011', '4068518', '12345', '서울 서초구', '양재동', '11-1');
INSERT INTO tb_member (mem_userid, mem_userpw, mem_name, mem_hp, mem_email, mem_hobby, 
							mem_ssh1, mem_ssh2, mem_zipcode, mem_address1, mem_address2, mem_address3) 
			VALUES ('orange', '1212', '오렌지', '010-3333-3333', 'orange@orange.com', '등산',
						'001011', '4068518', '12345', '서울 서초구', '서초동', '11-1');
INSERT INTO tb_member (mem_userid, mem_userpw, mem_name, mem_hp, mem_email, mem_hobby, 
							mem_ssh1, mem_ssh2, mem_zipcode, mem_address1, mem_address2, mem_address3) 
			VALUES ('melon', '2222', '이멜론', '010-4444-4444', 'melon@melon.com', '게임',
						'001011', '4068518', '12345', '서울 서초구', '반포동', '11-1');
INSERT INTO tb_member (mem_userid, mem_userpw, mem_name, mem_hp, mem_email, mem_hobby, 
							mem_ssh1, mem_ssh2, mem_zipcode, mem_address1, mem_address2, mem_address3) 
			VALUES ('berry', '0000', '배애리', '010-5555-5555', 'berry@berry.com', '드라이브',
						'001011', '4068518', '12345', '서울 동작구', '사당동', '11-1');
INSERT INTO tb_member (mem_userid, mem_userpw, mem_name, mem_hp, mem_email, mem_hobby, 
							mem_ssh1, mem_ssh2, mem_zipcode, mem_address1, mem_address2, mem_address3) 
			VALUES ('tomato', '3333', '도마토', '010-6666-6666', 'tomato@tomato.com', '등산',
						'001011', '4068518', '12345', '서울 강남구', '역삼동', '11-1');
INSERT INTO tb_member (mem_userid, mem_userpw, mem_name, mem_hp, mem_email, mem_hobby, 
							mem_ssh1, mem_ssh2, mem_zipcode, mem_address1, mem_address2, mem_address3) 
			VALUES ('avocado', '4444', '안카도', '010-7777-7777', 'avocado@avocado.com', '게임',
						'001011', '4068518', '12345', '서울 서초구', '방배동', '11-1');
INSERT INTO tb_member (mem_userid, mem_userpw, mem_name, mem_hp, mem_email, mem_hobby, 
							mem_ssh1, mem_ssh2, mem_zipcode, mem_address1, mem_address2, mem_address3) 
			VALUES ('cherry', '5555', '채애리', '010-8888-8888', 'cherry@cherry.com', '드라이브',
						'001011', '4068518', '12345', '서울 동작구', '신대방동', '11-1');
INSERT INTO tb_member (mem_userid, mem_userpw, mem_name, mem_hp, mem_email, mem_hobby, 
							mem_ssh1, mem_ssh2, mem_zipcode, mem_address1, mem_address2, mem_address3) 
			VALUES ('coconet', '8888', '고코넛', '010-9999-9999', 'coconet@coconet.com', '영화감상',
						'001011', '4068518', '12345', '서울 동작구', '흑석동', '11-1');
INSERT INTO tb_member (mem_userid, mem_userpw, mem_name, mem_hp, mem_email, mem_hobby, 
							mem_ssh1, mem_ssh2, mem_zipcode, mem_address1, mem_address2, mem_address3) 
			VALUES ('grapes', '9999', '구래프', '010-0000-0000', 'grapes@grapes.com', '쇼핑',
						'001011', '4068518', '12345', '서울 구로구', '구로동', '11-1');
SELECT * FROM tb_member;

-- 데이터 수정(UPDATE)
-- 1. UPDATE 테이블명 SET 필드명1=값1, 필드명2=값2, ... ;
SET SQL_SAFE_UPDATES = 0;
UPDATE tb_member SET mem_point = 500;
SELECT * FROM tb_member;
-- 2. UPDATE 테이블명 SET 필드명1=값1, 필드명2=값2, ... WHERE 조건절;
UPDATE tb_member SET mem_point = 300 WHERE mem_userid = 'apple';
SELECT * FROM tb_member;

UPDATE tb_member SET mem_point = mem_point + 1000;
SELECT * FROM tb_member;

-- 데이터 삭제(DELETE)
-- 1. DELETE FROM 테이블명;
-- 2. DELETE FROM 테이블명 WHERE 조건절;
DELETE FROM tb_member WHERE mem_idx = 10;
SELECT * FROM tb_member;

-- 추가 테이블
CREATE TABLE tb_profile (
    pro_memidx bigint,
    pro_age int,
    pro_gender enum('남자', '여자'),
    pro_height double,
    pro_weight double,
    pro_birthday datetime,
    foreign key(pro_memidx) references tb_member(mem_idx)
);

INSERT INTO tb_profile VALUES (1, 20, '여자', 160.5, 50.5, '2000-01-24');
SELECT * FROM tb_profile;

-- foreign key 에러
-- INSERT INTO tb_profile VALUES (10, 25, '남자', 170.5, 60.5, '1995-01-24');

INSERT INTO tb_profile (pro_memidx, pro_age) VALUES (2, 22);
SELECT * FROM tb_profile;

INSERT INTO tb_profile (pro_memidx, pro_age, pro_gender, pro_height, pro_weight) VALUES (3, 25, '남자', 180.5, 80.5);
SELECT * FROM tb_profile;

-- 외래키가 연결되어 있는 경우 삭제(원본 테이블의 데이터를 삭제)
-- DELETE FROM tb_member WHERE mem_idx = 2;	-- 외래키 데이터가 존재하기 때문에 삭제 불가

-- 1. 외래키 데이터 삭제
DELETE FROM tb_profile WHERE pro_memidx = 2;
-- 2. 원본 데이터 삭제
DELETE FROM tb_member WHERE mem_idx = 2;
SELECT * FROM tb_member;
SELECT * FROM tb_profile;