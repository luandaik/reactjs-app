import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.defaultProps = {
    posts : [],
}

function PostList(props) {
    const {posts} = props;
    return (
        <ul className="post-list">
            {posts.map(post=>(
                <li key={post.id}><a href="https://google.com">{post.title}</a></li>
            ))}
        </ul>
    );
}

export default PostList ;