import { Button } from "@/components/ui/button";

interface PricingPlan {
  id: string;
  name: string;
  price: { original: number; discounted: number } | "Free";
  features: Array<{ included: boolean; text: string }>;
  buttonText: string;
  highlighted?: boolean;
}

const PricingCard = ({ plan }: { plan: PricingPlan }) => (
  <div
    className={`flex flex-col justify-between rounded-2xl bg-white p-6 md:p-8 shadow-sm border ${
      plan.highlighted
        ? "border-primary opacity-100"
        : "border-gray-900/10 opacity-90"
    }`}
  >
    <div>
      <h3 id={plan.id} className='text-sm font-semibold text-[#2c9f75]'>
        {plan.name}
      </h3>
      <div className='mt-2 md:mt-4 flex items-baseline gap-x-1'>
        {typeof plan.price === "string" ? (
          <span className='text-5xl font-bold tracking-tight'>
            {plan.price}
          </span>
        ) : (
          <div className='flex items-baseline gap-2'>
            <span className='text-2xl font-normal opacity-70 line-through decoration-colordark/60 decoration-2 px-0.5'>
              ${plan.price.original}
            </span>
            <span className='text-5xl font-bold tracking-tight'>
              ${plan.price.discounted}
            </span>
            <span className='text-sm font-medium text-colordark/70'>
              pay once
            </span>
          </div>
        )}
      </div>
      <Button
        variant={plan.highlighted ? "default" : "outline"}
        className={`mt-8 w-full md:w-auto text-xs md:text-sm ${
          plan.highlighted ? "bg-buttoncolor" : ""
        }`}
        aria-describedby={plan.id}
      >
        {plan.buttonText}
      </Button>
      <ul role='list' className='mt-6 space-y-2 text-sm text-gray-600'>
        {plan.features.map((feature, index) => (
          <li key={index} className='flex gap-x-3 items-center'>
            {feature.included ? <CheckIcon /> : <CrossIcon />}
            {feature.text}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='15'
      height='15'
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z'
        fill='currentColor'
        fillRule='evenodd'
        clipRule='evenodd'
      />
    </svg>
  );
}

function CrossIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='15'
      height='15'
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z'
        fill='currentColor'
        fillRule='evenodd'
        clipRule='evenodd'
      />
    </svg>
  );
}

const pricingPlans: PricingPlan[] = [
  {
    id: "trial",
    name: "Trial",
    price: "Free",
    features: [
      { included: true, text: "1 credit (generation)" },
      { included: true, text: "Download designs in PNG & PDF formats" },
      { included: false, text: "Early access to new features" },
    ],
    buttonText: "Try Now",
  },
  {
    id: "basic",
    name: "Standard",
    price: { original: 9, discounted: 5 },
    features: [
      { included: true, text: "10 credits (generations)" },
      { included: true, text: "Download designs in PNG & PDF formats" },
      { included: false, text: "Early access to new features" },
    ],
    buttonText: "Get Credits",
  },
  {
    id: "pro",
    name: "Pro",
    price: { original: 39, discounted: 19 },
    features: [
      { included: true, text: "80 credits (generations)" },
      { included: true, text: "Download designs in PNG & PDF formats" },
      { included: true, text: "Early access to new features" },
    ],
    buttonText: "Get Credits",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <div id='pricing' className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl flex flex-col px-4 items-center'>
        <header className='mx-auto max-w-4xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-[#310100] sm:text-4xl'>
            Pricing
          </h2>
          <p className='mt-4 text-black/60'>
            Use code <span className='font-medium'>PKG50</span> to get{" "}
            <span className='font-medium'>flat 50% Off</span> Across Plans.
          </p>
        </header>

        <div className='max-w-7xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-3 mt-10'>
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
