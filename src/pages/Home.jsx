import React, { useRef ,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

const Home = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener('scroll',() => {
        if(window.scrollY >= 50){
            navRef.current.classList.add('header-set')
        }
        else{
            navRef.current.classList.remove('header-set')
        }
    })
  },[])
  return (
    <>
      <header ref={navRef}>
        <Navbar/>   
      </header>   
      <div className="banner">
        <Banner/>
      </div>
      <div className="content">
        <div className="movies-cards">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-12">
                  <Cards/>
                </div>
                <div className="col-12 col-md-12 col-lg-12">
                  <Cards title={"Sadece Netflix'te"} category={"top_rated"}/>
                </div>
                <div className="col-12 col-md-12 col-lg-12">
                  <Cards title={"Sizin için seçtiklerimiz"} category={"upcoming"}/>
                </div>
              </div>
        </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </>
  )
}

export default Home
