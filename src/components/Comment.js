const comment = ({ id, comments_count, image, showComments, setShowComments }) => {
  const commentHandle = (showComments, comments_count, setShowComments) => {
    setShowComments(!showComments)
  }
  

  return (
    <>
      <span>{comments_count}</span>
      <img onClick={() => commentHandle(showComments, comments_count, setShowComments)} className="comment_icon" src={image} alt="" />
    </>
  )
}

export default comment