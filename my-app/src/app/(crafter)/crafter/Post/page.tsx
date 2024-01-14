import React, { useEffect, useState } from 'react'
import page from '../page'
import axios from 'axios'

const post = () => {
  <div>
      <h1 className="text-center">Post</h1>
  </div>
}

useEffect(() => {
  async function fetchProfile() {
    const response = await axios.get(`/api/crafter/post?id=${userId}`)
    
  }
  if(userId){
    fetchProfile();
  } 
}, []);

export default post