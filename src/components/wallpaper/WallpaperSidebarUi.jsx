import React, { useState } from "react";
import profile from "../../assets/images/global/header/profile.gif";
import {
  iAddTag,
  iDownloadArrow,
  iFilter,
  iVerifiedPro,
  iWallpaperClose,
} from "../../utils/icons/icons";
import { Button } from "@material-tailwind/react";

const resulations = [
  {
    id: 1,
    name: "Ultra Wide",
    items: ["2560 × 1080", "3440 × 1440", "3840 × 1600"],
    children: {
      id: 4,
      name: "4:3",
      items: [
        "1280 × 960",
        "1600 × 1200",
        "1920 × 1440",
        "2560 × 1920",
        "3840 × 2880",
      ],
    },
  },
  {
    id: 2,
    name: "16:9",
    items: [
      "1280 × 720",
      "1600 × 900",
      "1920 × 1080",
      "2560 × 1440",
      "3840 × 2160",
    ],
    children: {
      id: 5,
      name: "16:9",
      items: [
        "1280 × 1024",
        "1600 × 1280",
        "1920 × 1536",
        "2560 × 2048",
        "3840 × 3072",
      ],
    },
  },
  {
    id: 3,
    name: "16:10",
    items: [
      "1280 × 800",
      "1600 × 1000",
      "1920 × 1200",
      "2560 × 1600",
      "3840 × 2400",
    ],
  },
];

