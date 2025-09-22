import React from "react";
import styled from "styled-components";


// styled-components를 사용해 <textarea>를 꾸민 컴포넌트 생성
// props.height 값이 있으면 height를 동적으로 설정하고, 없으면 기본 높이를 사용
const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);                                /* 전체 너비에서 좌우 여백 제외 */
    ${props =>
         props.height && 
         `
         height: ${props.height}px;
         `} /* height가 전달되면 해당 값으로 설정 */
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

function TextInput(props){

    // height: 높이, value: 텍스트 값, onChange: 값이 변경될 때 실행되는 함수
    const {height, value, onChange} = props;

    return <StyledTextarea 
            height={height} // 높이 값
            value={value}   //textarea 안에 입력될 값
            onChange={onChange} // 값이 변경될 때 실행되는 이벤트 헨들러
        />;
        
    
}

export default TextInput;