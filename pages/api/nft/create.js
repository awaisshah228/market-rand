// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

    if(req.method=='POST'){
        try {
            const action= req.query.action;
            if('createImageInIPFS'==action){

            }else if('createImageInIPFS'==action){

            
            }else if('createMetaDataInIPFS'==action){

            
            }else if('createNFTInDB'==action){

            }
            
        } catch (error) {
            
        }
        // if()
    }

    const nftItems = [
        {
          tokenId: 1,
          name: "My First Ape",
          href: "#",
          image:
            "https://cdn.pixabay.com/photo/2022/02/18/16/09/ape-7020995_960_720.png",
          price: "35",
          ownerAddress: "0X34",
          isListedforSale: true,
          isOwnedBySigner: true,
          hasValidSalesOrder: false,
        },
        {
          tokenId: 2,
          name: "My First Ape",
          href: "#",
          image:
            "https://cdn.pixabay.com/photo/2022/02/18/16/09/ape-7020995_960_720.png",
          price: "35",
          ownerAddress: "0X34",
          isListedforSale: true,
          isOwnedBySigner: true,
          hasValidSalesOrder: false,
        },
      ];
    res.status(200).json(nftItems)
  }
  