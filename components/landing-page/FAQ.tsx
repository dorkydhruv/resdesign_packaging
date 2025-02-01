export default function FAQ() {
  return (
    <div id='faq' className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 py-24 sm:pt-32 md:px-0 lg:py-40'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-20'>
          <div className='lg:col-span-4 mb-10'>
            <h2 className='text-3xl text-center md:text-start font-bold tracking-tight text-[#310100] sm:text-4xl md:text-5xl'>
              Need Help?
            </h2>
            <p className='mt-4 text-base sm:text-lg font-light text-center md:text-start text-gray-600'>
              Can't find the answer you're looking for? Reach out to our{" "}
              <a
                href='mailto:pkgdesign.app@gmail.com'
                className='font-semibold hover:underline'
              >
                customer support
              </a>{" "}
              team.
            </p>
          </div>

          {/* Right Column: FAQ List */}
          <div className='lg:col-span-8'>
            <dl className='space-y-10 md:w-5/6'>
              {/* FAQ Item 1 */}
              <div>
                <dt className='font-semibold md:text-lg text-center md:text-start text-gray-900 mb-1'>
                  How are the credits allocated?
                </dt>
                <dd className='text-sm text-center md:text-start text-gray-600'>
                  Once you buy a plan, the credits will be allocated on a
                  monthly basis. The monthly cycle starts from the day you buy
                  the plan.
                </dd>
              </div>

              {/* FAQ Item 2 */}
              <div>
                <dt className='font-semibold md:text-lg text-center md:text-start text-gray-900 mb-1'>
                  Will my generations look the same as everyone else's who use
                  Package Design?
                </dt>
                <dd className='text-sm text-center md:text-start text-gray-600'>
                  No, each generation created on PackageDesign is unique and
                  tailored to your specific product type, package theme, and
                  style.
                </dd>
              </div>

              {/* FAQ Item 3 */}
              <div>
                <dt className='font-semibold md:text-lg text-center md:text-start text-gray-900 mb-1'>
                  How do I export my final package design?
                </dt>
                <dd className='text-sm text-center md:text-start text-gray-600'>
                  You can download all your designs in .png format by clicking
                  on the download button once the design is generated.
                </dd>
              </div>

              {/* FAQ Item 4 */}
              <div>
                <dt className='font-semibold md:text-lg text-center md:text-start text-gray-900 mb-1'>
                  Is it available for free?
                </dt>
                <dd className='text-sm text-center md:text-start text-gray-600'>
                  You receive 1 free credit for testing and familiarizing
                  yourself with the product. Afterwards, you'll get credits
                  based on the plan you choose.
                </dd>
              </div>

              {/* FAQ Item 5 */}
              <div>
                <dt className='font-semibold md:text-lg text-center md:text-start text-gray-900 mb-1'>
                  Can I cancel my subscription?
                </dt>
                <dd className='text-sm text-center md:text-start text-gray-600'>
                  Yes, you will be able to cancel your subscription from the
                  dashboard itself.
                </dd>
              </div>

              {/* FAQ Item 6 */}
              <div>
                <dt className='font-semibold md:text-lg text-center md:text-start text-gray-900 mb-1'>
                  Do you offer refunds?
                </dt>
                <dd className='text-sm text-center md:text-start text-gray-600'>
                  No, we do not offer refunds.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
