import { useReducer } from 'react'

const likeHandler = (state, action) => {
    switch (action.type) {
        case "like":
            return state + action.payload;
            break;
        case "dislike":
            return state + action.payload;
            break;
        default:
            return state;
    }
}
const Like = ({ id, likes, setLikes, image, liked, setLiked }) => {
    
    const [likes_count, dispatch] = useReducer(likeHandler, likes);

    const like = (count) => {
        dispatch({
            type: 'like',
            payload: count
        })
    }

    const dislike = (count) => {
        dispatch({
            type: 'dislike',
            payload: count
        })
    }

    const doLike = (liked) =>{
        if(liked){
            setLiked(false)
            dislike(-1)
        }else{
            setLiked(true)
            like(1)
        }

    } 

    return (
        <div>
            <img className="like_icon" onClick={() => doLike(liked)} src={image} alt="" />{likes_count}
        </div>

    );
}
export default Like;


// const Like = ({id, likes, setLikes, image, liked, setLiked}) => {

    // const likeHandle = (setLiked, liked,likes, setLikes) => {
    //     setLikes(!liked ? likes + 1 : likes - 1)
    //     setLiked(!liked)
    // }