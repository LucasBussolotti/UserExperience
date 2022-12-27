import React from "react";
import loadingImg from "../../assets/img/Loading.gif";

let Loading = () =>{
    return(
        <React.Fragment>
            <div>
                <img src={loadingImg} className="d-block m-auto" style={{width: "200px"}}/>
            </div>
        </React.Fragment>
    )
}

export default Loading;