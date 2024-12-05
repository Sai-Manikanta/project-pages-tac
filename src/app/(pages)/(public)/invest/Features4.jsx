import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

//images
import whiteWave from '@/assets/images/shapes/white-wave.svg'
import marketing from '@/assets/images/features/marketing4.jpg'
import moneyTree from '@/assets/images/features/moneyTree.jpg'
import Link from 'next/link'

const Features4 = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100/70 to-gray-100/50 relative py-16 lg:py-32">
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <Image
          src={whiteWave}
          alt="white-wave-svg"
          className="w-full -scale-x-100"
        />
      </div>
      <div className="container">
        <div
          className="grid lg:grid-cols-2 grid-cols-1 gap-14 items-center"
          data-aos="fade-up"
        >
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl/tight font-medium mb-5">
              Empowering Businesses Anytime, Anywhere
            </h1>
            <p className="text-gray-500">
              Our company is dedicated to providing cutting-edge solutions to help businesses monitor, manage, and grow their operations seamlessly. Trusted by thousands worldwide, we focus on delivering actionable insights to drive success.
            </p>

            {/* <div>
              <Link
                href="/contact-us"
                name="Email"
                className="bg-primary text-white rounded-lg text-sm font-semibold inline-flex gap-2 items-center shadow-lg shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40  px-8 py-3 mt-8"
              >
                Contact Us to Grow Together <FaArrowRight />
              </Link>
            </div> */}

            <div class="bg-white rounded-lg p-6 mt-4">
              <h2 class="text-lg font-semibold text-gray-800">Statistics</h2>
              <ul class="mt-4 space-y-3">
                <li class="flex items-start">
                  <span class="inline-block w-3 h-3 bg-blue-500 rounded-full mt-1"></span>
                  <p class="ml-3 text-gray-600">
                    <strong class="text-gray-800">6 months sales growth:</strong> $1500.89K
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="inline-block w-3 h-3 bg-green-500 rounded-full mt-1"></span>
                  <p class="ml-3 text-gray-600">
                    <strong class="text-gray-800">Consistent performance increase:</strong> 8.90% monthly
                  </p>
                </li>
                <li class="flex items-start">
                  <span class="inline-block w-3 h-3 bg-purple-500 rounded-full mt-1"></span>
                  <p class="ml-3 text-gray-600">
                    <strong class="text-gray-800">Recognized for outstanding achievements:</strong> this year
                  </p>
                </li>
              </ul>
            </div>


            
          </div>
          <div className="order-1 lg:order-2">
            <Image
              width={515}
              height={326}
              src={moneyTree}
              alt="marketing4"
              className="shadow"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features4
