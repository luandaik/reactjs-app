import React, { useEffect, useState } from 'react';
import PaginationPost from './PaginationPost';
import PostFilterForm from './PostFilterForm';
import PostList from './PostList';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useRouteMatch } from 'react-router-dom';
import categoryApi from '../../api/categoryApi';
function Post(props) {
    const location = useLocation();
    const history = useHistory();
    const math = useRouteMatch();
    const [postList, setPostList] = useState([]);
    const [fullPost, setFullPost] = useState({});
    const [filters, setFilters] = useState(() => {
        const params = queryString.parse(location.search);
        // console.log(params);
        if (params.title) return `https://test.restapi-vs.top/api/posts?page=1&title=${params.title}`;
        return 'https://test.restapi-vs.top/api/posts?page=1';
    })


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
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPostList(filters);
    }, [filters]);
    useEffect(()=>{
        const fetchCategories = async ()=>{
            const categoryList = await categoryApi.getAll();
            console.log(categoryList);
        };
        fetchCategories();
    },[]);
    function handlePageChange(newPage) {
        // console.log(newPage);
        setFilters(newPage);
    }

    function handleFiltersChange(newFilter) {
        const queryParam  = {title:newFilter.searchTerm};
        history.push({
            patchname: math.path,
            search: queryString.stringify(queryParam),
        });
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