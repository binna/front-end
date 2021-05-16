import React from 'react';
import styled from 'styled-components';
import TodoItem from './todoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text="프론트엔드 프로젝트 만들기"/>
            <TodoItem text="밥 잘 챙겨먹기" done={true}/>
            <TodoItem text="운동하기" done={true}/>
            <TodoItem text="일기쓰기"/>
        </TodoListBlock>
    );
}

export default TodoList;