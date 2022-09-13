const getNft=async()=>{
    const resp= await fetch('/api/nfts');
    const nfts= await resp.json();
    return nfts;

}

export default{getNft}