import React from 'react';

const Footer = () => {
    return(
        <div className="Foot">
            <div className="Name"><h1>Clone Developed by Debosmit Choudhury</h1></div>
                
            
            <div className="Date">
            <p >
                &copy;{new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()} All Rights Reserved || Terms of Privacy 
            </p>
        </div>
        
        
        </div>
        
    )
}

export default Footer;