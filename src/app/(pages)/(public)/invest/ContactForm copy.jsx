'use client'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormInput, FormTextArea } from '@/components'

const ContactForm = () => {
  // form validation schema
  const contactUsSchema = yup.object().shape({
    fname: yup.string().required('Please enter first name'),
    lname: yup.string().required('Please enter last name'),
    email: yup
      .string()
      .email('Please enter valid Email')
      .required('Please enter Email'),
    message: yup.string().required('Please enter Message'),
  })

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(contactUsSchema),
  })

  const onSubmit = async (data) => {
    const accessKey = 'de89ad5d-9df0-4d29-91d1-d0379ac67ef7';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          Type: 'Contact Form',
          name: `${data.fname} ${data.lname}`,
          email: data.email,
          message: data.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        alert("Your request has been received, We'll contact you soon!")
        reset() // Reset the form after successful submission
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to submit form. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input type="hidden" name="_subject" value="TACTIC - New Form Submission from Contact Form" /> */}
      {/* <input type="hidden" name="_next" value="https://abcde.in/thank-you.html" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" /> */}
      <div className="flex gap-6">
        <div className="md:w-1/2">
          <FormInput
            control={control}
            label="First Name"
            name="fname"
            type="text"
            className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
            placeholder="Your First Name"
            labelClassName="block text-sm font-medium mb-1 text-gray-600"
            containerClassName="mb-5"
          />
          {/* {errors.fname && <p className="text-red-500 text-sm">{errors.fname.message}</p>} */}
        </div>
        <div className="md:w-1/2">
          <FormInput
            label="Last Name"
            name="lname"
            type="text"
            className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
            placeholder="Your Last Name"
            labelClassName="block text-sm font-medium mb-1 text-gray-600"
            containerClassName="mb-5"
            control={control}
          />
          {/* {errors.lname && <p className="text-red-500 text-sm">{errors.lname.message}</p>} */}
        </div>
      </div>
      <div className="w-full">
        <FormInput
          label="Email"
          name="email"
          type="email"
          className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
          placeholder="Your Email"
          labelClassName="block text-sm font-medium mb-1 text-gray-600"
          containerClassName="mb-5"
          control={control}
        />
        {/* {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>} */}

        <FormTextArea
          label="Message"
          name="message"
          className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
          placeholder="Type Your Message..."
          labelClassName="block text-sm font-medium mb-1 text-gray-600"
          containerClassName="mb-5"
          rows={4}
          control={control}
        />
        {/* {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>} */}
      </div>
      <button
        type="submit"
        className="inline-flex items-center text-sm bg-primary text-white font-medium leading-6 text-center align-middle select-none py-2 px-4 rounded-md transition-all hover:shadow-lg hover:shadow-primary/80"
      >
        Send
        <span className="w-4 h-4 ms-1">
          <svg
            className="w-full h-full text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
              <rect id="bound" x={0} y={0} width={24} height={24} />
              <path
                d="M3,13.5 L19,12 L3,10.5 L3,3.7732928 C3,3.70255344 3.01501031,3.63261921 3.04403925,3.56811047 C3.15735832,3.3162903 3.45336217,3.20401298 3.70518234,3.31733205 L21.9867539,11.5440392 C22.098181,11.5941815 22.1873901,11.6833905 22.2375323,11.7948177 C22.3508514,12.0466378 22.2385741,12.3426417 21.9867539,12.4559608 L3.70518234,20.6826679 C3.64067359,20.7116969 3.57073936,20.7267072 3.5,20.7267072 C3.22385763,20.7267072 3,20.5028496 3,20.2267072 L3,13.5 Z"
                id="Combined-Shape"
                fill="currentcolor"
              />
            </g>
          </svg>
        </span>
      </button>
    </form>
  )
}

export default ContactForm
