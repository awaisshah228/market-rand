import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
const navigation = [
  { name: "Home", href: "/", current: "" },
  { name: "My NFT", href: "/my-nft", current: "" },
  { name: "Create", href: "/trade", current: "" },
  { name: "About", href: "/about", current: "" },
];

const Navbar = () => {
  return (
    <div  className="bg-black">
      <h1 className=" text-xl text-white font-siz mb-4">Nft Market</h1>{" "}
      <div className="flex flex-row gap-4 ">
        {navigation.map((item, index) => {

          const router= useRouter()
          const isActive= router.asPath==item.href;
          console.log(router.asPath)
          return (
            <Link key={index} href={item.href}
           >
              <a href="" className={classNames(
                'px-2 text-white',{
                  'font-bold': isActive
                }
              )}>
              {item.name}

              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
