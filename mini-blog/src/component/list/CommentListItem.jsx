import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px)
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex--start
    justify-content: center;
    border: 1px solid grey;
    cursor: pointer;
    background: white;
    :hover{
        background: lightgrry;  
    }
`;

const ContentText = styled.p`
    font-size: 16px;
    white-space: pre-wrap;
`;

function CommentListItem(porps) {
    const {comment} = porps;
    <Wrapper>
        <ContentText>{Comment.content}</ContentText>
    </Wrapper>
}


export default CommentListItem;

// props에서 comment객체 하나만 사용한다.
// comment 객체에는 사용자가 작성한 댓글 내용이 들어 있다. 
// 댓글 내용을 Styled-components를 통해 만든 COntentText라는 컴포넌트를 이용해서 화면에 표시하게 된다.
// 글은 클릭이 가능했지만 댓글은 별도록 클릭하는 기능이 없기 때문에, onClick 이벤트를 따로 처리해 주지 않는다.