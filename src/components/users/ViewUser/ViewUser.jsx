import React,{useEffect, useState} from "react"
import { Link, useParams } from "react-router-dom";
import { UserService } from "../../../services/UserService";
 
let ViewUser = () =>{

    let {userId} = useParams();

    let [state,setState] = useState({
        loading: false,
        contacto : {},
        errorMessage: ""
    });

    useEffect(() =>{
        async function handleResp(){
        try{
            
            let response = await UserService.getUser(userId);
            console.log(response.data);
            }
        catch (error) {
            
        }
        handleResp();
    }}, [userId]);

    return(
        <React.Fragment>
            <section className="view-user-intro p-3 fw-bold">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning">View User</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="view-user mt-3">
                <div className="containter">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src="https://png.pngitem.com/pimgs/s/130-1300253_female-user-icon-png-download-user-image-color.png" className="user-img"/>
                        </div>
                        <div className="col-md-8">
                        <ul className="list-grup">
                            <li className="list-group-item list-group-item-action">
                                Lucas
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Email: <span className="fw-bold">lucas@example.com</span>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Username: <span className="fw-bold">lucas</span>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Password: <span className="fw-bold">nada</span>
                            </li>
                            
                        </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={"/users/list"} className="btn btn-warning">Back</Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
    
};


export default ViewUser;