import { Button } from "@/components/ui/button";

interface Step {
  icon: string;
  title: string;
  description: string;
  imagePath: string;
}

const StepIcon = ({ path }: { path: string }) => (
  <svg className='w-6 h-6 text-primary flex-shrink-0' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
    <path strokeLinecap='round' strokeLinejoin='round' d={path} />
  </svg>
);

const StepCard = ({ step, index }: { step: Step; index: number }) => (
  <div className='flex flex-col gap-3'>
    <div className='flex items-center gap-2'>
      <StepIcon path={step.icon} />
      <h3 className='text-xl font-medium text-[#310100]'>{step.title}</h3>
    </div>
    <dd className='text-base text-black/60 leading-relaxed'>{step.description}</dd>
  </div>
);

const StepImage = ({ step, index }: { step: Step; index: number }) => (
  <div className='relative aspect-[4/3] rounded-lg overflow-hidden bg-white shadow-sm'>
    <img
      alt={`Step ${index + 1}`}
      src={step.imagePath}
      className='object-cover w-full h-full'
      loading='lazy'
    />
  </div>
);

const steps: Step[] = [
  {
    icon: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    title: "Create Account",
    description:
      "Login to PackageDesign and create an account with us. No credit card required!",
    imagePath: "/create-account.png",
  },
  {
    icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75",
    title: "Generate Design",
    description:
      "Enter the product details, select package theme and hit the generate button.",
    imagePath: "/design.png",
  },
  {
    icon: "M20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z",
    title: "Manage Design",
    description:
      "Once you generate a design, you can download, share or regenerate a different variation with the same configuration in a single click.",
    imagePath: "/manage.png",
  },
];

export default function HowItWorks() {
  return (
    <section id='how-it-works' className='py-20 bg-primary/5'>
      <div className='container px-6 max-w-7xl mx-auto'>
        <div className='flex flex-col items-center space-y-12'>
          <header className='max-w-3xl text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#310100]'>
              How it works?
            </h2>
            <p className='mt-6 text-lg text-black/60 leading-relaxed'>
              Just input your product details, select your packaging style &
              theme, and let our system generate a custom design for you.
            </p>
          </header>

          <div className='w-full space-y-12'>
            <dl className='grid sm:grid-cols-3 gap-6'>
              {steps.map((step, index) => (
                <StepCard key={index} step={step} index={index} />
              ))}
            </dl>

            <div className='grid sm:grid-cols-3 gap-6'>
              {steps.map((step, index) => (
                <StepImage key={index} step={step} index={index} />
              ))}
            </div>
          </div>
          <div className='w-full max-w-3xl aspect-video rounded-lg overflow-hidden'>
            <iframe
              src='https://www.youtube.com/embed/your-video-id'
              title='Package Design Walkthrough'
              className='w-full h-full'
              allowFullScreen
            />
          </div>

          <Button asChild className='w-full sm:w-auto px-8 bg-buttoncolor'>
            <a href='/login'>Get started</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
