import React, { useEffect } from 'react'
import './FMS.css'
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { changeProduct } from "../../redux/slices/productSlice";



//http://localhost:8080/code/a/z/1010

function FMS() {
  const dispatch = useDispatch();

const navigate=useNavigate();
const [code, setCode] = useState('')
const [flag, setFlag] = useState(false)

useEffect(()=>{
  if(flag){
    axios.get(`http://localhost:8080/code/a/z/${code}`).then((res)=>{
      dispatch(changeProduct(res.data)) 
    }

    )
    navigate('/sequel')
  }
}, [code,flag, navigate, dispatch])

const reset=()=>{
  let usercode='111'//got from user data
  axios.get(`http://localhost:8080/code/a/z/${usercode}`).then((res)=>{
    dispatch(changeProduct(res.data)) 
  }

  )
  navigate('/sequel')
}


const FMS4=<div className='fms_div'>
<p>Do you have any blackhead spots?</p>
 <button onClick={()=>{
                setCode(code+'1');
                setFlag(true);
              }} className="fms_button">YES</button>
 <button onClick={()=>{
        setCode(code+'0');
        setFlag(true);
              }} className="fms_button">NO</button>
</div>


const FMS3=<div className='fms_div'>
    <p>HOW DOES YOUR SKIN REACT TO ANY APPLICATIONS OR THE SUN?</p>
 <button onClick={()=>{
                setX(x+1)
                setCode(code+'1')

              }} className="fms_button">VERY SENSITIVE</button>
 <button onClick={()=>{
                setCode(code+'0')

                setX(x+1)
              }} className="fms_button">LESS SENSITIVE</button>
</div>

const FMS2=<div className='fms_div'>
  <p>What is your skin type?</p>
   <button onClick={()=>{
                 setCode(code+'1')
                  setX(x+1)
                }} className="fms_button">DRY</button>
   <button onClick={()=>{
              setCode(code+'0')
                  setX(x+1)
                }} className="fms_button">OILY</button>
   <button onClick={()=>{
        setCode(code+'10')
                  setX(x+1)
                }} className="fms_button">COMBO</button>
</div>

const FMS1=<div className='fms_div'>
                <button onClick={()=>{
                  setX(x+1)
                }} className="fms_button">FIND MY PRODUCTS</button>
                <button onClick={()=>{
                  reset()
                }} className="fms_button">MY PRODUCTS</button>

             </div>

const FMS=[FMS1, FMS2, FMS3, FMS4]
const [x, setX]=useState(0)
  return (
    <div className='fms_component'>
      <div className="fms_nav">
        <div onClick={()=>{
          if(x===0){
            navigate(-1)

          }else{
            setCode(code.slice(0, -1))
            setX(x-1);

          }

        }} className="prev">
          <AiOutlineArrowLeft />
        </div>
        <div>
          <p>SUPPLEMENT FINDER</p>
        </div>
        <Link onClick={()=>{
          setCode('')
        }} to='/' className="close">
          <AiOutlineClose/>
        </Link>
      </div>
      {FMS[x]}
    </div>
  )
}

export default FMS