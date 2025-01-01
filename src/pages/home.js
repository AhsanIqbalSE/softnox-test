import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import api from '../api'
import { useEffect } from 'react'
import { MatchCard } from '../component/matchCard'
import { Loader } from '../component/loader'

export const Home = () => {
    const [matchList,setMatchList] = useState([]);
    const [menu,setMenu] = useState('matches');
    const [loader,setLoader] = useState(false);

    const getMatches = async() => {
        try {
            setLoader(true)
            const data = await api.getAllSeries();
            
            if(data?.status == "success") {
                // get matchlist from specific series info
                const dataInfo = await api.getSeriesInfo(data.data[0]?.id);
                // console.log(dataInfo);

                if(dataInfo?.status == "success") {
                    setMatchList(dataInfo?.data?.matchList || [])
                }else{
                    alert("Error in fetching data")
                }
                setLoader(false)
            }else{
                setLoader(false)
                alert("Error in fetching data")
            }
        } catch (error) {
            setLoader(false)
            console.log(error);
            alert("Error in data fetch")
        }
    }
    
    useEffect(() => {
        getMatches()

    }, [])
    

  return (
    <div className='homePage'>
        <div className="headM">
                <div className="r1">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="heading">Men's T20 World Cup</div>
                </div>
                <div className="navRow">
                    <div onClick={()=>setMenu('matches')} className={menu == 'matches'?"navItem active":"navItem"} >Matches</div>
                    <div onClick={()=>setMenu('news')} className={menu == 'news'?"navItem active":"navItem"} >News</div>
                    <div onClick={()=>setMenu('standing')} className={menu == 'standing'?"navItem active":"navItem"} >Standing</div>
                    <div onClick={()=>setMenu('stats')} className={menu == 'stats'?"navItem active":"navItem"} >Stats</div>
                </div>
        </div>
        <div className="matchCardMain">
            {menu == 'matches' &&
            <>
                {matchList.map((val,key)=>(
                    <>
                        <MatchCard data={val} ind={key} totalMatches={matchList.length} />
                    </>
                ))}
            </>
            }
            {menu == 'news' && <h1 className='p-3'>NEWS</h1>}
            {menu == 'standing' && <h1 className='p-3'>STANDING</h1>}
            {menu == 'stats' && <h1 className='p-3'>STATS</h1>}
        </div>
        {loader && <Loader />}
    </div>
  )
}
