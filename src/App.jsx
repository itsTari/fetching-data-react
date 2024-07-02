import { useState, useEffect } from "react"

function App() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await res.json()
      setPosts(data)
      // console.log(data)
    }
    fetchData()
  },[])

  return (
    <>
      <ul>
        {posts.map((post)=> <li key={post.id}>{post.title}</li>
        
        )}  
        </ul>

    </>
  )
}

export default App
