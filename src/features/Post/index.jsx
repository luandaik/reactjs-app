import React, { useEffect, useState } from 'react';
import PaginationPost from './PaginationPost';
import PostList from './PostList';

function Post(props) {
    const [postList, setPostList] = useState([]);
    const [fullPost,setFullPost]  = useState([]);
    useEffect(() => {
        async function fetchPostList() {
            try {
                const url = 'https://test.restapi-vs.top/api/posts?page=1';
                const response = await fetch(url);
                const responseJSON = await response.json();
                console.log(responseJSON);
                const { data } = responseJSON;
                setPostList(data);
                setFullPost(responseJSON);

            } catch (error) {
                console.log(error);
            }
        }
        fetchPostList();
    }, [])

    return (
        <div>
            <h1>Post List</h1>
            <PostList posts={postList} />
            <PaginationPost pagination={fullPost} />
        </div>
    );
}

export default Post;