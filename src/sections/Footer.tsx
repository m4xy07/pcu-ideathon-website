import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";
import Link from "next/link";

export const Footer = () => {
  return (
  <footer className="py-5 border-t border-white/15">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-center gap-8">
      <div className="flex gap-2 items-center lg:flex-1 justify-center lg:justify-start">
        <div className="text-sm">© 2025 <Link href="https://github.com/m4xy07" className="text-[#FF776F]">Aman Shaikh.</Link> All rights reserved.</div>
        
      </div>  
      <div className="flex gap-5 md:flex-1 md:justify-end justify-center">
        <XSocial className="text-white/40 hover:text-white transition" />
        <InstaSocial className="text-white/40 hover:text-white transition" />
        <YTSocial className="text-white/40 hover:text-white transition" />
      </div>
      </div>
    </div>
    </footer>
  );
};
