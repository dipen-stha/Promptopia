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