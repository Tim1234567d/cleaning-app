import React, { useState } from "react";
// import "./Example.css"
import classes from "./a.module.css"

const Example = () => {

    const[click, setClick] = useState(false)

    const toggle = () => {
        setClick(!click)
    }
    return(

        <div>
            <h1 className={click ? classes.changeStyle : ""}>Hello word</h1>
            <button  onClick={toggle}>Click me!!!</button>
        </div>
    )
}

export default Example;