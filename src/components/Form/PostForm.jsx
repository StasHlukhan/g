import React, {useRef, useState} from "react";
import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";
function PostForm({create}) {


    const [post, setPost] = useState({title:'',body:''})


const addNewPost = (e) =>{
    e.preventDefault()
  const newPost={
    ...post,id: Date.now()
  }
  create(newPost)
   setPost({title:'',body:''})
  }
  return (
    <div>
        <form  action="">
        
        <MyInput
         value={post.title} 
         type="text"  
         placeholder="Post Name"
         onChange={e => setPost({...post,title:e.target.value})}
         />
        <MyInput 
          onChange={e => setPost({...post,body:e.target.value})}
          value={post.body} 
          type="text" 
          placeholder="Decription"
         />
        <MyButton  onClick={addNewPost} > Create Post</MyButton>
      </form>
    </div>
  )
}

export default PostForm