import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../api/components/Authprovider";
import { useHistory } from 'react-router-dom';

import axios from '../api/axios';
const LOGIN_URL = '/superadmin_login';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const history = useHistory();

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() =>{
        if(localStorage.getItem('user-info')){
            history.push("/login")
        }
    },[])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

      console.warn(email,password);
      let item = {email,password};
      let result = await fetch("https://stg-backend.catersmart.in/api/superadmin_login" , {
          method : 'POST',
          headers: {
              "Content-Type":"application/json",
              "Accept": "application/json"
          },
          body : JSON.stringify(item)
      });
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result))
      history.push("/login")
    }

    return (
        <div className='login'>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (

                <section >
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button>Sign In</button>
                    </form>
               
                </section>
            )}
        </div>
    )
}

export default Login
