'use client'

import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa6'

//images
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'

import google from '@/assets/images/brands/google.svg'
import amazon from '@/assets/images/brands/amazon.svg'
// import lenovo from '@/assets/images/brands/lenovo.svg'

import 'swiper/css'
import 'swiper/css/navigation'

const CommonSlide1 = ({ image, logo, }) => {
  return (
    <>
      <FaQuoteLeft className="text-gray-500 text-5xl" />
      <p className="my-4">
        TACTIC Resource has been a total game-changer for Tippett Studio! It's used across
        the board – from crew members logging hours to production management handling
        schedules and assignments. Upper management and the finance teams can pull
        comprehensive real-time financial reports. Our HR team uses it to manage crew availability
        and project allocation. In all my years in this industry, I've never seen a resource planning
        system that handles data analysis and financial reporting so effectively.
      </p>
      <div className="border-b border-gray-200 w-full my-7"></div>

      <div className="flex flex-wrap items-center justify-between gap-10">
        <div className="flex items-center gap-2">
          {/* <Image
            alt="userImg"
            height={40}
            width={40}
            src={image}
            className="h-10 w-10 rounded-full"
          /> */}
          <div>
            <h1 className="text-sm mb-1">Dale Taylor</h1>
            <p className="text-gray-500 text-xs">Tippet Studio, VP of Production</p>
          </div>
        </div>
        {/* <div>
          <Image
            alt="companyLogo"
            height={32}
            width={96}
            src={logo}
            className="w-24"
          />
        </div> */}
      </div>
    </>
  )
}

const CommonSlide2 = ({ image, logo, }) => {
  return (
    <>
      <FaQuoteLeft className="text-gray-500 text-5xl" />
      <p className="my-4">
        At Jellyfish Pictures, we're a global production company with a tight-knit team culture and
        hundreds of artists collaborating from all over the world. To deliver on key milestone dates
        with our clients, we need to ensure our efficiency and utilization is visible to enable us to
        make informed decisions as a business. TACTIC Resource gives us the ability to see this at
        a glance.
      </p>
      <p className="my-4">
        Project management and resource allocation is now accessible all in one place, reducing the
        Excel ownership fears! All levels of our business are now using it – execs, production,
        finance, IT, and crew management teams across VFX, animation, and central ops. The
        forecasting features give us a single source of truth for procurement, financial planning,
        software licensing, and managing crew contracts worldwide. TACTIC is informing our daily
        operations and has helped us set new standards across the business, no matter where you
        work!
      </p>
      <div className="border-b border-gray-200 w-full my-7"></div>

      <div className="flex flex-wrap items-center justify-between gap-10">
        <div className="flex items-center gap-2">
          {/* <Image
            alt="userImg"
            height={40}
            width={40}
            src={image}
            className="h-10 w-10 rounded-full"
          /> */}
          <div>
            <h1 className="text-sm mb-1">Zoe Mariner</h1>
            <p className="text-gray-500 text-xs">Head of Operations, Jellyfish Pictures</p>
          </div>
        </div>
        {/* <div>
          <Image
            alt="companyLogo"
            height={32}
            width={96}
            src={logo}
            className="w-24"
          />
        </div> */}
      </div>
    </>
  )
}
const FeedBackSwiper = () => {
  return (
    <div className="col-span-3 lg:col-span-2 xl:col-span-3">
      <div className="relative">
        <div className="hidden sm:block">
          <div className="before:w-24 before:h-24 before:absolute before:-top-8 before:-end-8 before:bg-[url('../assets/images/pattern/dot5.svg')]"></div>
          <div className="after:w-24 after:h-24 after:absolute after:-bottom-8 after:-start-8 after:bg-[url('../assets/images/pattern/dot2.svg')]"></div>
        </div>
        <div id="swiper_one" className="swiper relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-custom-next',
              prevEl: '.swiper-custom-prev',
            }}
            loop
            spaceBetween={30}
          >
            <SwiperSlide className="p-10 border rounded-xl bg-white shadow">
              <CommonSlide1></CommonSlide1>
            </SwiperSlide>
            <SwiperSlide className="p-10 border rounded-xl bg-white shadow">
              <CommonSlide2></CommonSlide2>
            </SwiperSlide>
            {/* <SwiperSlide className="p-10 border rounded-xl bg-white shadow">
              <CommonSlide1 image={avatar3} logo={lenovo}></CommonSlide1>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default FeedBackSwiper
