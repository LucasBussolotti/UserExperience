import React,{useEffect, useState} from "react"
import { Link, useParams } from "react-router-dom";
import { UserService } from "../../../services/UserService";
import Loading from "../../Loading/Loading";
 
let ViewUser = () =>{

    let {userId} = useParams();

    let [state,setState] = useState({
        loading: false,
        user : {},
        errorMessage: ""
    });

    useEffect(() =>{
        async function handleResp(){
        try{
            setState({...state, loading: true});
            let response = await UserService.getUser(userId);
            setState({
                ...state,
                loading:false,
                user: response.data
            });
            }
        catch (error) {
            setState({
                ...state,
                loading:false,
                errorMessage: error.message
            });
        }}
        handleResp();
    }, [userId]);

    let {loading, user,} = state;
    return(
        <React.Fragment>
            <h2>{userId}</h2>
            <section className="view-user-intro p-3 fw-bold">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning">View User</p>
                        </div>
                    </div>
                </div>
            </section>

            {
                loading ? <Loading/> : 
                    <React.Fragment>
                        {
                            Object.keys(user).lenght > 0 &&
                            <section className="view-user mt-3">
                            <div className="containter">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <img src={user.img} className="user-img"/>
                                    </div>
                                    <div className="col-md-8">
                                    <ul className="list-grup">
                                        <li className="list-group-item list-group-item-action">
                                        <span className="fw-bold">{user.name}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Email: <span className="fw-bold">{user.email}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Username: <span className="fw-bold">{user.username}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Password: <span className="fw-bold">{user.password}</span>
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
                        }
                    </React.Fragment>
            }
            
        </React.Fragment>
    )
    
};


export default ViewUser;