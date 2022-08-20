import {useState} from "react"
const ImageBox = ({link, setLiked, liked, likes, setLikes }) => {
  const [imageDblClick, setImageDblClick] = useState(false)
  const likeHandle = (setLiked, liked,likes, setLikes) => {
    setImageDblClick(true)
    setTimeout( () => {
      setImageDblClick(false)
    },500)
    setLikes(!liked ? likes + 1 : likes - 1)
    setLiked(!liked)
  }
  return (
    <div style={{position:'relative'}}>
      <img onDoubleClick={() => likeHandle(setLiked, liked, likes, setLikes)} className="box" src={link} alt="" />
      {
        imageDblClick && <div className="like_icon_big"></div>
      }
    </div>
  )
}

export default ImageBox