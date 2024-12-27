import React, { useContext, useEffect } from 'react'
import "./Verify.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../components/context/StoreContext';
import axios from 'axios';

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");

    //get the backend url with contextAPI
    const {url} = useContext(StoreContext);

    const navigate = useNavigate();

    //verify payment
    const verifyPayment = async () =>{
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        if(response.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/");
        }

    }

    useEffect(()=>{
        verifyPayment();
    })
    
  return (
    <div className='verify'>
    <div className="spinner">

    </div>
      
    </div>
  )
}

export default Verify
