import PostsList from './PostsList'
import { UserContext } from '../App'
import { useEffect } from 'react';

const Main = ({ isLoggedIn, user, likes, setLikes, posts }) => {
    useEffect(() => {
        if (!isLoggedIn)
            window.location.href = window.location.origin + "/login"
    }, []);
    return (
        <>
            {
                isLoggedIn && <div className="container">
                    <div className="app">
                        <div className="app__header">
                            <div className="app__headerWrapper">
                                <p>Welcome {user}!</p>
                                <img
                                    src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                                    alt="Instagram original logo"
                                />
                                <button className="text__button">Logout</button>
                                <div className="app__headerButtons">
                                    <button className="primary__button">Log in</button>
                                    <button className="text__button">Sign up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main'>
                        <UserContext.Provider value={user}>
                            <PostsList likes={likes} setLikes={setLikes} posts={posts} />
                        </UserContext.Provider>
                    </div>
                </div>
            }
        </>
    )
}

export default Main   