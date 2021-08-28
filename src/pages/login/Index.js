import { useState } from "react"
import { useNavigate } from "react-router";
import { useCookies } from 'react-cookie'

import api from '../../util/api'

export default function Login() {

    const [cookie, setCookie] = useCookies(['name']);

    let navigate = useNavigate();
    const [formInput, setFormInput] = useState({email: '', password: ''})

    const updateFormInput = (e) => {
        e.persist();
        setFormInput(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        api().get('/sanctum/csrf-cookie')
        .then(response => {
            api().post('api/login', formInput)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    setCookie('token', response.data, {maxAge: 86400, sameSite: 'lax'})
                    navigate('/dashboard', {cookie})
                }
            })
            .catch(error => {
                console.log(error);
            })
        });
       
    }

    return (
        <>
            <div className="bg-primary-light h-screen min-w-full flex items-center justify-center">
                <div className="md:w-96 bg-light m-auto p-4 h-auto rounded">
                    <form>
                        <h1 className="text-center font-semibold text-2xl"><span className="text-secondary-dark">Dev</span>Store!</h1>
                        <div className="mt-2">
                            <label className="text-primary-dark font-semibold text-sm">Email</label>
                            <input type="text" name="email" onChange={updateFormInput} className="form-input mt-2 w-full px-4 py-3 rounded focus:ring-primary-dark border-primary-dark" />
                        </div>
                        <div className="mt-2">
                            <label className="text-primary-dark font-semibold text-sm">Password</label>
                            <input type="password" name="password" onChange={updateFormInput} password="password" className="form-input mt-2 w-full px-4 py-3 rounded focus:ring-primary-dark border-primary-dark" />
                        </div>
                        <div className="mt-2 text-right">
                            <button type="submit" onClick={handleSubmit} className="bg-primary text-light px-4 py-2 rounded hover:bg-primary-800 transition duration-100 ease-out text-sm">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </> 
    )
}