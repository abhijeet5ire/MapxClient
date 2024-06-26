import React from "react";
import styles from "../../style";
import { User, logo } from "../../assets/index";
import MoreArtistNFT from "./MoreArtistNFT";

const NFTProfile = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} justify-items-center`}>
        <div className="sm:h-[420px] md:h-[560px] w-full overflow-hidden h-[320px]">
          <img
            className="object-cover object-center w-full h-full"
            src="https://s3-alpha-sig.figma.com/img/a6f4/3f93/50c73503d13e1fe1a0e3277804ef1192?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WfwG7Ha3EPdBnGfQnV22T2QDnea~WD~mrP--H6kCvJvnQMT2KCphxXckercVaZl8D~dxLqltUfvRrtHiYllAFaEqGcP84y0FPoijsY3N8urtG7NrM6Ra~J3Tfux0L61OVCgRYERYg9chEqJxkgwV7ly4e1nPdNjucVSKYd-zVmEfiTZf8i9U003mS22oqitcBP4DfR18puA8gUat8U51R~WjjBElOvr6eSVAhcm3aPCxOPmqdXSNHoEqVfwFyvOYrs-ywsgZ3vGedK-~0IbBxWT3LVYO3LujjdfTa1oyMs9lC4qEKW8OJi6jM~7725sqI4hmy8fYtJdJN3hn6DAWiA__"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between sm:flex-row mt-10 md:mx-24">
          <div className="flex flex-1 flex-col max-w-[605px]">
            <div className="mb-10">
              <h2 className="text-[28px] sm:text-[38px] md:text-[51px] text-white font-semibold">
                The Orbidians
              </h2>
              <h2 className="text-[16px] md:text-[22px] text-dimWhite font-thin">
                Minted on Sep 30,2022
              </h2>
            </div>
            <div className="mb-8">
              <h2 className="text-[16px] md:text-[22px] text-dimWhite font-semibold">
                Created by
              </h2>
              <div className="flex items-center mt-2">
                <img
                  src="/mnt/data/image.png"
                  alt="Author"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="text-white font-semibold text-[16px] md:text-[22px]">
                  Animakid
                </span>
              </div>
            </div>

            <h2 className="text-[16px] md:text-[22px] text-dimWhite font-semibold mb-3">
              Description
            </h2>
            <p className="text-[16px] md:text-[22px] text-white">
              The Orbitians <br />
              is a collection of 10,000 unique NFTs on the Ethereum blockchain,
              <br />
              There are all sorts of beings in the NFT Universe. The most
              advanced and friendly of the bunch are Orbitians. <br /> They live
              in a metal space machines, high up in the sky and only have one
              foot on Earth.
              <br /> These Orbitians are a peaceful race, but they have been at
              war with a group of invaders for many generations. The invaders
              are called Upside-Downs, because of their inverted bodies that
              live on the ground, yet do not know any other way to be.
              Upside-Downs believe that they will be able to win this war if
              they could only get an eye into Orbitian territory, so they've
              taken to make human beings their target.
            </p>
            <div className="mt-10">
              <h2 className="text-[16px] md:text-[22px] text-dimWhite font-semibold mb-3">
                Details
              </h2>
              <div className="flex">
                <img src={User} />
                <h2 className="text-white text-[16px] sm:text-[22px] ml-3">
                  View on Etherscan
                </h2>
              </div>
              <div className="flex">
                <img src={User} />
                <h2 className="text-white text-[16px] sm:text-[22px] ml-3">
                  View Original
                </h2>
              </div>
            </div>
            <div className="mt-5">
              <h2 className="text-[16px] md:text-[22px] text-dimWhite font-semibold mb-3">
                Tags
              </h2>
              <div className="flex flex-col w-full md:flex-row justify-between">
                <h2 className="py-2 mx-1 my-1 w-fit text-white font-semibold bg-lightGrey rounded-2xl px-10">
                  ANIMATION
                </h2>
                <h2 className="py-2 mx-1 my-1 w-fit text-white font-semibold bg-lightGrey rounded-2xl px-10">
                  ILLUSTRATION
                </h2>
                <h2 className="py-2 mx-1 my-1 w-fit text-white font-semibold bg-lightGrey rounded-2xl px-10">
                  MOON
                </h2>
                <h2 className="py-2 mx-1 my-1 w-fit text-white font-semibold bg-lightGrey rounded-2xl px-10">
                  MOON
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full flex-col sm:w-[295px] p-4 h-[234px] bg-lightGrey rounded-xl">
            <h2 className="text-dimWhite font-light">Auction ends in </h2>
            <div className="flex justify-stretch">
              <div className="flex flex-col flex-1">
                <h2 className="text-[48px] text-white font-bold">59</h2>
                <h2 className="text-dimWhite">Hours</h2>
              </div>
              <div className="text-[44px] px-2 text-white font-bold">:</div>
              <div className="flex flex-col flex-1">
                <h2 className="text-[48px] text-white font-bold">59</h2>
                <h2 className="text-dimWhite">Minutes</h2>
              </div>
              <div className="text-[44px] px-2 text-white font-bold">:</div>
              <div className="flex flex-col flex-1">
                <h2 className="text-[48px] text-white font-bold">59</h2>
                <h2 className="text-dimWhite">Seconds</h2>
              </div>
            </div>
            <div className="w-full mt-2 py-3 flex justify-center bg-secondary rounded-xl text-white font-bold ">
              Place Bid
            </div>
          </div>
        </div>
        <MoreArtistNFT />
      </div>
    </div>
  );
};

export default NFTProfile;
