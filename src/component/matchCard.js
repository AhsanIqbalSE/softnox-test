import React, { useEffect, useState } from 'react'
import api from '../api';
import VideoModal from './videoModal';

import thumbnail from '../assets/images/thumbnail.jpg'

export const MatchCard = ({data,ind,totalMatches}) => {

        const [matchInfo,setMatchInfo] = useState({});
        const [isOpen, setOpen] = useState(false);

        function handleChange() {
          setOpen(!isOpen);
        }
      
        const getMatcheInfo = async() => {
            try {
                const data1 = await api.getMatchInfo(data?.id);
                console.log("data1");
                console.log(data1);
                if(data1?.status == "success") {
                    setMatchInfo(data1.data)
                }else{
                    setMatchInfo({})
                    // setMatchList([])
                }
            } catch (error) {
                console.log(error);
                alert("Error in data fetch")
            }
        }
        
        useEffect(() => {
            if(data?.id) {
                getMatcheInfo()
            }
    
        }, [data?.id])

        console.log(ind);
        

  return (
    <div className="matchCard" key={ind}>
                    <div className="r1">
                        <div>
                            {data?.matchType} {totalMatches - ind} of {totalMatches}
                        </div>
                        <div className='date'>{data?.date}</div>
                    </div>
                    {data?.teamInfo && data?.teamInfo.map((val,key)=>(
                    <div className="scoreR">
                        <div className="team">
                            <div className="ico"><img src={val.img} alt="" /></div>
                            <div className="name">{val.name}</div>
                        </div>
                        {matchInfo?.score ? 
                        <div className="score">{matchInfo?.score[key]?.r || 0}/{matchInfo?.score[key]?.o || 0} ({matchInfo?.score[key]?.w || 0})</div>
                        :
                        <div className="score">0/0 (0)</div>
                        }
                    </div>
                    ))}
                
                    <div className="statusR">
                        <div className="status">{data?.status}</div>
                        <div className="thumbNail" onClick={()=> handleChange()}>
                            <img src={thumbnail} alt="" />
                            <div className='play'>
                                <i className="fa-solid fa-play"></i>
                            </div>
                        </div>
                        <VideoModal isOpen={isOpen} close={handleChange} />
                    </div>
                </div>
  )
}
