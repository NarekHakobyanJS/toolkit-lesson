import React from 'react'
import PostItem from './PostItem'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../features/post/postSlice'

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.post.posts)
    return (
        <div>
            <button
                type='submit'
                onClick={() => dispatch(getPosts())}
            >
                Get posts
            </button>
            {
                posts?.map(post => (
                    <PostItem post={post}/>
                ))
            }
        </div>
    )
}

export default Posts