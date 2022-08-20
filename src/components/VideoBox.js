import {useState} from "react"
const VideoBox = ({ link, setLiked, liked, likes, setLikes }) => {
  const [videoDblClick, setvideoDblClick] = useState(false)
  const likeHandle = (setLiked, liked, likes, setLikes, e) => {
    setvideoDblClick(true)
    setTimeout(() => {
      setvideoDblClick(false)
    }, 500)
    setLikes(!liked ? likes + 1 : likes - 1)
    setLiked(!liked)
    e.preventDefault()
    console.log(e)
  }
    return (
      <div style={{ position: 'relative' }}>
        <video onDoubleClick={(e) => likeHandle(setLiked, liked, likes, setLikes, e)} className="box">
          <source src={link} alt="" />

          Your browser does not support the video tag.
        </video>
        {
          videoDblClick && <div className="like_icon_big"></div>
        }
      </div>
    )
  }

  export default VideoBox