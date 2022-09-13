import serviceApi from "./serviceApi";


import { useState, useEffect } from "react";

const useNft = (onlySigner) => {
  const [nfts, setnfts] = useState([]);
  const [isLoading, setisLoading] = useState(true)
  const [loadingInfo, setloadingInfo] = useState("Trying to reconnect")
  const [error, seterror] = useState(null)

  useEffect(() => {
    try {
        setloadingInfo('Nfts are loading please wait');
     serviceApi.getNft().then(res=>{
      setnfts(res)
     });
    //  setnfts(allNfts);
     setisLoading(false)
     setloadingInfo('')
        
    } catch (error) {
         seterror(error)
    }
     
  },[nfts]);

  return {nfts,setnfts,isLoading,loadingInfo,error};
};

export default {useNft};