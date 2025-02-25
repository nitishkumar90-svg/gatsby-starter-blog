import { Link } from "gatsby"
import * as React from "react"
import './header.css'
import Background from '../../images/blog-bg.jpg';
import arrowDown from '../../images/arrow-down.svg'

const Header = ({ isRoot }) => {
    let bgStyle = {
        height: '100vh',
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)) , url(${Background}) center center`,

        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        position: 'relative',
        justifyContent: 'center',
        textAlign: 'center'
    }
    return (
        <div style={bgStyle} className="header-main">
            <div className="container">
                <div className="grid grid-cols-2">
                    <div className="logo text-left">
                        <a href="/"><h1>Nitish Kumar</h1></a>
                    </div>
                    <div className="nav-bar">
                        <nav>
                            <ul className="flex flex-right flex-gap-2">
                                <li className={isRoot ? `active` : `normal-tag`}><Link to="/">Home</Link></li>
                                <li className={!isRoot ? `active` : `normal-tag`}><Link to="/about">About</Link></li>                            </ul>
                        </nav>
                    </div>
                </div>
                <h2 className="title-text">{isRoot ? `Scroll for blogs` : `Scroll for About Me`}</h2>
                <a href="javascript:void(0)" className="arrow-down bounce"><img width="50" src={arrowDown} /></a>
            </div>
        </div>
    )

}


export default Header