const WallpaperSidebarUi = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#121212] lg:bg-[#00000033] w-full min-h-[802px] max-h-[802px] max-w-[347px] min-w-[347px] rounded-[10px] pt-[15px] px-[19px] pb-[23px] overflow-y-auto">
      <h1 className="text-center font-bakbak-one text-[12px] text-white">
        Posted by
      </h1>

      <div className="flex items-center justify-center gap-x-[32px] mt-[9px]">
        <div className="rounded-full size-[87px] flex justify-center items-center bg-[#00000033]">
          <img
            src={profile}
            alt="profile"
            className="size-[75px] rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-[19px]">
          <div className="flex items-center gap-x-[4px]">
            <h1 className="text-white font-bakbak-one text-[20px]">krs</h1>
            {iVerifiedPro}
          </div>
          <Button className="w-[97px] h-[32px] shadow-none hover:shadow-none text-white bg-[#000000] font-bakbak-one text-[10px] normal-case font-normal p-0 rounded-[15px]">
            View Profile
          </Button>
        </div>
      </div>
      <div className="border-t-[1px] border-[#393939] w-full mt-[22px] mb-[19px] hidden lg:block"></div>

      <h1 className="text-center font-bakbak-one text-[15px] text-[#CCC]">
        Dimensions
      </h1>

      <h1 className="text-center font-bakbak-one mt-[9px] text-[15px] text-[#606060]">
        3840 x 2160
      </h1>

      <div className="flex items-center justify-center gap-x-[3px] mt-[8px]">
        <h1 className="text-[12px] font-bakbak-one text-[#CCC]">
          Size Configuration
        </h1>
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer min-w-[24px]"
        >
          {open ? iWallpaperClose : iFilter}
        </div>
      </div>

      {open ? (
        <div className="mt-[20px]">
          <h1 className="text-center text-[12px] font-lato text-[#FFF]">
            Auto Detection
          </h1>
          <h1 className="text-center text-[12px] font-lato font-medium text-[#FFF] mt-[7px]">
            Your screen resolution is 1920 × 1080.
          </h1>

          <div className="mt-[20px] grid grid-cols-3 gap-x-[15px] gap-y-[9px] max-w-[279px] w-full mx-auto">
            {resulations.map((res, index) => (
              <div key={index} className="h-fit">
                <div className="w-[83px] h-[29px] flex justify-center items-center">
                  <h1 className="font-lato text-[12px] text-[#FDF516] font-medium">
                    {res.name}
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-y-[16px] h-fit mt-[9px]">
                  {res.items.map((item, i) => (
                    <div
                      key={i}
                      className="w-[83px] h-[29px] flex justify-center items-center bg-[#00000066] rounded-[5px]"
                    >
                      <h1 className="font-lato text-[12px] text-[#FFF] font-medium">
                        {item}
                      </h1>
                    </div>
                  ))}
                </div>

                {res?.children && (
                  <>
                    <div className="h-fit">
                      <div className="w-[83px] h-[29px] flex justify-center items-center">
                        <h1 className="font-lato text-[12px] text-[#FDF516] font-medium">
                          {res?.children.name}
                        </h1>
                      </div>

                      <div className="grid grid-cols-1 gap-y-[16px] h-fit mt-[9px]">
                        {res?.children?.items.map((item, i) => (
                          <div
                            key={i}
                            className="w-[83px] h-[29px] flex justify-center items-center bg-[#00000066] rounded-[5px]"
                          >
                            <h1 className="font-lato text-[12px] text-[#FFF] font-medium">
                              {item}
                            </h1>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="max-w-[265px] w-full border-t-[1px] border-[#939393] mt-[23px] mx-auto"></div>
          <h1 className="text-center text-[12px] font-lato text-[#FFF] mt-[13px]">
            Custom Resolution
          </h1>

          <div className="flex justify-center items-start gap-x-[25px] mt-[16px]">
            <input
              type="number"
              placeholder="Width"
              className="w-[79px] h-[30px] font-lato placeholder:font-lato bg-[#000000B2] outline-none rounded-[5px] placeholder:text-[#939393] text-[12px] placeholder:text-[12px] text-[#FFF] text-center"
            />
            <input
              type="number"
              placeholder="Height"
              className="w-[79px] h-[30px] font-lato placeholder:font-lato bg-[#000000B2] outline-none rounded-[5px] placeholder:text-[#939393] text-[12px] placeholder:text-[12px] text-[#FFF] text-center"
            />
          </div>
          <Button className="w-[79px] h-[30px] font-lato bg-[#000000B2] shadow-none hover:shadow-none normal-case font-normal rounded-[5px] text-[11px] text-[#FFF] text-center mt-[16px] mx-auto flex justify-center items-center">
            Generate
          </Button>
        </div>
      ) : (
        <>
          <h1 className="text-center font-bakbak-one text-[15px] text-[#CCC] mt-[19px]">
            Tags
          </h1>
          <h1 className="text-center font-bakbak-one text-[12px] text-[#0AB745] mt-[3px]">
            SFW
          </h1>

          <div>
            <h1 className="text-[#FFF] font-bakbak-one text-[12px]">
              #cod #callofduty #ghost #gaming #wallpaper #illustration #shooter
              #mw2
            </h1>
          </div>

          <div className="max-w-[235px] h-[35px] bg-[#00000033] rounded-[7px] mx-auto mt-[34px] flex justify-between items-center px-[10px]">
            <input
              type="text"
              placeholder="Add tags here..."
              className="w-full h-full flex-grow bg-transparent outline-none text-[#fff] placeholder:text-[#FFFFFF33] text-[12px] placeholder:text-[12px] placeholder:font-lato font-lato"
            />
            <div className="flex justify-center items-center size-[17px]">
              {iAddTag}
            </div>
          </div>

          <div className="max-w-[235px] w-full mt-[17px] mx-auto">
            <h1 className=" text-[#CCC] text-[15px] font-bakbak-one text-center">
              Statistics & Information
            </h1>
            <div className="flex justify-between items-start mt-[4px]">
              <div className="w-fit">
                <div className="flex items-center gap-x-[2px]">
                  <h1 className="text-[#606060] font-bakbak-one text-[12px]">
                    Views:
                  </h1>
                  <h1 className="text-[#CCC] font-bakbak-one text-[12px]">
                    8947
                  </h1>
                </div>
                <div className="flex items-center gap-x-[2px]">
                  <h1 className="text-[#606060] font-bakbak-one text-[12px]">
                    Category:
                  </h1>
                  <h1 className="text-[#CCC] font-bakbak-one text-[12px]">
                    Gaming
                  </h1>
                </div>
              </div>
              <div className="w-fit">
                <div className="flex items-center gap-x-[2px]">
                  <h1 className="text-[#606060] font-bakbak-one text-[12px]">
                    Favorites:
                  </h1>
                  <h1 className="text-[#CCC] font-bakbak-one text-[12px]">
                    1489
                  </h1>
                </div>
                <div className="flex items-center gap-x-[2px]">
                  <h1 className="text-[#606060] font-bakbak-one text-[12px]">
                    Size:
                  </h1>
                  <h1 className="text-[#CCC] font-bakbak-one text-[12px]">
                    12.2 MB
                  </h1>
                </div>
              </div>
            </div>

            <h1 className="mt-[22px] text-[#ccc] font-bakbak-one text-[15px] text-center">
              Credits
            </h1>
            <div className="w-fit mt-[7px]">
              <div className="flex items-center gap-x-[2px]">
                <h1 className="text-[#606060] font-bakbak-one text-[12px]">
                  Source:
                </h1>
                <h1 className="text-[#CCC] font-bakbak-one text-[12px]"></h1>
              </div>
              <div className="flex items-center gap-x-[2px]">
                <h1 className="text-[#606060] font-bakbak-one text-[12px]">
                  Original Author:
                </h1>
                <h1 className="text-[#CCC] font-bakbak-one text-[12px]"></h1>
              </div>
            </div>

            <Button className="flex items-center justify-center gap-x-[3px] rounded-[5px] bg-[#2924FF] w-[129px] h-[38px] mx-auto mt-[26px] shadow-none hover:shadow-none font-normal normal-case p-0">
              <h1 className="text-[15px] text-[#C4C4C4] font-bakbak-one ">
                Download
              </h1>
              <div className="min-w-[21px] min-h-[21px]">{iDownloadArrow}</div>
            </Button>
          </div>

          <div className="max-w-[265px] w-full min-h-[109px] h-fit bg-[#0000003D] rounded-[5px] mt-[20px] mx-auto">
            <h1 className="text-[12px] text-[#5A5A5A] font-bakbak-one pl-[18px] pr-[7px] pt-[6px]">
              Ownership of all images belongs to their <br /> respective
              original owners & illustrators.
            </h1>

            <div className="flex items-center justify-center gap-x-[16px] mt-[15px]">
              <h1 className="text-[#FFF] font-bakbak-one text-[12px]">
                Claim Listing
              </h1>
              <h1 className="text-[#FFF] font-bakbak-one text-[12px]">
                Remove Listing
              </h1>
            </div>
            <div className="flex items-center justify-center gap-x-[9px] mt-[17px] pb-[7px]">
              <h1 className="text-[#FFF] text-[10px] font-semibold font-roboto">
                Privacy Policy
              </h1>
              <h1 className="text-[#FFF] text-[10px] font-semibold font-roboto">
                Terms and Conditions
              </h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WallpaperSidebarUi;