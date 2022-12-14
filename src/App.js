import React, {useState} from "react";
import { useMemo } from "react";
// import Counter from "./components/Counter/Counter";
import PostForm from "./components/Form/PostForm";
import MyModal from "./components/Modal/MyModal";
import PostFilter from "./components/Post/PostFilter";


import PostList from "./components/Post/PostList";
import MyButton from "./components/UI/Button/MyButton";


import './styles/App.css'


function App() {
  
  
const [posts,setPosts] = useState([
  {id:1,title:"JavaScript",body:"Description"},
  {id:2,title:"JavaScript 2",body:"Description"},
  {id:3,title:"JavaScript 3",body:"Description"}
])
 




const [filter,setFilter]= useState({sort:'',query:''})
const [ modal, setModal]=useState(false)


const sortedPosts = useMemo(()=>{
  console.log('Posts were sorted')
  if(filter.sort){
    return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
  }
  return posts;
},[filter.sort, posts])

const sortedAndSerachedPosts = useMemo(()=>{
  return sortedPosts.filter(post=> post.title.toLocaleLowerCase().includes(filter.query))
  

},[filter.query,sortedPosts])

const createPost = (newPost)=>{
 setPosts([...posts,newPost])
 setModal(false);
}


const removePost = (post)=>{
  setPosts(posts.filter(p=> p.id !== post.id))
}



  return (
    <div className="App">
      <MyButton style={{marginTop:'30'}} onClick={()=> setModal(true)}>Add a post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create = {createPost}/>
      </MyModal>
      
      <hr style={{margin:"15px 0"}}></hr>
      <PostFilter
      filter={filter}
      setFilter={setFilter}
      />

     
     <PostList remove={removePost} posts = {sortedAndSerachedPosts} title = 'Js posts'/>
      
     
    </div>
  );
}

export default App;
