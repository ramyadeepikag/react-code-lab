import React from 'react'
import Friends from './components/Friends'
import AnilFriends from './data/AnilFriends.json'
import RamyaFriends from './data/RamyaFriends.json'
import './App.css'
export default function App(){
  return (
    <div
    className="page-container"
  >
      <Friends AnilFriends={AnilFriends}/>
      <Friends RamyaFriends={RamyaFriends}/>
    

    </div>
  )
}