import React from 'react'
import loading from './loading.gif';
import Image from 'next/image'
const Spinner = () => {
    return (
        <div className="text-center">
            <Image className="w-1/4" alt="spinner" src={loading} />
        </div>
    )
}
export default Spinner