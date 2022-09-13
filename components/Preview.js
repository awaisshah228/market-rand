import React from 'react'
// import { Image } from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';

const Preview = ({file}) => {
    const [selectedImage, setSelectedImage] = useState(URL.createObjectURL(file));
    useEffect(()=>{
        setSelectedImage(URL.createObjectURL(file))
            // console.log(URL.createObjectURL(file))

    },[file])
  return (
    <div>
        <img src={selectedImage} className="w-30 h-30 rounded-full" />
        {/* <div>Preview</div> */}
    </div>
  )
}

export default Preview