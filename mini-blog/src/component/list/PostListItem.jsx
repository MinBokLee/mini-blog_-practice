import React from "react";
import styled from "styled-components";   

const Wrapper = styled.div`
    width: calc(100% - 32px);   /* 부모 너비에서 좌우 padding(16px * 2)을 제외한 너비 */
    padding: 16px;              /* 내부 여백 */
    display: flex;              /* 내부 요소들을 flexbox 레이아웃으로 배치 */
    flex-direction: column;     /* 내부 요소를 세로(column) 방향으로 정렬 */
    align-items: flex-start;    /* 내부 요소들을 왼쪽 정렬 */
    justify-content: center;    /* 세로 방향 가운데 정렬 */
    border: 1px solid grey;     /* 테두리: 회색 */
    border-radius: 8px;         /* 모서리를 둥글게 */
    cursor: pointer;            /* 마우스를 올리면 포인터 모양으로 변경 */
    background: white;          /* 배경색: 흰색 */

    :hover {
        background: lightgrey;  /* 마우스를 올렸을 때 배경색이 회색으로 바뀜 */
    }
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

function PostListItem(props){
     // 부모 컴포넌트에서 post 데이터와 클릭 핸들러를 전달받음
    const {post, onClick} = props;

    return (
        // Wrapper 영역 클릭 시 onClick 이벤트 실행
        <Wrapper onClick={onClick}>
            {/* 게시글 제목을 표시 */}
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    );
}

export default PostListItem;
/*
    PostListItem 컴포넌트는 글의 제목만 표시해 주면 되기 때문에 단순한다.
    TitleText를 이용해 props로 받은 post 객체에 들어 있는 title문자열을 표시해준다.
*/