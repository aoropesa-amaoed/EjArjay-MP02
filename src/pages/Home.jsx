import { useState, useEffect, useRef } from 'react';
import SanityClient from '../hooks/client';
import { allPostsQuery } from '../hooks/queries';
import VideoCard from '../components/VideoCard';
import NoResults from '../components/NoResults'

function Home() {
    const [Posts, setPosts] = useState([])

    console.log(Posts)

    return (
      <div className='flex flex-col gap-10 videos h-full'>
        {/* {videos.length?
           videos.map((video) => ( */}
            <VideoCard/>
          {/* )) 
          : <NoResults text={`No Videos`} />} */}
      </div>
    );
}
export default Home
