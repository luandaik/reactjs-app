import React, { useEffect, useState } from 'react';
import PaginationPost from './PaginationPost';
import PostFilterForm from './PostFilterForm';
import PostList from './PostList';

function Post(props) {
    const [postList, setPostList] = useState([]);
    const [fullPost,setFullPost]  = useState([]);
    const [filters,setFilters] = useState('https://test.restapi-vs.top/api/posts?page=1')
    useEffect(() => {
        async function fetchPostList() {
            try {
                const url = filters;
                const response = await fetch(url);
                const responseJSON = await response.json();
                // console.log(responseJSON);
                const { data } = responseJSON;
                setPostList(data);
                setFullPost(responseJSON);

            } catch (error) {
                console.log(error);
            }
        }
        fetchPostList(filters);
    }, [filters])
    function handlePageChange(newPage){
        // console.log(newPage);
        setFilters(newPage);
    }
    function handleFiltersChange(newFilter){
        setFilters(`https://test.restapi-vs.top/api/posts?&title=${newFilter.searchTerm}`)
       
    }
    return (
        <div>
            <h1>Post List</h1>
            <PostFilterForm onSubmit={handleFiltersChange} />
            <PostList posts={postList} />
            <PaginationPost pagination={fullPost} onPageChange={handlePageChange} />
        </div>
    );
}

export default Post;