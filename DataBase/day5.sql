USE frontenddb;

-- 테이블 확인
SHOW TABLES;

-- 전체 필드 확인
SELECT * FROM tb_member;

-- 특정 필드 가져오기
SELECT mem_idx, mem_userid, mem_name, mem_hp FROM tb_member;
SELECT mem_userid, mem_name, mem_hp, mem_idx FROM tb_member;

-- 특정 조건에 따라 필드 가져오기
SELECT * FROM tb_member WHERE mem_idx = 1;
SELECT * FROM tb_member WHERE mem_userid = 'melon';
SELECT * FROM tb_member WHERE mem_userid = 'apple' and mem_userpw = '1111';
SELECT * FROM tb_member WHERE mem_userid = 'apple' and mem_userpw = '1234';

SELECT * FROM tb_member;

-- NULL
SELECT * FROM tb_member WHERE mem_hobby is null;
SELECT * FROM tb_member WHERE mem_hobby is not null;

-- 범위
SELECT * FROM tb_member WHERE mem_point >= 0 and mem_point <= 1500;
SELECT * FROM tb_member WHERE mem_point between 0 and 1500;
SELECT * FROM tb_member WHERE mem_idx = 1 or mem_idx = 3 or mem_idx = 5;
SELECT * FROM tb_member WHERE mem_idx in (1, 3, 5);

-- 데이터 정렬
SELECT * FROM tb_member ORDER BY mem_point;			-- 오름차순 (ASC 생략)
SELECT * FROM tb_member ORDER BY mem_point DESC;	--  내림차순
SELECT mem_idx, mem_userid, mem_name, mem_point FROM tb_member ORDER BY mem_point;
SELECT mem_idx, mem_userid, mem_name, mem_point FROM tb_member ORDER BY mem_point ASC, mem_idx DESC;

SELECT * FROM tb_member;

-- 그룹
-- SELECT "그룹을 맞은 필드", "그룹함수" FROM tb_member GROUP BY mem_gender;
SELECT mem_gender FROM tb_member GROUP BY mem_gender;
SELECT count(mem_idx) FROM tb_member GROUP BY mem_gender;
SELECT mem_gender, count(mem_idx) as cnt FROM tb_member GROUP BY mem_gender;
SELECT mem_gender, max(mem_point) as max FROM tb_member GROUP BY mem_gender;
SELECT mem_gender, min(mem_point) as min FROM tb_member GROUP BY mem_gender;
SELECT mem_gender, avg(mem_point) as avg FROM tb_member GROUP BY mem_gender;
SELECT mem_gender, sum(mem_point) as sum FROM tb_member GROUP BY mem_gender;

SELECT * FROM tb_profile;
INSERT INTO tb_profile VALUES (5, 22, '여자', 150, 50, '2000-01-30');
INSERT INTO tb_profile VALUES (7, 30, '남자', 180, 80, '2000-01-30');
SELECT * FROM tb_profile;

-- 조인 