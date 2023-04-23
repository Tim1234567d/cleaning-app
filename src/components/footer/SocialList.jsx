import React from "react";
import SocialItem from "./SocialItem";
import classes from "./Footer.module.css"

const SocialList = ({social}) => {
    return(
        <ul className={classes.list_icons}>
            {
                social.map((social) => 
                <SocialItem social={social} />
                )
            }

        </ul>
    )
}

export default SocialList;