'use client';

import { useState, useEffect } from 'react';

import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return(
    <div className='m-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const response = await fetch('/api/prompt');
    const data = await response.json()
    setPosts(data);
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  const searchFilter = (posts) => {
    return posts.filter((post) => {
      return (post.prompt.toLowerCase().includes(searchText) ||
              post.tag.toLowerCase().includes(searchText) ||
              post.creator.username.toLowerCase().includes(searchText))
    }
  )
  }

  const filteredPosts = searchFilter(posts)

  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleClick = (tag) => {
    setSearchText(tag);
  }

  return (
    <section className='feed'>
      <form action="" className="relative w-full flex-center">
        <input
        type='text'
        placeholder='Search for a tag or a username'
        value={searchText}
        onChange={handleSearchChange}
        required
        className='search_input peer'
        />
      </form>
      <PromptCardList
      data={filteredPosts}
      handleTagClick={handleClick}
      />
    </section>
  )
}

export default Feed