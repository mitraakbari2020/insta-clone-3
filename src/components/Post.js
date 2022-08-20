import likeIcon from '../image/like_white.png';
import unLikeIcon from '../image/like_red.png';
import commentIcon from '../image/comment.png';
// import sendtIcon from '../image/send.png';
import ImageBox from "./ImageBox"
import VideoBox from "./VideoBox"
import Like from "./Like"
import Comment from "./Comment"
import SendIcon from '@material-ui/icons/Send';
import {TextField , Button}from '@material-ui/core';
import { useState, useEffect, useRef, useContext } from 'react';
import {UserContext} from "../App";
const Post = ({ item }) => {
    const user = useContext(UserContext)
    const [likes, setLikes] = useState(item.likes)
    const [liked, setLiked] = useState(false)

    const [showComments, setShowComments] = useState(false)
    const [addedComments, setAddedComments] = useState([])

    const commentInput = useRef()
    // const lastCommentsCount = useRef(addedComments.length)

    useEffect( () => {
        if(showComments){
            commentInput.current.focus()
        }
    },[showComments])
    const commentsCounter = () => {
        return (item.comments_count + addedComments.length)
    }
    // const comments_counter = useRef(item.comments_count)
    // useEffect( () => {
    //     if(addedComments.length > lastCommentsCount.current){
    //         comments_counter.current = comments_counter.current + 1
    //         console.log('Comment added')
    //     }else{
    //         comments_counter.current = comments_counter.current - 1
    //         console.log('Comment removed')
    //     }
    //     lastCommentsCount.current = addedComments.length
    // },[addedComments])

    // const [commentsCount, setCommnetsCount] = useState(item.comments_count);

    
    const deleteComment = (comment_index) => {
        setAddedComments(addedComments.filter((comment, index) => index !== comment_index))
        // setCommnetsCount( (c) => c - 1 )
    }

    const commentSubmit = (e) => {
        e.preventDefault();
        var commentValue = e.target['comment'].value

        setAddedComments([...addedComments,{
            username:user,
            comment:commentValue
        }])

        setShowComments(true)

        // setCommnetsCount( (c) => c + 1 )
    }
    return (
        <div>
            {
                item.type === 'video' ? <VideoBox likes={likes} setLikes={setLikes} setLiked={setLiked} liked={liked} link={item.media} /> : <ImageBox likes={likes} setLikes={setLikes} setLiked={setLiked} liked={liked} link={item.media} />
            }
            <div className="post-info">
                <div id={'post_' + item.id} className="post-caption">
                   {user}:caption here
                </div>
                <div className="post-footer">
                    <div className="post-likes left like_icon">
                        <Like id={item.id} likes={likes} setLikes={setLikes} setLiked={setLiked} liked={liked} image={ liked ? unLikeIcon : likeIcon } />
                    </div>
                    <div className="post-comments right like_icon">
                        <Comment showComments={showComments} setShowComments={setShowComments} id={item.id} comments_count={commentsCounter()} image={commentIcon} />
                    </div>

                </div>
                { showComments &&
                    <>
                        <div className='post-comments'>
                            <ul>
                                { item.comments.map((comment) => <li>{comment.username}:{comment.comment}</li>) }
                                { addedComments.map(( comment, index ) => <li>{comment.username}:{comment.comment} <span onClick={() => deleteComment(index)} className="delete_comment">X</span></li>) }
                            </ul>
                        </div>
                        <div style={{padding:'10px'}}>
                            <form className="post__form" onSubmit={commentSubmit}>
                                
                                <TextField
                                    label="Add Comment"
                                    size="small"
                                    veriant="outline"
                                    className="post__input"
                                    placeholder="Place your comment"
                                    name="comment"
                                    inputRef={commentInput}
                                    autoComplete="off"
                                />
                                <Button
                                    variant="contained"
                                    size="medium"
                                    endIcon={<SendIcon/>}
                                    type="submit"
                                    className="send_comment_icon"
                                >
                                    Send
                                </Button>


                            </form>
                        </div>
                    </>
                    
                }
                

            </div>
        </div>
    )
}

export default Post