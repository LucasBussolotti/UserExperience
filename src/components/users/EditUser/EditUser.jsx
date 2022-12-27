import React from "react"
import { Link } from "react-router-dom";

let EditUser = () =>{
    return(
        <React.Fragment>
            <section className="add-user p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary fw-bold">Edit User</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Username"/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Url img"/>
                                </div>
                                <div className="mb-2">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="mb-2">
                                    <input type="text,number" className="form-control" placeholder="Password"/>
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-primary" value="Update"/>
                                    <Link to={"/users/list"} className="btn btn-dark mx-2">Cancel</Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src="https://png.pngitem.com/pimgs/s/130-1300253_female-user-icon-png-download-user-image-color.png" className="user-img"/>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment>
    )
    

    
}


export default EditUser;