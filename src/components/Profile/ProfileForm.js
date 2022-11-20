import { useContext, useRef } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const authCtx = useContext(AuthContext)
const passwordRef = useRef('')
const token = authCtx.token
const password = passwordRef.current.value

  const submitHandler=(e)=>{
e.preventDefault()
fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCvx6z96P8JnB_mk0ZYh5cQRSRtkgwnANc',{
  method:'POST',
  body:JSON.stringify({
    idToken:token,
    password:password,
    returnSecureToken:true
  }),
  headers:{
    'Content-Type':'application/json'
  }
})

  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
