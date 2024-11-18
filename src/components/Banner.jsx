import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
const Banner = () => {
    const[singleData,setSingleData]=useState([])

    useEffect(()=>{
        const fetchData = async () =>{
        try{
            const response = await axios.get(
            `https://api.themoviedb.org/3/movie/129?api_key=${import.meta.env.VITE_API_KEY}&language=en`);
            setSingleData(response.data)
        }  catch(err){
            console.log(err)
        }
        }
        fetchData()
    },[])
    console.log(singleData)
    return (
        <>
            <div className="img-wrapper">
                <img src={`https://image.tmdb.org/t/p/w500` + singleData.backdrop_path} alt="" />
            </div>
            <div className="banner-caption">
                <div className="caption-img-title">
                    <h2>{singleData.title}</h2>
                </div>
                <div className="caption-info">
                    <p className='mt-3'>{singleData.overview}.</p>
                </div>
                <div className="caption-buttons d-flex">
                    <button className='btn mr-4'>
                        <FontAwesomeIcon icon={faPlay}/>
                        Oynat
                    </button>
                    <a href="http://">
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        Daha fazla bilgi
                    </a>
                </div>
            </div>
        </>
    )
}

export default Banner
