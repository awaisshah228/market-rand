import React from "react";
import NFT from './NFT'
import serviceMarketPlace from "../services/serviceMarketPlace";

const NftsList = ({button,onlySigner}) => {

  const {nfts:nftItems,setnfts,isLoading,loadingInfo,error}=serviceMarketPlace.useNft({onlySigner})

  // const nftItems = [
  //   {
  //     tokenId: 1,
  //     name: "My First Ape",
  //     href: "#",
  //     image:
  //       "https://cdn.pixabay.com/photo/2022/02/18/16/09/ape-7020995_960_720.png",
  //     price: "35",
  //     ownerAddress: "0X34",
  //     isListedforSale: true,
  //     isOwnedBySigner: true,
  //     hasValidSalesOrder: false,
  //   },
  //   {
  //     tokenId: 2,
  //     name: "My First Ape",
  //     href: "#",
  //     image:
  //       "https://cdn.pixabay.com/photo/2022/02/18/16/09/ape-7020995_960_720.png",
  //     price: "35",
  //     ownerAddress: "0X34",
  //     isListedforSale: true,
  //     isOwnedBySigner: true,
  //     hasValidSalesOrder: false,
  //   },
  // ];
  return <div
  className="flex flex-row w-screen  gap-6 m-3">{nftItems?.map((item,index)=>{

    return <NFT key={index} nft={item} button="" />

  })}</div>;
};

export default NftsList;
