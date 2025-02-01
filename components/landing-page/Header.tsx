import { Button } from "@/components/ui/button"; // Assuming you have a shadcn/ui Button component

export default function Header() {
  return (
    <header>
      <nav
        className='h-[10vh] mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-0'
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

        {/* Mobile Menu Button */}
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              aria-hidden='true'
              data-slot='icon'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className='hidden lg:flex lg:items-center lg:gap-x-12'>
          <a
            className='text-sm font-medium leading-6 text-gray-900'
            href='/#how-it-works'
          >
            How it works
          </a>
          <a
            className='text-sm font-medium leading-6 text-gray-900'
            href='/#pricing'
          >
            Pricing
          </a>
          <a
            className='text-sm font-medium leading-6 text-gray-900'
            href='/#faq'
          >
            FAQs
          </a>
          <a href='/login'>
            <Button className='w-32 bg-buttoncolor'>Login</Button>
          </a>
        </div>
      </nav>

      {/* Hidden Div for Accessibility */}
      <div
        style={{
          position: "fixed",
          top: "1px",
          left: "1px",
          width: "1px",
          height: "0",
          padding: "0",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          borderWidth: "0",
          display: "none",
        }}
      ></div>
    </header>
  );
}
