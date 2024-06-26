import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from "@/assets/image 1.svg";
import bell from "@/assets/icons8-notification-64 1.svg";
import Divider from "@mui/material/Divider";
import profile from "@/assets/Mask group.svg";
import SideList from "./sidelist";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="bg-white absolute flex justify-between items-center w-full px-12 py-4 rounded-b-3xl shadow-md shadow-gray-400"
          style={{ zIndex: 10 }}
        >
          <div>
            <Image alt="logo" src={logo} />
          </div>
          <div className="flex gap-6 px-4">
            <Image alt="logo" src={bell} />
            <Divider orientation="vertical" flexItem />
            <Image alt="profile" src={profile} />
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-[#8C8C8C]">Subscription: </span>
                <span className=" font-semibold">Monthly</span>
              </div>
              <div>
                <span className="text-[#8C8C8C]">Valid Until: 1 Jan 2024</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between overflow-scroll">
          <SideList />
          {children}
        </div>
      </body>
    </html>
  );
}
