import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
//Pages
import MainPage from "./component/page/MainPage"
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.p`
  font-size:24px;
  font-weight: bold;
  text-align: center;
`;

function App(props){
  return(
    <BrowserRouter>
      <MainTitleText>소플의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element= {<MainPage />}/>
        <Route path= "post-write" element={< PostWritePage />} />
        <Route path= "post/:postId" element={< PostViewPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
/**
 * react-router-dom을 이용해 총 세 가지의 경로에 대해서 라우팅을 제공함.
 *  index 경로인 /로 접속하면 MainPage 컴포넌트를 보여 주고, 
 * /post-write로 접속하면 PostWritPage컴포넌트를 보여주며 마지막으로 /post/:postId로 접속하면 PostBViewPage 컴포넌트를 보여준다.
 * 여기서 마지막 경로에 있는 :postId는 동적으로 변하는 파라미터를 위한 값이다. 경로에 (:)을 사용하고 아이디를 입력하면
 *  실제 컴포넌트에서 userParams() 훅을 사용해 아이디로 해당 값을 가져올 수 있다. 
 */