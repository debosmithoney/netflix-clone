import React, { useEffect, useState } from 'react';
import './Nav.css'

function Nav() {
    const [show, handleShow]= useState();

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return() => {
            window.addEventListener("scroll");
        };
    },[]);
    return (
        <div className={`Nav ${show && "nav__black"}`}>
            <img className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png?w=100&h=100"
                alt="Netflix Logo" />
            <img className="nav__avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Netflix Logo" />
        </div>
    )
}

export default Nav;
