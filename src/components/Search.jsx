import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
          <input type="text" placeholder='find a user' />
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="userChatInfo">
          <span>John</span>
        </div>
      </div>
    </div>
  )
}

export default Search
