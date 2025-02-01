import Image from "next/image";

export default function Footer() {
  return (
    <footer className='px-4 md:px-0 py-10 bg-primary/5'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6'>
        {/* Logo and Brand Name */}
        <div>
          <div className='flex items-end gap-2'>
            <Image
              alt='Logo'
              fetchPriority='high'
              width='56'
              height='56'
              decoding='async'
              className='h-8 w-auto'
              style={{ color: "transparent" }}
              src='/logo.png'
            />
            <p className='text-lg font-semibold'>PackageDesign</p>
          </div>
          <p className='text-center text-xs text-black/70 font-light mt-4 hidden md:block'>
            © PackageDesign 2024 - a{" "}
            <a
              target='_blank'
              className='hover:underline'
              href='https://1811labs.com'
            >
              1811 Labs
            </a>{" "}
            product
          </p>
        </div>

        {/* Footer Navigation Links */}
        <nav
          className='flex flex-col sm:flex-row sm:justify-center space-y-2 md:space-y-0 md:space-x-10'
          aria-label='Footer'
        >
          <div>
            <a href='/#how-it-works' className='text-md hover:underline'>
              How it works
            </a>
          </div>
          <div>
            <a href='/#pricing' className='text-md hover:underline'>
              Pricing
            </a>
          </div>
          <div>
            <a href='/#faq' className='text-md hover:underline'>
              FAQs
            </a>
          </div>
          <div>
            <a href='/privacy-policy' className='text-md hover:underline'>
              Privacy Policy
            </a>
          </div>
          <div>
            <a href='/terms-of-service' className='text-md hover:underline'>
              Terms of Service
            </a>
          </div>
          <div>
            <a
              href='mailto:pkgdesign.app@gmail.com'
              className='text-md hover:underline'
            >
              Contact us
            </a>
          </div>
        </nav>

        {/* Mobile Copyright Text */}
        <p className='text-center text-xs text-black/70 font-light mt-4 block md:hidden'>
          © PackageDesign 2024 - a 1811 Labs product
        </p>
      </div>
    </footer>
  );
}
