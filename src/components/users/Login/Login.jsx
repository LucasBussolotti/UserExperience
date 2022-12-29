import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


let LoginForm = () =>{

  let navigate = useNavigate();

  let [state, setState] = useState({
    user: {
      email: "",
      password: ""
    }
  })

  let {user} = state;

  let changeUserName = (event) =>{
    setState((state) => ({
      user:{
        ...state.user,
        email: event.target.value
      }
    })
    );
  };

  let changePassword = (event) =>{
    setState((state) => ({
      user:{
        ...state.user,
        password: event.target.value
      }
    })
    );
  };

  let submitLogin = (event) => {
      event.preventDefault();
      console.log(user);
      navigate("/users/list", { replace: true  })
  };
 
  return(
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-4 formulario">
            <div className="card">
              <div className="card-header bg-warning">
                <p className="h4">Log In</p>
              </div>
              <div className="card-body bg-light">
                <form onSubmit={submitLogin}>
                  <div className="mb-3">
                    <input 
                      value={user.email}
                      onChange={changeUserName}
                      required={true}
                      type="email" className='form-control' placeholder='Username'/>
                  </div>
                  <div className="mb-3">
                    <input 
                    vale={user.password}
                    onChange={changePassword}
                    required={true}
                    type="password" className='form-control' placeholder='Password'/>
                  </div>
                  <div className="mb-3">
                    <input type="submit" className='btn btn-warning btn-sm' value='Send'/>
                  </div>
                </form>
            </div>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default LoginForm;












