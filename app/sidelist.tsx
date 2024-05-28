"use client";
import "./globals.css";
import Image from "next/image";
import React from "react";
import { IconButton } from "@mui/material";
import arrow from "@/assets/Arrow.svg";
import Hub from "@/icons/hub";
import Person from "@/icons/person";
import Arrow from "@/icons/arrow";
import Circle from "@/icons/circle";

export default function SideList() {
  const [open, setOpen] = React.useState<boolean>(true);
  const [idx, setIdx] = React.useState<number>(0);
  const [openAcc, setOpenAcc] = React.useState<boolean>(true);
  return (
    <div
      className={`bg-white rounded-e-3xl shadow-lg ${
        open ? "w-[25%]" : "w-20"
      } h-full min-h-screen p-5 pt-8 relative duration-300`}
    >
      <IconButton
        className={`absolute cursor-pointer -right-5 top-[100px] 
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => {
          setOpen((prevState) => !prevState)
          setOpenAcc(true)
        }}
      >
        <Image alt="arrow" src={arrow} />
      </IconButton>
      <div className="px-4 mt-[100px] h-full flex flex-col items-center justify-center gap-2">
        <button
          className={`flex rounded-3xl py-2 px-6
        text-sm items-center min-h-[50px]
        gap-x-4 w-full
        ${!open ? " justify-center" : ""}
        ${idx === 0 ? "bg-[#17AA9D] text-white" : "text-black"}`}
          onClick={() => {
            setIdx(0);
          }}
        >
          <div className="h-full">
            <Hub color={`${idx === 0 ? "white" : "#000"}`} />
          </div>
          <p className={`${!open ? "hidden" : ""} relative duration-300`}>
            Agency Hub
          </p>
        </button>
        <button
          className={`flex rounded-3xl py-2 px-6
        text-sm items-center min-h-[50px]
        gap-x-4 w-full
        ${!open ? " justify-center" : ""}
        ${idx === 1 ? "bg-[#17AA9D] text-white" : "text-black"}`}
          onClick={(e) => {
            setIdx(1);
          }}
        >
          <div className=" scale-125">
            <Person color={`${idx === 1 ? "white" : "#000"}`} />
          </div>
          <div
            className={`${
              !open ? "hidden" : ""
            } relative duration-300 flex justify-between items-center w-full`}
          >
            <p className={``}>Agency Profile</p>
            <IconButton
              onClick={() => setOpenAcc((prevState) => !prevState)}
              className={`${!openAcc && "rotate-180"}`}
            >
              <Arrow color={`${idx === 1 ? "white" : "#000"}`} />
            </IconButton>
          </div>
        </button>
        <div
          className={`${
            openAcc ? "hidden" : ""
          } overflow-hidden duration-300 flex flex-col items-center gap-2 py-4`}
        >
          <button className="flex justify-start gap-4 items-center w-[100%]">
            <Circle />
            <p className="text-[#A7A6A6]">Profile Details</p>
          </button>
          <button className="flex justify-start gap-4 items-center w-[100%]">
            <Circle />
            <p className="text-[#A7A6A6]">Settings</p>
          </button>
          <button className="flex justify-start gap-4 items-center w-[100%]">
            <Circle />
            <p className="text-[#A7A6A6]">Notifications</p>
          </button>
        </div>
      </div>
    </div>
  );
}
