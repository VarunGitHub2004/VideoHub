import React, { useEffect, useRef, useState } from "react";
import "./Styles/Login.css";
import { memo } from "react";
import { Avatar, Box, Button, HStack, Input, Stack } from "@chakra-ui/react";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillGooglePlusCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Signup = memo(function Signup() {
  const passwordRef1=useRef(null)
  const passwordRef2=useRef(null)
  const [isPassword1,setIsPassword1]=useState(1)
  const [isPassword2,setIsPassword2]=useState(1)
  function handleClick1()
{
  setIsPassword1(!isPassword1)

}
  function handleClick2()
{
  setIsPassword2(!isPassword2)

}
useEffect(()=>{
  console.log(passwordRef1.current)
      if(isPassword1)

      passwordRef1.current.type="password"
       else
      passwordRef1.current.type="text"

},[isPassword1])

useEffect(()=>{
  console.log(passwordRef2.current)
      if(isPassword2)

      passwordRef2.current.type="password"
       else
      passwordRef2.current.type="text"

},[isPassword2])

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
  return (
    <>
      <Stack m="auto" className="container" w={["50%","100%"]}>
        <Avatar m="auto" boxSize="32"/>
        <Box className="heading">Sign up</Box>
        <form action="" className="form">
          <Input
            required=""
            className="input"
            type="text"
            name="username"
            id="username"
            placeholder="username"
            style={InputStyle}
          />
          <Input
            required=""
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="email"
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
          <HStack 
            style={HStackStyle}
          
            >
          <Input
            required=""
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Confirm Password"
            ref={passwordRef2}
            style={InputStyle}

          /><Button  onClick={handleClick2}>{isPassword2?<AiFillEye size={"30"}  color="black"/>:<AiFillEyeInvisible color="black" size={"30"} />}</Button>
          </HStack>
          <span className="forgot-password">
            <a href="#">Forgot Password ?</a>
          </span>
          <input
            className="login-button"
            type="submit"
            defaultValue="Sign Up"
            
          />
        </form>
        <Box className="social-account-container">
          <span className="title">Or Sign up with</span>
          <div className="social-accounts">
            <Button className="social-button">
              <AiFillFacebook color="black" size="40" />
            </Button>
            <Button className="social-button">
              <AiFillGoogleCircle color="black" size="40" />
            </Button>
            <Button className="social-button">
              <AiFillLinkedin color="black" size="40" />
            </Button>
          </div>
        </Box>
        <span className="agreement">
          <a href="#">Learn user licence agreement</a>
        </span>
      </Stack>
    </>
  );
});

export default Signup;
