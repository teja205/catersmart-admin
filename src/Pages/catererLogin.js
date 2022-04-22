import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../api/components/Authprovider";
import { useHistory } from 'react-router-dom';
import { assetsImages } from '../Constant/images';

// import axios from '../api/axios';
const LOGIN_URL = '/superadmin_login';

const AdminLogin = () => {
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
            history.push("/caterer")
        }
    },[])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

      console.warn(email,password);
      let item = {email,password};
      let result = await fetch("https://stg-backend.catersmart.in/api/caterer_login" , {
          method : 'POST',
          headers: {
              "Content-Type":"application/json",
              "Accept": "application/json"
          },
          body : JSON.stringify(item)
      });
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result))
      history.push("/caterer")
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

                <section className='row justify-content-center align-items-center'>
                    <div className='col-6'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div
                         className="loginlogo"
                    >
                        <img
                            src={assetsImages.loginLogo}
                            alt="Catersmart Logo"
                            /> 
                    </div>
                 
                    {/* <h1>Sign In</h1> */}
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
                    </div>
                
               
                </section>
            )}
        </div>
    )
}

export default AdminLogin
