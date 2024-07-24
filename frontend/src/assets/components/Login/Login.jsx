import styles from "./Login.module.css";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { Context } from "../Context/Context";
import axios from "axios";




const SignUpSignInForm = () => {
  const navigator = useNavigate();

  const loginwithgoogle = () => {
    window.open("http://localhost:4000/auth/google/callback", "_self");
  };

  

  const { userdata, setuserdata} = useContext(Context);
  const [username, setusername] = useState("");
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [errormsg, seterrormsg] = useState("")

  async function handleSignUp(event){
    event.preventDefault();
    if(!username|| !email|| !password|| !confirmpassword ){
      seterrormsg ("All feilds must be filled");
      return;
    }
    if(password !== confirmpassword){
      seterrormsg ("Password must match");
      return;
    }
    

    try{
      // alert("hi")
      const response = await axios.post('http://localhost:4000/api/signup',{username:username, email:email, password:password},{
        responseType: 'json' // Tell Axios to expect JSON response
      })
      if(response){
        console.log("new user created ")
        // console.log(response)
        const data = {username:response.data.user?.username, email:response.data.user?.email, _id: response.data.user?._id, picture:''}
        setuserdata(data)
        navigator('/')


      }

    }catch(error){
      // alert("eeror agaya")
      seterrormsg(error.response.data.error)
      return;
      // seterrormsg(error.message)
    }

  }

  async function handleLogin(event){

    event.preventDefault();
    if(!username|| !password ){
      seterrormsg ("All feilds must be filled");
      return;
    }
    try{
      // alert("hi")
      const response = await axios.post('http://localhost:4000/api/login',{username:username, password:password},{
        responseType: 'json' // Tell Axios to expect JSON response
      })
      if(response){
        console.log("user logged in succesfully ")

        const getuserdata = await axios.post('http://localhost:4000/api/getusergata',{username:username})
        if(getuserdata){
          console.log("this is the user data fetched from the db", getuserdata.data[0])
        }
        var rand = getuserdata.data[0]
        const data = {username:rand.username, email:rand.email, _id: rand._id, picture: rand.picture}
        setuserdata(data)
        console.log("the user data after setting it",userdata);
        navigator('/')

      }

    }catch(error){
      // alert("eeror agaya")
      seterrormsg(error.response.data.error)
      return;
      // seterrormsg(error.message)
    }



  }

  const [isSignIn, setIsSignIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSignIn(true);
    }, 200);
  }, []);

  const toggle = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div
      id="container"
      className={`${styles.container} ${
        isSignIn ? styles["sign-in"] : styles["sign-up"]
      }`}
    >
      <div className={styles.row}>
        <div
          className={`${styles.col} ${styles["align-items-center"]} ${styles["flex-col"]} ${styles["sign-up"]}`}
        >
          <div
            className={`${styles["form-wrapper"]} ${styles["align-items-center"]}`}
          >
            <div className={`${styles.form} ${styles["sign-up"]}`}>
              <div className={styles["input-group"]}>
                <i className={`${styles["bx"]} ${styles["bxs-user"]}`}></i>
                <input value={username} onChange={(event)=>{setusername(event.target.value)}} type="text" placeholder="Username" />
              </div>
              <div className={styles["input-group"]}>
                <i className={`${styles["bx"]} ${styles["bx-mail-send"]}`}></i>
                <input value={email} onChange={(event)=>{setemail(event.target.value)}}type="email" placeholder="Email" />
              </div>
              <div className={styles["input-group"]}>
                <i className={`${styles["bx"]} ${styles["bxs-lock-alt"]}`}></i>
                <input value={password} onChange={(event)=>{setpassword(event.target.value)}} type="password" placeholder="Password" />
              </div>
              <div className={styles["input-group"]}>
                <i className={`${styles["bx"]} ${styles["bxs-lock-alt"]}`}></i>
                <input value={confirmpassword} onChange={(event)=>{setconfirmpassword(event.target.value)}} type="password" placeholder="Confirm password" />
              </div>
              <button onClick={handleSignUp}>Sign up</button>
              {
                (errormsg && <p>{errormsg}</p>)
              }
              <div className={styles["google-button-wrapper"]}>
                <GoogleButton
                  label="Sign up with Google"
                  type="light"
                  onClick={loginwithgoogle}
                  style={{ borderRadius: "8px" }}
                />
              </div>

              <p>
                <span>Already have an account?</span>
                <b onClick={toggle} className={styles.pointer}>
                  Sign in here
                </b>
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${styles.col} ${styles["align-items-center"]} ${styles["flex-col"]} ${styles["sign-in"]}`}
        >
          <div
            className={`${styles["form-wrapper"]} ${styles["align-items-center"]}`}
          >
            <div className={`${styles.form} ${styles["sign-in"]}`}>
              <div className={styles["input-group"]}>
                <i className={`${styles["bx"]} ${styles["bxs-user"]}`}></i>
                <input value={username} onChange={(event)=>{setusername(event.target.value)}} type="text" placeholder="Username" />
              </div>
              <div className={styles["input-group"]}>
                <i className={`${styles["bx"]} ${styles["bxs-lock-alt"]}`}></i>
                <input value={password} onChange={(event)=>{setpassword(event.target.value)}} type="password" placeholder="Password" />
              </div>
              <button onClick={handleLogin}>Log in</button>
              {errormsg && <p>{errormsg}</p>}
              <div className={styles["google-button-wrapper"]}>
                <GoogleButton
                  label="Sign in with Google"
                  type="light"
                  onClick={loginwithgoogle}
                  style={{ borderRadius: "8px" }}
                />
              </div>

              <p>
                <b>Forgot password?</b>
              </p>
              <p>
                <span>Don't have an account?</span>
                <b onClick={toggle} className={styles.pointer}>
                  Sign up here
                </b>
              </p>
            </div>
          </div>
          <div className={styles["form-wrapper"]}></div>
        </div>
      </div>
      <div className={`${styles.row} ${styles["content-row"]}`}>
        <div
          className={`${styles.col} ${styles["align-items-center"]} ${styles["flex-col"]}`}
        >
          <div className={`${styles.text} ${styles["sign-in"]}`}>
            <h2>Welcome</h2>
          </div>
          <div className={`${styles.img} ${styles["sign-in"]}`}></div>
        </div>
        <div
          className={`${styles.col} ${styles["align-items-center"]} ${styles["flex-col"]}`}
        >
          <div className={`${styles.img} ${styles["sign-up"]}`}></div>
          <div className={`${styles.text} ${styles["sign-up"]}`}>
            <h2>Join now!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSignInForm;
