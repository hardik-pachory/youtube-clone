import React from 'react'

const SideNav = () => {
  return (
    <div className="sideNav">
      <span className='mt-1 pt-2' style={{marginLeft:"15%"}}>
        <i class="fa-solid fa-fire"></i> 
        <span>&nbsp;&nbsp;Trending</span>
      </span>
      <hr/>
      <span className='mt-1 pt-2' style={{marginLeft:"15%"}}>
        <i class="fa-solid fa-compass"></i>
        <span>&nbsp;&nbsp;Explore</span>
      </span>
      <hr/>
      <span className='mt-1 pt-2' style={{marginLeft:"15%"}}>
        <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
        <span>&nbsp;&nbsp;Shorts</span>
      </span>
      <hr/>
      <span className='mt-1 pt-2' style={{marginLeft:"15%"}}>
        <i class="fa-solid fa-bookmark"></i>
        <span>&nbsp;&nbsp;Saved Videos</span>
      </span>
      <hr />
      <span className='mt-1 pt-2' style={{marginLeft:"15%"}}>
        <i class="fa-solid fa-heart-circle-check"></i>
        <span>&nbsp;&nbsp;Subscriptions</span>
      </span>
      <hr />
      <span className='mt-1 pt-2' style={{marginLeft:"15%"}}>
        <i class="fa-solid fa-video"></i>
        <span>&nbsp;&nbsp;Your Videos</span>
      </span>
      <hr />
      <span className='mt-1 pt-2' style={{marginLeft:"15%"}}>
        <i class="fa-solid fa-clock"></i>
        <span>&nbsp;&nbsp;Watch Later</span>
      </span>
      <hr />
      
    </div>
  )
}

export default SideNav