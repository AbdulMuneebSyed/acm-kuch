import Image from "next/image";
import Cursor from "@/components/ui/cursor"
import cyberpunkImgae from "@/public/cyberpunk.png";
import CyberpunkPreloader from "@/components/preloader";
export default function Home() {
  return (
    <div className="min-h-screen h-screen w-screen bg-gray-100 relative overflow-hidden">
      {/* Navigation */}
      {/* <CyberpunkPreloader/> */}
      <Cursor />
      <nav className="flex justify-between items-center px-8 py-6 relative z-10">
        <div className="text-2xl font-bold text-gray-800">SENTECH</div>
        <div className="flex space-x-8 text-sm text-gray-600 uppercase tracking-wider">
          <a href="#" className="hover:text-gray-800 transition-colors">
            HOME
          </a>
          <a href="#" className="hover:text-gray-800 transition-colors">
            EXPERIENCE
          </a>
          <a href="#" className="hover:text-gray-800 transition-colors">
            TECHNOLOGY
          </a>
          <a href="#" className="hover:text-gray-800 transition-colors">
            CONTACT
          </a>
          <a href="#" className="hover:text-gray-800 transition-colors">
            ABOUT US
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[calc(100vh-100px)] flex items-center justify-center">
        {/* Large Typography Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[20rem] font-black text-black opacity-20 select-none leading-none tracking-tighter">
            SENSE
          </div>
        </div>

        {/* Cyberpunk Figure */}

        {/* Bottom Text */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <p className="text-sm text-gray-600 uppercase tracking-[0.3em] font-light">
            join us - Feel the future
          </p>
        </div>
      </div>
      <Image
        src={cyberpunkImgae}
        alt="Cyberpunk figure with technological enhancements"
        fill
        className="object-contain object-center absolute top-1/2 left-1/2 z-10"
        priority
      />
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
    </div>
  );
}
