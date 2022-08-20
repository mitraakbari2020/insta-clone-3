import './App.css';
import { useState, createContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main"
import Login from "./components/Login"
const UserContext = createContext();
function App() {
  const [user, setUser] = useState("Mitra Akbari");

  const [posts, setPosts] = useState([
    {
      'id': 20,
      'media': 'https://assets.mixkit.co/videos/preview/mixkit-kitten-hiding-outside-26381-large.mp4',
      'type': 'video',
      'likes': 90,
      'comments_count': 2,
      'comments': [{
        'username': 'mikey',
        'comment': 'A good post'
      },
      {
        'username': 'jack',
        'comment': 'Adorable!'
      }]
    },
    {
      'id': 21,
      'media': 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
      'likes': 120,
      'type': 'image',
      'comments_count': 1,
      'comments': [{
        'username': 'ashley',
        'comment': 'A good cat'
      }]
    },
    {
      'id': 22,
      'media': 'https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg',
      'likes': 120,
      'type': 'image',
      'comments_count': 3,
      'comments': [{
        'username': 'ashley',
        'comment': 'i liked it'
      },
      {
        'username': 'emmy',
        'comment': 'goood post'
      },
      {
        'username': 'jhon',
        'comment': 'perfect'
      }
      ]
    }
  ])

        // 

  const [likes, setLikes] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main isLoggedIn={isLoggedIn} user={user} likes={likes} setLikes={setLikes} posts={posts} />} />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
      </Routes>

    </BrowserRouter>
  );
}

export {
  App,
  UserContext
};
