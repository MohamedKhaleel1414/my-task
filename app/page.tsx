"use client";
import React, { useState } from "react";
import { IconButton, Slider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";
import wallpaper from "@/assets/unsplash_4_jQL4JCS98.svg";
import Image from "next/image";
import waterMark from "@/assets/toronto-logo-png-transparent-e1663874591459 1.png";

export default function Home() {
  const [idx, setIdx] = useState<number>(0);
  const [choosed, setChoosed] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(0);
  const [propotional, setPropotional] = useState<number>(0);
  return (
    <div className="mt-[100px] w-full p-8">
      <p className="capitalize text-black text-[18px] font-semibold">
        SETTINGS
      </p>
      <div className="mt-4 flex justify-center gap-12">
        <button
          className={`border border-[#D9D9D9] px-4 py-2 rounded-3xl
          ${idx === 0 ? "bg-[#17AA9D] text-white" : " text-black"}
        `}
          onClick={() => setIdx(0)}
        >
          ACCESS CONTROL
        </button>
        <button
          className={`border border-[#D9D9D9] px-4 py-2 rounded-3xl
          ${idx === 1 ? "bg-[#17AA9D] text-white" : " text-black"}
        `}
          onClick={() => setIdx(1)}
        >
          CONTACT DETAILS RESTRICTIONS
        </button>
        <button
          className={`border border-[#D9D9D9] px-4 py-2 rounded-3xl
          ${idx === 2 ? "bg-[#17AA9D] text-white" : " text-black"}
        `}
          onClick={() => setIdx(2)}
        >
          WATER MARK
        </button>
      </div>
      <div className="mt-8 bg-[#F9F9F9] rounded-2xl p-4">
        <p className=" font-semibold">WATER MARK</p>
        <div className="mt-4 w-full flex justify-between gap-4">
          <div className=" w-full">
            <div className="w-full flex gap-[100px] px-12 py-4">
              <div className=" flex flex-col items-center gap-4">
                <IconButton onClick={() => setChoosed(0)}>
                  <CheckCircleIcon
                    sx={{ color: choosed === 0 ? "#17AA9D" : "#D9D9D9" }}
                  />
                </IconButton>
                <DoNotDisturbIcon
                  sx={{
                    color: choosed === 0 ? "#17AA9D" : "#D9D9D9",
                    fontSize: 30,
                  }}
                />
                <p className="text-[#8C8C8C] text-[14px]">None</p>
              </div>
              <div className=" flex flex-col items-center gap-4">
                <IconButton onClick={() => setChoosed(1)}>
                  <CheckCircleIcon
                    sx={{ color: choosed === 1 ? "#17AA9D" : "#D9D9D9" }}
                  />
                </IconButton>
                <BrokenImageOutlinedIcon
                  sx={{
                    color: choosed === 1 ? "#17AA9D" : "#D9D9D9",
                    fontSize: 30,
                  }}
                />
                <p className="text-[#8C8C8C] text-[14px]">Image</p>
              </div>
              <div className=" flex flex-col items-center gap-4">
                <IconButton onClick={() => setChoosed(2)}>
                  <CheckCircleIcon
                    sx={{ color: choosed === 2 ? "#17AA9D" : "#D9D9D9" }}
                  />
                </IconButton>
                <TextFieldsOutlinedIcon
                  sx={{
                    color: choosed === 2 ? "#17AA9D" : "#D9D9D9",
                    fontSize: 30,
                  }}
                />
                <p className="text-[#8C8C8C] text-[14px]">Text</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-between">
            <div className="">
              <div className=" flex justify-between">
                <p className="text-[#8C8C8C] text-[12px]">Opacity</p>
                <p className="text-[#8C8C8C] text-[12px]">{opacity}%</p>
              </div>
              <Slider
                defaultValue={opacity}
                aria-label="Small"
                valueLabelDisplay="auto"
                sx={{ color: "#17AA9D" }}
                onChange={(e) => {
                  console.log(e.target?.value);
                  setOpacity(e.target?.value);
                }}
              />
            </div>
            <div className="">
              <div className=" flex justify-between">
                <p className="text-[#8C8C8C] text-[12px]">Propotional</p>
                <p className="text-[#8C8C8C] text-[12px]">{propotional}%</p>
              </div>
              <Slider
                defaultValue={propotional}
                aria-label="Small"
                valueLabelDisplay="auto"
                sx={{ color: "#17AA9D" }}
                onChange={(e) => {
                  console.log(e.target?.value);
                  setPropotional(e.target?.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className=" min-w-[787px] min-h-[431px] flex justify-center items-center mt-4 relative">
          <Image
            alt="wallpaper"
            src={wallpaper}
            width={787}
            height={598}
            className="absolute  rounded-2xl"
          />
          <Image
            alt="waterMark"
            src={waterMark}
            style={{ zIndex: 10, opacity: opacity / 100 }}
            height={167}
          />
        </div>
        <div className="mt-6 w-full flex justify-center gap-12">
          <button
            className={`border border-[#D9D9D9] px-8 py-2 rounded-3xl
           bg-[#17AA9D] text-white`}
          >
            Update
          </button>
          <button
            className={`border border-[#17AA9D] px-8 py-2 rounded-3xl
           text-[#17AA9D]`}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
