"use client";
import LogoIcon from "../assets/Ideathon_Logo_White.png";
import MenuIcon from "@/assets/icon-menu.svg";
import Buttonmain from "@/components/Buttonmain";
import { Link } from "react-scroll";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";

import {
  useDisclosure,
  Button,
} from "@heroui/react";

export const Header = () => {
  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (<header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
    <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
    <div className="container">
      <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
      <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
        <div>
          <div className=" h-[3rem] w-full inline-flex justify-center items-center ">
          <img src={LogoIcon.src} className="h-full w-full" />
          </div>
        </div>
        <div className="hidden md:block">

        <nav className="flex gap-8 text-sm">
            <Link to="Home" spy={true} smooth={true} offset={50} duration={200} className="text-white/70 hover:text-white transition" style={{cursor:'pointer'}}>Home</Link>
            <Link to="Themes" spy={true} smooth={true} offset={50} duration={200} className="text-white/70 hover:text-white transition" style={{cursor:'pointer'}}>Themes</Link>
            <Link to="Prizes" spy={true} smooth={true} offset={50} duration={200} className="text-white/70 hover:text-white transition" style={{cursor:'pointer'}}>Prizes</Link>
          </nav>
          
        </div>
        <div className="flex gap-4 items-center">
          <Buttonmain href='https://unstop.com/p/ideathon-20-2025-pimpri-chinchwad-university-maharashtra-1433066?lb=9PcWzBfl'>Register</Buttonmain>
          <Button className="md:hidden" onPress={onOpen}><MenuIcon  /></Button>
          
          <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
          <DrawerContent>
            {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1 text-white">Drawer Title</DrawerHeader>
              <DrawerBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                  adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                  officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                  deserunt nostrud ad veniam.
                </p>
              </DrawerBody>
              <DrawerFooter>
                
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
        </div>
      </div>
    </div>
  </header>
  );
};
