import { Button } from "@/components/ui/button"; // Assuming you have a shadcn/ui Button component
import Image from "next/image";
export default function HeroSection() {
  return (
    <div className='relative isolate overflow-hidden h-full md:h-[90vh]'>
      <svg
        className='absolute inset-0 -z-10 w-full h-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
        aria-hidden='true'
      >
        <defs>
          <pattern
            id='0787a7c5-978c-4f66-83c7-11c213f99cb7'
            width='200'
            height='200'
            x='50%'
            y='-1'
            patternUnits='userSpaceOnUse'
          >
            <path d='M.5 200V.5H200' fill='none' />
          </pattern>
        </defs>
        <rect
          width='100%'
          height='100%'
          strokeWidth='0'
          fill='url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)'
        />
      </svg>

      <div className='mx-auto max-w-7xl relative flex md:w-full flex-col md:flex-row h-full items-center'>
        <div className='p-6 md:p-0 mx-0 max-w-xl'>
          <div className='mt-8 md:mt-0'>
            <a className='inline-flex space-x-6' href='/#pricing'>
              <span className='rounded-full bg-[#e5deda] px-3 py-1 text-xs font-medium leading-6 text-primary ring-1 ring-inset ring-indigo-600/10 mb-2'>
                50% off for first 100 users
              </span>
            </a>
          </div>

          <h1 className='text-4xl font-bold tracking-tight text-[#310100] sm:text-7xl'>
            <p>Turn ideas into</p>
            <p>package designs</p>
            <p>powered by AI</p>
          </h1>

          <div className='mt-6 md:text-lg text-black/60 font-light'>
            <p>
              Generate product packaging designs tailored to your theme & style.
            </p>
            <p>Ideal for designers seeking inspiration and efficiency.</p>
          </div>

          <div className='mt-10 flex items-center gap-x-6'>
            <Button asChild className='bg-buttoncolor'>
              <a href='/dashboard'>Get started</a>
            </Button>
            <a
              className='text-sm font-medium leading-6 text-[#310100]'
              href='/#how-it-works'
            >
              Learn more <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>

        <div className='mx-auto mt-16 flex max-w-2xl sm:mt-24 xl:ml-32'>
          <div className='max-w-3xl flex-none sm:max-w-5xl overflow-hidden'>
            <Image
              src='/hero.png'
              alt='App screenshot'
              width={2432}
              height={1442}
              priority
              className='w-screen md:w-[unset] md:h-[90vh] relative md:absolute top-0 right-14 scale-[1.3]'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
