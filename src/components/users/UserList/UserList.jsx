import React, {useEffect, useState} from "react"
import Loading from "../../Loading/Loading";
import { Link } from "react-router-dom";
import { UserService } from "../../../services/UserService";

let UserList = () =>{

    let[state, setState] = useState({
        loading: false,
        users: [],
        errorMessage: ""
    });
    
    useEffect(() =>{
        async function handleResp(){
        try{
            setState({...state,loading: true});
            let response = await UserService.getAllUsers();
            setState({
                ...state,
                loading: false,
                users: response.data
            });
        }
        catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            });
        }}
        handleResp();
    }, []);

    let {loading, users, errorMessage} = state;
    return(
        <React.Fragment>
            <section>
                <div className= "row">
                    <div className="col-md-6">
                        <form className="formulario"> 
                            <div className= "mb-2">
                                <input type="text" className="form-control" placeholder="Filter names" />
                                <Link to={"/users/add"} className="btn btn-warning mt-3"><i className="fa fa-plus"/>New User</Link> 
                            </div>
                        </form>
                    </div>
                </div>
            </section>
                {
                    loading ? <Loading/> : <React.Fragment>
                        <section className="users-list">
                <div className="container">
                    <div className="row">
                        {
                            users.length > 0 &&
                                users.map(user=>{
                                return(
                                    <div className="row mx-3 my-2" key={user.id}>
                                        <div className="card">
                                            <div className="card-body color-card">
                                                <div className="row align-items-center d-flex justify-content-center">
                                                    <img src= {user.img} alt="" className="user-img"/>
                                                </div>
                                                <div className="justify-content-center align-items-center">
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
                                                    </ul>
                                                </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Link to={`/users/view/${user.id}`} className="btn btn-warning mx-1">
                                        <i className="fa fa-eye"/>
                                        </Link>
                                        <Link to={`/users/edit/:userId`} className="btn btn-primary mx-1">
                                        <i className="fa fa-pen"/>
                                        </Link>
                                        <button className="btn btn-danger mx-1">
                                        <i className="fa fa-trash"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </section>
                    </React.Fragment>
                        
                }
            
        </React.Fragment>
    )
    
}
    



export default UserList;