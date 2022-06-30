import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Query from './Query';

const SearchResult = () => {

const location = useLocation();
    const keyword = location.state;
    const key = "AIzaSyCCxklQZFwjHW__l646hMdulU3Hp5e7AEs"
    const url= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${key}`




    const [result, setResult] = useState();
    useEffect(() => {
        axios.get(url).then((res) => {
            console.log(res.data.items.id);
            setResult(res.data.items)
        }).catch((err) => {
            console.error(err);
        })     
     }, [])

    
    

  return (
      <div className='player-container' style={{ marginLeft: '18%' }}>
          {result?(result.map((video) => (
            <div class="searchvideo" key={video.id}>
                  <Query videoDetail={video} />
            </div>
        ))
        ) : (
            <h5>Videos Loading...</h5>
        )
        }
          
      </div>
  )
}

export default SearchResult