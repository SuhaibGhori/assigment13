import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Userdetails = () => {
  
const [userdet,setuserdet]=useState(null);
const {id}=useParams()
useEffect(()=>{
  usedeta()
},[id])
const usedeta = async () =>{
  await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((res)=>{
    setuserdet(res.data)
  })
}
console.log(userdet)


return (
  <div>
    {userdet ? (
      <div   style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px',textAlign:'center',marginTop:100 }} >
        <h1>{userdet.name}</h1>
        <h3>{userdet.username}</h3>
        <p>{userdet.email }</p>
        <h4>{userdet.phone}</h4>
        <p>{userdet.website}</p>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);

}

export default Userdetails