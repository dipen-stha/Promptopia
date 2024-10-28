"use client"

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
    const [posts, setPosts] = useState([]);
    const searchParams = useSearchParams();
    const userName = searchParams.get('username')
    const router = useRouter();
    console.log(params);

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${params?.id}/posts`);
          const data = await response.json()
          setPosts(data);
        }
    
        if (params?.id) fetchPosts();
      }, []);
    const handleEdit = (post) => {
      router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post) =>{
      const hasConfirmed = confirm("Are you sure you want to delete this prompt?");

      if(hasConfirmed){
        try {
          await fetch(`/api/prompt/${post._id.toString()}`, {
            method: 'DELETE'
          });

          const filteredPosts = posts.filter((p) => p._id !== post._id)

          setPosts(filteredPosts);
        } catch (error) {
          console.log(error);
        }
      }

    }
  return (
    <Profile
    name={userName}
    desc={`Welcome to the personalized page of ${userName}`}
    data={posts}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    />
  )
}

export default UserProfile