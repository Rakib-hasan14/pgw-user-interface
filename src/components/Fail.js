import React from 'react';
import {Link} from 'react-router-dom'

const Fail = () => {
    return (
        <div className='text-center mt-5'>
            <h1 className='text-danger'>Failed Payment proccess!</h1>
            <Link to='/'>Back home page</Link>
        </div>
    );
};

export default Fail;