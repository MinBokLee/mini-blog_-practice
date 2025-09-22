import React from "react";
import styled from "styled-components";

// styled-components 라이브러리를 사용해서 버튼 스타일을 정의
// styled.button 을 이용해 HTML의 <button> 태그를 꾸민 새로운 컴포넌트를 만듦
const StyledButton = styled.button`
    padding: 8px 16px;      /* 버튼 안쪽 여백 */
    font-size: 16px;        /* 글자 크기 */
    border-width: 1px;      /* 테두리 두께 */
    border-radius: 8px;     /* 모서리 둥글게 */
    cursor: pointer;        /* 마우스 올리면 커서가 손가락 모양으로 바뀜 */
`;


function Button(props){
    // props에서 title(버튼에 보이는 글자), onClick(클릭 이벤트 핸들러) 추출
    const {title, onClick} = props;
    
    // StyledButton을 렌더링하고 클릭 이벤트와 버튼 텍스트를 전달
    return(
        <StyledButton onClick={onClick}> 
            {title || "button"} {/* title이 없으면 기본값 "button 표시*/}
        </StyledButton>
    );
}

export default Button;