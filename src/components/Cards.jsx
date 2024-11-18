import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';



const Cards = ({title,category}) => {
  const[apiData,setApiData]=useState([])

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`);
        setApiData(response.data.results)  
      }  catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[])
  console.log(apiData)
  return (
    <>
    <div className='card-container'>
        <h3 className='mb-5'>{title?title:"Amerikan Dizileri"}</h3>
        <div className="card-list">
          <Swiper
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Pagination]}
            loop={true}
            slidesPerGroup={6}
            breakpoints={{
              0:{
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
          >
            {apiData.map((item,id) => {
                return <SwiperSlide key={id}>
                    <div className="card">
                      <img src={`https://image.tmdb.org/t/p/w500` + item.backdrop_path} alt="" />
                    </div>
                </SwiperSlide>
              })}
          </Swiper>
        </div>
    </div>
    </>
  )
}

export default Cards
