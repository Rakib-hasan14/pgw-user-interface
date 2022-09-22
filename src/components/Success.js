import React from 'react';
import {Link} from 'react-router-dom'


const Success = () => {
    return (
        <div className='text-center mt-5'>
            <h1 className='text-success'>Successfully Paid!</h1>
            <Link to='/'>Back home page</Link>
        </div>
    );
};

export default Success;