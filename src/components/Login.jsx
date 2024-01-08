import React from "react";
import "./Styles/Login.css";
import { memo,useRef,useEffect,useState } from "react";
import { Avatar, HStack, Input, Stack ,Button} from "@chakra-ui/react";
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillGooglePlusCircle,
  AiFillLinkedin,
} from "react-icons/ai";
const Login = memo(function Login() {
  const HStackStyle={
    width: '100%',
    background: 'white',
    color:'black',
    border: 'none',
    padding: '15px 20px',
    borderRadius: '20px',
    marginTop: '15px',
    boxShadow: '#cff0ff 0px 10px 10px -5px',
    borderInline: '2px solid transparent'
    }
  const passwordRef1=useRef(null)
  const [isPassword1,setIsPassword1]=useState(1)
  function handleClick1()
{
  setIsPassword1(!isPassword1)

}

useEffect(()=>{
  console.log(passwordRef1.current)
      if(isPassword1)

      passwordRef1.current.type="password"
       else
      passwordRef1.current.type="text"

},[isPassword1])



  const InputStyle={
    width: '100%',
    background: 'white',
    color:'black',
    border: 'none',
    padding: '15px 20px',
    borderRadius: '20px',
    marginTop: '15px',
    boxShadow: '#cff0ff 0px 10px 10px -5px',
    borderInline: '2px solid transparent'
    }
  return (
    <>
      <Stack m="auto" className="container">
        <Avatar m="auto" boxSize="32"/>
        <div className="heading">Sign In</div>
        <form action="" className="form">
          <Input
            required=""
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            style={InputStyle}

          />
            <HStack
            style={HStackStyle}
            
            >
          <Input
            required=""
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="New Password"
            ref={passwordRef1}
            style={InputStyle}

          /><Button onClick={handleClick1}>{isPassword1?<AiFillEye size={"30"} color="black"/>:<AiFillEyeInvisible size={"30"}  color="black"/>}</Button>
          </HStack>
          <span className="forgot-password">
            <a href="#">Forgot Password ?</a>
          </span>
          <input
            className="login-button"
            type="submit"
            defaultValue="Sign In"
          />
        </form>
        <div className="social-account-container">
          <span className="title">Or Sign in with</span>
          <div className="social-accounts">
            <button className="social-button">
              <AiFillFacebook color="black" size="40" />
            </button>
            <button className="social-button">
              <AiFillGoogleCircle color="black" size="40" />
            </button>
            <button className="social-button">
              <AiFillLinkedin color="black" size="40" />
            </button>
          </div>
        </div>
        <span className="agreement">
          <a href="#">Learn user licence agreement</a>
        </span>
      </Stack>
    </>
  );
});

export default Login;
