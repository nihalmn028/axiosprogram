
import axios from 'axios';
import React, { useState } from 'react';
// const baseURL = "https://jsonplaceholder.typicode.com/posts"
const client=axios.create({
  baseURL:"https://jsonplaceholder.typicode.com/posts"
});
export default function App() {
  const [post, setPost] = useState("");

  function getPost() {
    // axios.get(`${baseURL}/1`).then((response) => {
      // axios.get(`${baseURL}/1`).then((response) => {
        client.get("/1").then(function(response){

      setPost(response.data)


    });
  }
  // function createPost(){
  //   axios.post(
  //     baseURL,{
  //       title:"hello world",
  //       body:"this is a new post"
  //     })
  //   .then((response)=>{
  //   setPost(response.data)
  // })
  // }
  // function updatePost(){
  //   axios.put(`${baseURL}/1`,{
    
  //       title:"hello worlddd",
  //       body:"this is a new posttt"
  //   })
  //   .then((response)=>{
  //   setPost(response.data)
  // })
  // }
  // function deletePost(){
  //   axios.delete(`${baseURL}/1`).then((response) => {
  //     setPost(response.data)


  //   });
  // }
  return (
    <div>
      <li>
        <button onClick={getPost}>View post</button>
      </li>
      {/* <li>
        <button onClick={createPost}>create post</button>
      </li>
      <li>
        <button onClick={updatePost}>update post</button>
      </li>
      <li>
        <button onClick={deletePost}>delete post</button>
      </li> */}
      <h1>{post.title ?post.title: "no post"}</h1>
      <p>{post?.body ?post.body: "no body"}</p>
    </div>
  );
}

