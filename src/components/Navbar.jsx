import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faBell,faPen, faUser, faQuestionCircle, faFaceSmile } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    return (
        <div className='navbar'>
            <div className="container">
                <div className="row w-100">
                    <div className=" col-8 col-lg-6">
                        <div className="navbar-wrapper">
                            <a className='navbar-brand' href="http://">
                                <img src="/images/logo.png" alt="" />
                            </a>
                            <div className="navbar-collapse">
                                <ul className='navbar-nav'>
                                    <li className='navbar-item'>
                                        <a href="http://">Anasayfa</a>
                                    </li>
                                    <li className='navbar-item'>
                                        <a href="http://">Diziler</a>
                                    </li>
                                    <li className='navbar-item'>
                                        <a href="http://">Filmler</a>
                                    </li>
                                    <li className='navbar-item'>
                                        <a href="http://">Yeni ve Popüler</a>
                                    </li>
                                    <li className='navbar-item'>
                                        <a href="http://">Listem</a>
                                    </li>
                                    <li className='navbar-item'>
                                        <a href="http://">Dillere Göre Göz At</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-lg-6">
                        <div className="navbar-wrapper">
                            <div className="navbar-collapse">
                                <ul className='navbar-nav navbar-right'>
                                    <li>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faBell} />
                                    </li>
                                    <li>
                                        <div className="dropdown">
                                            <button className='btn btn-secondary dropdown-toggle' type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="/images/header-profile.png" alt="" />
                                            </button>
                                            <ul className='dropdown-menu'  aria-labelledby="dropdownMenuButton1">
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <img src="/images/header-profile.png" alt="" />
                                                        <span>Çağla</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <img src="/images/header-profile.png" alt="" />
                                                        <span>Çocuk</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <FontAwesomeIcon icon={faPen} />
                                                        <span>Profil yönetimi</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <FontAwesomeIcon icon={faFaceSmile}/>
                                                        <span>Profili aktar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <FontAwesomeIcon icon={faUser}/>
                                                        <span>Hesap</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <FontAwesomeIcon icon={faQuestionCircle}/>
                                                        <span>Yardım Merkezi</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <span>Netflix oturumunu kapat</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar
