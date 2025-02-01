import { CookingPotIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import Image from "next/image";

export default function AppBar() {
  return (
    <header className='border-b'>
      <nav
        className='h-[8vh] mx-8 flex items-center justify-between p-4 lg:px-0 '
        aria-label='Global'
      >
        {/* Logo and Brand Name */}
        <a href='/'>
          <div className='flex items-end gap-2'>
            <img
              alt='Logo'
              fetchPriority='high'
              width='56'
              height='56'
              decoding='async'
              className='h-8 w-auto'
              src='/logo.png'
            />
            <p className='text-lg font-semibold'>PackageDesign</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className=' lg:flex lg:items-center lg:gap-x-8'>
          <div className='flex justify-center items-center gap-2'>
            <Image src={"/drug.png"} width={30} height={30} alt='drug' />
            <div className='text-sm text-black font-semibold'>1/100</div>
            <Info />
          </div>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </header>
  );
}

const Info = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='10'
      height='10'
      viewBox='0 0 24 24'
    >
      <path d='M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z'></path>
    </svg>
  );
};
