import React from "react";
import SocialItem from "./SocialItem";

const SocialList = ({social}) => {
    return(
        <ul className="list-icons">
            {
                social.map((social) => 
                <SocialItem social={social} />
                )
            }

        </ul>
    )
}

export default SocialList;