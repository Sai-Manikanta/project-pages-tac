'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { FormInput } from '@/components'

//images
import logoDark from '@/assets/images/logo-dark.png'

const footerLinks = ['Changelog', 'FAQ', 'Press kit', 'Contact us']
const Footer = () => {
  // const { control, handleSubmit } = useForm()

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
    <footer className="pt-10 pb-6 border-t">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl/tight font-medium my-5">
            Be the first to know!
          </h2>
          <p className="text-gray-500">
            We &nbsp;will inform you about new updates, features, but no spam, we
            promise.
          </p>
          <form
            onSubmit={handleSignUp}
            // onSubmit={handleSubmit(() => {})}
            className="flex w-fit mx-auto items-center justify-center gap-2 my-10"
          >
            {/* <FormInput
              control={control}
              noValidate
              type="email"
              name="Email"
              placeholder="Your email"
              className="text-sm rounded border-gray-200 focus:border-gray-400 focus:ring-0 bg-transparent py-2 px-4"
              containerClassName="flex items-center gap-2"
            /> */}
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="text-sm rounded border-gray-200 focus:border-gray-400 focus:ring-0 bg-transparent py-2 px-4 w-[300px]"
              required
            />
            
            <button
              type="submit"
              className="inline-block py-2 px-4 rounded text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      {/* <div className="border-b" /> */}
    </footer>
  )
}

export default Footer
