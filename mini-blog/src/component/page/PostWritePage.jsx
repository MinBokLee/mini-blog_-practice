import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const Wrapper = styled.div`
    padding:         16px;
    width:           calc(100% - 32px);
    display:         flex;
    flex-direction:  column;
    align-items:     center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;    
    }
    `;

    function PostWritePage(props){
        const navigate = useNavigate();

        const [title, setTitle]     =useState("");
        const [content, setContent] =useState("");
        
        return(
            <Wrapper>
                <Container>
                    <TextInput 
                        height={20}
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />

                    <TextInput 
                        height={480}
                        value={content}
                        onChange = {(event)=>{
                            setContent(event.target.value);
                        }}
                    />

                    <Button
                        title = "글 작성하기"
                        onClick={()=> {
                            navigate("/")
                        }}
                    />    

                </Container>
            </Wrapper>
        );
    }
export default PostWritePage;


/**
 * PostWritePage 컴포넌트는 두 개의 state를 갖고 있다.
 * 하나는 글의 제목을 위한 state이고, 다른 하나는 글의 내용을 위한 state이다. 
 * 두 개의 state() 훅을 이용하여 선언한 것을 볼 수 있다. 
 * 그리고 실제 화면에 나타나는 부분은 TextInout 컴포넌트를 사용해서 글의 제목과 내용을 각각 입력받을 수 있도록 구성함.
 * 마지막으로 제일 화면 제일 하단에는 Button 컴포넌트를 사용해서 글 작성 버튼을 넣음.
 */