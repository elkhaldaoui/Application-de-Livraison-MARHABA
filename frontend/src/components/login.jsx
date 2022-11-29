import Axios from "axios";
import {React, useState} from "react";
import toastr from 'toastr';
import 'toastr/build/toastr.css';

const baseUrl = 'http://localhost:5000/api/auth'

function Login(){
    const [ user, setUser ] = useState({})

    const onChange = (e) => {
        const valeur = e.target.value
        setUser({...user, [ e.target.name ]: valeur})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        Axios.post(`${baseUrl}/login`, user)
        .then(res => {
            toastr.warning(res.data, {positionClass: "toast-bottom-left"})
            if(res.data.username) alert(`Welcom ${res.data.username}`)
        })
        .catch(err => {
            console.log(err)
        })
    }


    return(
        <div className="row d-flex flex-column justiy-content-center align-items-center m-0 p-0" style={{ height: '100vh'}}>
            <form onSubmit={onSubmit} class="col-4 d-flex flex-column justify-content-center p-5 row g-3">
                <div>
                    <div className="fw-bold fs-2">LOGIN</div>
                </div>
                <div class="form-group">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" onChange={onChange} id="inputEmail4" />
                </div>
                <div class="form-group">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" onChange={onChange} id="inputPassword4" />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login