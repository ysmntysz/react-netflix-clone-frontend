import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import footerData from "../data/footer"

const Footer = () => {
  return (
    <>
    <footer>
        <div className='container fw-container'>
            <div className="row">
                <div className="col-12">
                    <div className="social-icons">
                        <ul className='d-flex'>
                            <li>
                                <a href="http://" rel="nofollow" target="_blank">
                                <FontAwesomeIcon icon={faFacebook}/>
                                </a>
                            </li>
                            <li>
                                <a href="http://" rel="nofollow" target="_blank">
                                <FontAwesomeIcon icon={faInstagram}/>
                                </a>
                            </li>
                            <li>
                                <a href="http://" rel="nofollow" target="_blank">
                                <FontAwesomeIcon icon={faTwitter}/>
                                </a>
                            </li>
                            <li>
                                <a href="http://" rel="nofollow" target="_blank">
                                <FontAwesomeIcon icon={faYoutube}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <div className="row">
                            {
                                footerData.map((list,id) =>{
                                    return <>
                                        <div className="col-3" key={id}>
                                            <ul className='d-flex flex-column'>
                                                {list.items.map((sub) =>{
                                                    return<>
                                                        <li>
                                                            <a href="#" title={sub}>{sub}</a>
                                                        </li>
                                                    </>
                                                })}
                                            </ul>
                                        </div>                               
                                    </>
                                })                                   
                            }
                        </div>
                    </div>
                    <div className="footer-button">
                        <button>Hizmet kodu</button>
                    </div>
                    <div className="footer-copyright">
                        <span>© 1997-2024 Netflix, Inc.</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
