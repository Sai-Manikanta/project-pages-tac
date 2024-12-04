import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FaArrowRight, FaCheck } from 'react-icons/fa6'
const FeaturesAccordions = dynamic(() => import('./FeaturesAccordions'))

//images
import sass1 from '@/assets/images/hero/saas1.jpg'
import sass2 from '@/assets/images/hero/saas2.jpg'

const Features = () => {
  const checkIcon = <FaCheck color="#22C55E" size={20} />

  return (
    <section className="overflow-hidden">



      <div className="xl:py-24 py-16">
        <div className="container">
          <div className="text-center">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
              Features / Benefits
            </span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">
              Why Choose Us
            </h1>
            <p className="text-gray-500">
              Our Unique <span className="text-primary"> Advantages </span> at a Glance
            </p>
          </div>

          <div className="xl:pt-16 xl:pb-28 py-16">
            <div className="grid lg:grid-cols-1 grid-cols-1 gap-6 items-start">
              {/* <div className="relative">
                <div className="hidden sm:block">
                  <div className="after:w-20 after:h-20 after:absolute after:-top-8 after:-start-8 2xl:after:end-0 after:bg-[url('../assets/images/pattern/dot5.svg')]"></div>
                  <div className="before:w-20 before:h-20 before:absolute before:-bottom-8 before:-end-8 before:bg-[url('../assets/images/pattern/dot2.svg')]"></div>
                </div>
                <Image
                  src={sass1}
                  alt="saas1"
                  data-aos="fade-right"
                  data-aos-duration="400"
                />

                <br />

                <Image
                  src={sass1}
                  alt="saas1"

                  data-aos="fade-right"
                  data-aos-duration="400"
                />
              </div> */}

              <FeaturesAccordions />
            </div>
          </div>


        </div>
      </div>

      {/* <div className="xl:py-24 py-16">
        <div className="container" data-aos="fade-up" data-aos-duration="600">
          <div className="text-center">
            <h1 className="text-2xl font-medium">
              Any many more powerful features
            </h1>
          </div>

          <div className="py-16">
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
              <div className="order-1">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Hire and Retain Top Talent
                  </p>
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Team Management
                  </p>
                </div>
              </div>

              <div className="order-3 xl:order-2">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Stay Compliant
                  </p>
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Improve Productivity
                  </p>
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Improve Experience
                  </p>
                </div>
              </div>

              <div className="order-4 xl:order-3">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Self-service Time Tracking
                  </p>
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Performance Management
                  </p>
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Expert HR
                  </p>
                </div>
              </div>

              <div className="order-2 xl:order-4">
                <div className="flex flex-col gap-5">
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    New Hire Checklist
                  </p>
                  <p className="flex items-center gap-3">
                    {checkIcon}
                    Tax Calculator
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className="flex items-center justify-center mx-auto">
            <Link
              href=""
              className="inline-flex gap-2 items-center bg-primary text-white rounded-lg text-sm font-semibold hover:shadow-lg  hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-6 py-3"
            >
              Sign Up Now <FaArrowRight />
            </Link>
          </button>
        </div>
      </div> */}
    </section>
  )
}

export default Features
