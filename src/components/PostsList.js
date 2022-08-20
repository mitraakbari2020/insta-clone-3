import { useState } from 'react'
import Post from './Post'

const PostsList = ({ posts, likes, setLikes }) => {
    const [commentsShow, setCommentsShow] = useState([]);
    
    return (
        <div>
            { posts.map( (item) => {
                return <Post key={item.id} commentsShow={commentsShow} setCommentsShow={setCommentsShow}  likes={likes} setLikes={setLikes} item={item} />
            })}
        </div>
    )
}

export default PostsList