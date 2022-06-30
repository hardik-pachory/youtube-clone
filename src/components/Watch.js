import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Comments from './Comments';
const Watch = () => {
  const key = process.env.REACT_APP_YT_API_KEY
  const { id } = useParams();
  

  // const [vdata, setVdata] = useState([]);
  
  const location = useLocation();
  const videoData = location.state;
  // console.log("Video DATA STATE",videoData);
  //   // const { title, }
  //   useEffect(() => {
  //       axios.get(url).then(res => {
  //           setVdata(res.data.items[0])
  //           // console.log(res);
  //           // console.log(vdata.statistics)
  //           // console.log(vdata.snippet)
  //       }).catch(err => {
  //           console.error(err);
  //       })
  //   }, [])
  
  // 
    
    const { viewCount, likeCount, commentCount } = videoData?.statistics
    const {title, description, publishedAt, channelTitle} = videoData?.snippet
    
  return (
      <div className='player-container' style={{marginLeft:'15%' }}>
          <div className="player">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                  allowFullScreen
                  title={title}
                width="100%"
                height="100%">
                  
            </iframe>
          </div>
          <div className="details">
              <h3>{title}</h3>
              <hr />
              <p className='text-right'>{publishedAt} | {viewCount} Views | {likeCount} Likes</p>
              <hr />
              <h4>Channel: {channelTitle}</h4>
              <hr/>
              <p>{description}</p>
              <hr />
              <h4>{commentCount} Comments: </h4>
      </div>
      <Comments id={id} />
    </div>
  )
}

export default Watch