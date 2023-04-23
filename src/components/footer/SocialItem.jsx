import React from "react";

const SocialItem = ({social}) => {
    return (
    
            <li>
            <a href="https://api.whatsapp.com/send?phone=+996709919582">
                <img  src={social.img} alt="whatsapp"/> 
            </a>
          </li>
        
    )
}

export default SocialItem;