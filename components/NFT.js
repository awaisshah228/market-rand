import React from "react";
import Image from "next/image";

const NFT = ({ nft,button}) => {
  console.log(nft);
  return (
    <div className="flex flex-col rounded-md bg-black">
      <Image
        // loader={myLoader}
        src={nft.image}
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <div className="flex  justify-between  p-3 text-white">
        <span>{nft.name}</span>
        <span>{nft.price}</span>
      </div>
      <div className=" flex justify-center p-3">
      <button className="w-full bg-white ">Buy </button>
      </div>
     
    </div>
  );
};

export default NFT;
