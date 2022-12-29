import React, {useState,useEffect} from "react"
import { Link, useNavigate } from "react-router-dom";
import { UserService } from "../../../services/UserService";


let AddUser = () =>{
    
        let navigate = useNavigate();

        let[state, setState] = useState({
            loading: false,
            user: {
                name: "",
                username: "",
                img: "",
                email: "",
                password: ""
            },
            errorMessage: ""
        });

        let updateInput = (event) => {
            setState({
                ...state,
                user: {
                    ...state.user,
                    [event.target.name] : event.target.value
                }
            });
        };

        let submitForm = async (event) =>{
            event.preventDefault();
            try{
                let response = await UserService.createUser(state.user);
                if(response){
                    navigate("/users/list", { replace: true });
                }
            }
            catch (error) {
                setState({...state, errorMessage: error.errorMessage});
                navigate("/users/add", { replace: false });
            }
        };
    
    
    let {loading, user, errorMessage} = state;
    return(
        
        <React.Fragment>
            <section className="add-user p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-black fw-bold">Add User</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit ={submitForm}>
                                <div className="mb-2">
                                    <input
                                        required= {true} 
                                        name= "name"
                                        value={user.name}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                        required= {true} 
                                        name= "username"
                                        value={user.username}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Username"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                        required= {true} 
                                        name= "img"
                                        value={user.img}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Url img"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                        required= {true} 
                                        name= "email"
                                        value={user.email}
                                        onChange={updateInput}
                                        type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="mb-2">
                                    <input 
                                        required= {true} 
                                        name= "password"
                                        value={user.password}
                                        onChange={updateInput}
                                        type="text,number" className="form-control" placeholder="Password"/>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-success" value="Save"/>
                                    <Link to={"/users/list"} className="btn btn-dark mx-2">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment>
    )
    

    
}


export default AddUser;