import React,{ useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';


const MainPage = () => {

    const [payment,setPayment] = useState('')
    const [amount,setAmount] = useState(0)
    const [loading,setLoading] = useState(false)

    const handleAmountChange = e => {
        setAmount(e.target.value)
    }
 
    const PayWithSSL = () => {

    setLoading(true)
    const body = {
        amount
    }
        fetch(`https://ssl-commerz-backend-6lpl.vercel.app/ssl-init`,{
            method: 'post',
            headers:{
                "content-type" :"application/json"
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json(res)).then(data=> {console.log(data)
            setLoading(false)
            window.location.replace(data)
        })
        
    }
    const payWithBkash = () => {
        alert('This Bkash for test need contact with them! Thats why didnot possible to intrigate!')
    }

    return (
        <div className='makePayment'>
            <div className="container-div">
            <div className="sub-div m-auto py-5">
                <h1>Welcome, Make payment with easiest way!</h1>
                <h5>Please select payment system</h5>

                <div key={`inline-radio`} className="my-3" >
                    <Form.Check
                    inline
                        className='radioStyle'
                        label="BKash"
                        name="payment"
                        type='radio'
                        id={`inline-radio-1`}
                        onClick={()=> setPayment('bkash')}
                    />
                    <Form.Check
                    inline
                        className='radioStyle'
                        label="SSL Conmerze"
                        name="payment"
                        type='radio'
                        id={`inline-radio-2`}
                        onClick={()=> setPayment('sslCommerze')}
                    />
                    <Form.Control
                    inline
                    className='mt-3 w-75 mx-auto'
                    type='number'
                    placeHolder='Amount'
                    onChange={handleAmountChange}
                    />
                </div>

                {loading === false ? <div className='payment-btn'>

                {payment.length == 0 && <Button disabled className='fw-bold w-75 my-4' variant="warning">Select first payment type</Button>}

                {payment == 'bkash' && <Button onClick={payWithBkash} variant="warning" className='fw-bold w-75 my-4' id="bKash_button" >Pay With bKash</Button>}

                {payment == 'sslCommerze' && <Button onClick={PayWithSSL} className='fw-bold w-75 my-4' variant="warning">Pay Via SSL Commerz</Button>}
        
                </div> : 
                <Spinner animation='border' role='status'></Spinner>}
            </div>
            </div>
        </div>
    );
};

export default MainPage;