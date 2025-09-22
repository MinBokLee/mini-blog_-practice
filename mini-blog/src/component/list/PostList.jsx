import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";
/**
 * PostList컴포넌트는 map()함수를 사용하여 글의 개수만큼 PostListItem 컴포넌트를 생성한다.
 */

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function PostList(props){
    const{posts, onClickItem} = props;

    return (
        <Wrapper>
            {posts.map((post, index)=>{
                return(
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={()=>{
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;