import React, {useEffect, useState} from "react"
import Loading from "../../Loading/Loading";
import { Link } from "react-router-dom";
import { UserService } from "../../../services/UserService";


let UserList = () =>{

    let[query, setQuery] = useState({
        text: ""
    })

    let[state, setState] = useState({
        loading: false,
        users: [],
        filteredUsers: [],
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
                users: response.data,
                filteredUsers: response.data
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

    ///Delete contact

    let clickDelete = async (userId) =>{
        try{
            let response = await UserService.deleteUser(userId);
            if(response){
                setState({...state,loading: true});
            let response = await UserService.getAllUsers();
            setState({
                ...state,
                loading: false,
                users: response.data,
                filteredUsers: response.data
            });
            }
        }
        catch(error){
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            });
        }
    };

     ///Search users

     let searchUsers = (event) =>{
        setQuery({...query, text : event.target.value});
        let theUsers = state.users.filter(user =>{
            return user.name.toLowerCase().includes(event.target.value.toLowerCase())
        });

        setState({
            ...state,
            filteredUsers: theUsers
        });

    };
    
    
    let {loading, users, filteredUsers, errorMessage} = state;

   

    
    return(
        <React.Fragment>
            <section>
                <div className= "row mx-5">
                    <div className="col-md-6">
                        <form className="formulario "> 
                            <div className= "mb-2 ">
                                <input
                                    name="text"
                                    value={query.text}
                                    onChange={searchUsers}
                                    type="text" className="form-control" placeholder="Filter names"/>
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
                            filteredUsers.length > 0 &&
                            filteredUsers.map(user=>{
                                return(
                                    <div className="col-md-3 my-2 alig-items-center d-flex" key={user.id}>
                                        <div className="card color-card-2">
                                            <div className="card-body color-card">
                                                <div className="row align-items-center d-flex justify-content-center">
                                                    <img src= {user.img} alt="" className="user-img"/>
                                                </div>
                                                <div className="justify-content-center align-items-center">
                                                    <ul className="list-grup">
                                                        <li className="info">
                                                        <span className="fw-bold">{user.name}</span>
                                                        </li>
                                                        <li className="info">
                                                            Email: <span className="fw-bold">{user.email}</span>
                                                        </li>
                                                        <li className="info">
                                                            Username: <span className="fw-bold">{user.username}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Link to={`/users/edit/${user.id}`} className="btn btn-primary mx-1">
                                        <i className="fa fa-pen"/>
                                        </Link>
                                        <button className="btn btn-danger mx-1" onClick={()=> clickDelete(user.id)}>
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