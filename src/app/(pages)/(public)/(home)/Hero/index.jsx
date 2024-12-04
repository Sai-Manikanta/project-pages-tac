'use client'

import { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const EmailInput = dynamic(() => import('./EmailInput'))
const SassModernSwiper = dynamic(() => import('./SassModernSwiper'))

import whiteWave from '@/assets/images/shapes/white-wave.svg'

const checkSvg = (
  <svg
    className="stroke-green-500 stroke-2 w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    // alert(email);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '097c34af-2459-4892-8b47-fdf8dc6226ae',
          Type: 'New Email Subscription',
          email,
        }),
      })

      if (response.ok) {
        alert('Thank you for subscribing!')
        setEmail('')
      } else {
        // setErrorMessage('Something went wrong. Please try again later.')
      }
    } catch (error) {
      // setErrorMessage('Failed to submit. Please check your network and try again.')
    } 
  };

  return (
    <div>
      <section className="bg-gradient-to-t from-slate-500/10 relative">
        <section className="relative pt-44 pb-36">
          <div className="container">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="text-center sm:text-start">
                  {/* <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-7">
                    The best way to&nbsp;
                    <span className="relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0">
                      showcase
                    </span>
                    &nbsp;your saas
                  </h1> */}

                  <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-4xl/tight font-semibold mb-7">
                    TACTIC Resource,&nbsp;
                    is the single source of truth
                    &nbsp;in managing <span className="relative z-0 after:bg-green-500/50 after:-z-10 after:absolute md:after:h-6 after:h-4 after:w-full after:bottom-0 after:end-0">digital productions.</span>
                  </h1>

                  {/* TACTIC Resource, is the single source of truth in managing digital productions. */}

                  <p className="sm:text-lg text-gray-500">
                    Real-Time Project Planning, Resource Allocation, and Financial Management Platform for Digital Content Creation.
                  </p>
                  <form onSubmit={handleSignUp} className="flex gap-3  mt-16">
                    {/* <EmailInput /> */}
                    {/* onClick={handleSignUp} */}
                    {/* <form onSubmit={handleSignUp}> */}
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="inline-block text-sm border border-slate-300 focus:ring-0 rounded shadow-lg sm:shadow-none bg-white w-full py-3"
                        required
                      />
                      <button
                        type='submit'
                        className="bg-primary text-white rounded-lg text-sm font-semibold flex-none hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-3"
                      >
                        Sign Up
                      </button>
                    {/* </form> */}

                  </form>
                  {/* <div className="flex flex-wrap items-center gap-5 mt-5">
                    <div className="flex items-center gap-2">
                      {checkSvg}
                      <p className="text-sm text-gray-700">Free 14-day Demo</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {checkSvg}
                      <p className="text-sm text-gray-700">
                        No credit card needed
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="hidden sm:block">
                    <div className="before:w-24 before:h-24 before:absolute before:-bottom-8 before:-start-8 before:bg-[url('../assets/images/pattern/dot2.svg')]"></div>
                    <div className="after:w-24 after:h-24 after:absolute after:-top-10 after:end-10 2xl:after:end-0 after:rotate-45 after:bg-[url('../assets/images/pattern/dot5.svg')]"></div>
                  </div>

                  <SassModernSwiper />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="absolute bottom-0 inset-x-0 hidden sm:block">
          <Image
            width={1905}
            height={150}
            src={whiteWave}
            alt="white-wave-svg"
            className="w-full -scale-x-100 -scale-y-100"
          />
        </div>
      </section>
    </div>
  )
}

export default Hero
