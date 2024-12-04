'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import { FUCollapse } from '@/components'

const FeaturesAccordions = () => {
  const [accordion, setAccordion] = useState(0)

  const handleAccordion = (index) => () => {
    if (index === accordion) setAccordion(null)
    else setAccordion(index)
  }

  return (
    <div className="grid grid-cols-2 gap-x-20">
      <div data-aos="fade-up" data-aos-duration="500">

      <div className="border-b my-6"></div>
      
        <FUCollapse open={accordion == 0} toggleCollapse={handleAccordion(0)}>
          <FUCollapse.Toggle className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition-all hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <div className="bg-blue-500/10 rounded-lg flex items-center justify-center h-12 w-12">
              {/* <svg
                className="h-6 w-6 text-blue-500"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                  <path
                    d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                    id="Combined-Shape"
                    fill="currentColor"
                    opacity="0.3"
                  ></path>
                  <path
                    d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                    id="Combined-Shape"
                    fill="currentColor"
                  ></path>
                </g>
              </svg> */}
              <svg
                className="h-6 w-6 text-blue-500"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                  <path
                    d="M12,2 C9.790861,2 8,3.790861 8,6 C8,7.65685425 8.8954305,9.15685425 10,9.82842712 L10,13 L6,13 C5.44771525,13 5,13.4477153 5,14 C5,14.5522847 5.44771525,15 6,15 L10,15 L10,18.1715729 C8.8954305,18.8431457 8,20.3431457 8,22 C8,24.209139 9.790861,26 12,26 C14.209139,26 16,24.209139 16,22 C16,20.3431457 15.1045695,18.8431457 14,18.1715729 L14,15 L18,15 C18.5522847,15 19,14.5522847 19,14 C19,13.4477153 18.5522847,13 18,13 L14,13 L14,9.82842712 C15.1045695,9.15685425 16,7.65685425 16,6 C16,3.790861 14.209139,2 12,2 Z"
                    id="Combined-Shape"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </div>
            <h1 className="font-medium mb-4 mt-2">
              Bidding
            </h1>
          </FUCollapse.Toggle>
          <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
            <p className="text-gray-700 dark:text-gray-300">
              The ultimate bidding solution for your projects. Our platform offers a comprehensive suite of tools tailor-made for bidding, enabling you to secure your next project with confidence. Say goodbye to the traditional bidding process and use a modern, real-time data-driven approach with Resource.
            </p>
            {/* <div className="mt-7 flex items-center">
              <Link
                href=""
                className="inline-flex gap-2 items-center text-primary"
              >
                Learn more
                <FaArrowRight />
              </Link>
            </div> */}
          </FUCollapse.Menu>
        </FUCollapse>

        <div className="border-b my-6"></div>

        <FUCollapse open={accordion == 1} toggleCollapse={handleAccordion(1)}>
          <FUCollapse.Toggle className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <div className="bg-green-500/10 rounded-lg flex items-center justify-center h-12 w-12">
              {/* <svg
                className="h-6 w-6 text-green-500"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                  <path
                    d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                    id="Combined-Shape"
                    fill="currentColor"
                    opacity="0.3"
                  ></path>
                  <path
                    d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                    id="Mask-Copy"
                    fill="currentColor"
                  ></path>
                </g>
              </svg> */}
              <svg
                className="h-6 w-6 text-green-500"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                  <path
                    d="M3,3 L3,21 L21,21 L21,3 L3,3 Z M19,19 L5,19 L5,5 L19,5 L19,19 Z"
                    id="Rectangle"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M8,7 C7.44771525,7 7,7.44771525 7,8 L7,12 C7,12.5522847 7.44771525,13 8,13 C8.55228475,13 9,12.5522847 9,12 L9,8 C9,7.44771525 8.55228475,7 8,7 Z"
                    id="Vertical-Line"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M12,7 C11.4477153,7 11,7.44771525 11,8 L11,14 C11,14.5522847 11.4477153,15 12,15 C12.5522847,15 13,14.5522847 13,14 L13,8 C13,7.44771525 12.5522847,7 12,7 Z"
                    id="Vertical-Line-2"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M16,7 C15.4477153,7 15,7.44771525 15,8 L15,10 C15,10.5522847 15.4477153,11 16,11 C16.5522847,11 17,10.5522847 17,10 L17,8 C17,7.44771525 16.5522847,7 16,7 Z"
                    id="Vertical-Line-3"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </div>
            <h1 className="font-medium mb-4 mt-2">Project Planning</h1>
          </FUCollapse.Toggle>
          <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
            <p className="text-gray-700 dark:text-gray-300">
              Access real-time insights into project estimated running costs and budgets at a glance for efficient project setup and management. Predict cash flow needs and schedule payments for better financial control.
            </p>
            {/* <div className="mt-7 flex items-center">
              <Link
                href=""
                className="text-primary inline-flex gap-2 items-center"
              >
                Learn more
                <FaArrowRight />
              </Link>
            </div> */}
          </FUCollapse.Menu>
        </FUCollapse>

        <div className="border-b my-6"></div>

        <FUCollapse open={accordion == 2} toggleCollapse={handleAccordion(2)}>
          <FUCollapse.Toggle className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <div className="bg-orange-500/10 rounded-lg flex items-center justify-center h-12 w-12">
              <svg
                className="h-6 w-6 text-orange-500"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                  <path
                    d="M3,3 L3,21 L21,21 L21,3 L3,3 Z M19,19 L5,19 L5,5 L19,5 L19,19 Z"
                    id="Rectangle"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M12,9 C12.5522847,9 13,8.5522847 13,8 C13,7.44771525 12.5522847,7 12,7 C11.4477153,7 11,7.44771525 11,8 C11,8.5522847 11.4477153,9 12,9 Z"
                    id="Circle-1"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M12,15 C12.5522847,15 13,14.5522847 13,14 C13,13.4477153 12.5522847,13 12,13 C11.4477153,13 11,13.4477153 11,14 C11,14.5522847 11.4477153,15 12,15 Z"
                    id="Circle-2"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M12,12 C12.5522847,12 13,11.5522847 13,11 C13,10.4477153 12.5522847,10 12,10 C11.4477153,10 11,10.4477153 11,11 C11,11.5522847 11.4477153,12 12,12 Z"
                    id="Circle-3"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M7,15 L7,17 L17,17 L17,15 L7,15 Z"
                    id="Horizontal-Line"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </div>
            <h1 className="font-medium mb-4 mt-2">Production Reporting</h1>
          </FUCollapse.Toggle>
          <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
            <p className="text-gray-700 dark:text-gray-300">
              Instantly view production budgets and costs by project, division, department, and location to enable quick decision-making and financial transparency. Generate detailed production reports by day, week, or month to monitor progress with precision and adapt to evolving project needs.
            </p>
            {/* <div className="mt-7 flex items-center">
              <Link
                href=""
                className="text-primary inline-flex gap-2 items-center"
              >
                Learn more
                <FaArrowRight />
              </Link>
            </div> */}
          </FUCollapse.Menu>
        </FUCollapse>

        <div className="border-b my-6"></div>

        <FUCollapse open={accordion == 3} toggleCollapse={handleAccordion(3)}>
          <FUCollapse.Toggle className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <div className="bg-amber-500/10 rounded-lg flex items-center justify-center h-12 w-12">
              <svg
                className="h-6 w-6 text-amber-500"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                  <path
                    d="M17,3 L7,3 C5.8954305,3 5,3.8954305 5,5 L5,19 C5,20.1045695 5.8954305,21 7,21 L17,21 C18.1045695,21 19,20.1045695 19,19 L19,5 C19,3.8954305 18.1045695,3 17,3 Z M17,5 C17.5522847,5 18,5.44771525 18,6 C18,6.55228475 17.5522847,7 17,7 C16.4477153,7 16,6.55228475 16,6 C16,5.44771525 16.4477153,5 17,5 Z M7,5 C7.5522847,5 8,5.44771525 8,6 C8,6.55228475 7.5522847,7 7,7 C6.44771525,7 6,6.55228475 6,6 C6,5.44771525 6.44771525,5 7,5 Z M17,19 C16.4477153,19 16,18.5522847 16,18 C16,17.4477153 16.4477153,17 17,17 C17.5522847,17 18,17.4477153 18,18 C18,18.5522847 17.5522847,19 17,19 Z M7,19 C6.44771525,19 6,18.5522847 6,18 C6,17.4477153 6.44771525,17 7,17 C7.5522847,17 8,17.4477153 8,18 C8,18.5522847 7.5522847,19 7,19 Z"
                    id="Rectangle"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M13,11 L11,11 L11,13 L13,13 L13,11 Z M12,14 C12.5522847,14 13,14.4477153 13,15 C13,15.5522847 12.5522847,16 12,16 C11.4477153,16 11,15.5522847 11,15 C11,14.4477153 11.4477153,14 12,14 Z"
                    id="Schedule"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </div>
            <h1 className="font-medium mb-4 mt-2">Scheduling</h1>
          </FUCollapse.Toggle>
          <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
            <p className="text-gray-700 dark:text-gray-300">
              Ensure the financial integrity of each project with real-time cost comparisons to allocate scheduling resources effortlessly across all projects within the business. Plan crew utilization to ramp on or off projects. Create schedules using written language or verbal commands without navigating deeply nested menus.
            </p>
            {/* <div className="mt-7 flex items-center">
              <Link
                href=""
                className="text-primary inline-flex gap-2 items-center"
              >
                Learn more
                <FaArrowRight />
              </Link>
            </div> */}
          </FUCollapse.Menu>
        </FUCollapse>

        <div className="border-b my-6"></div>

        <FUCollapse open={accordion == 4} toggleCollapse={handleAccordion(4)}>
          <FUCollapse.Toggle className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <div className="bg-lime-500/10 rounded-lg flex items-center justify-center h-12 w-12">
              <svg
                className="h-6 w-6 text-lime-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="6" height="6" rx="2" />
                <rect x="3" y="15" width="6" height="6" rx="2" />
                <rect x="15" y="3" width="6" height="6" rx="2" />
                <rect x="15" y="15" width="6" height="6" rx="2" />
                <path d="M9 9L15 9" />
                <path d="M9 21L15 21" />
              </svg>
            </div>
            <h1 className="font-medium mb-4 mt-2">Role Planning</h1>
          </FUCollapse.Toggle>
          <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
            <p className="text-gray-700 dark:text-gray-300">
              Strategically plan production schedules and explore multiple scenarios to effectively survey plans and budgets for maximum profitability.
            </p>
            {/* <div className="mt-7 flex items-center">
              <Link
                href=""
                className="text-primary inline-flex gap-2 items-center"
              >
                Learn more
                <FaArrowRight />
              </Link>
            </div> */}
          </FUCollapse.Menu>
        </FUCollapse>

        <div className="border-b my-6"></div>
      </div>
      <div data-aos="fade-up" data-aos-duration="500">
      <div className="border-b my-6"></div>

        <FUCollapse open={accordion == 5} toggleCollapse={handleAccordion(5)}>
          <FUCollapse.Toggle className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <div className="bg-emerald-500/10 rounded-lg flex items-center justify-center h-12 w-12">
              <svg
                className="h-6 w-6 text-emerald-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="7" cy="6" r="3" />
                <circle cx="7" cy="12" r="3" />
                <circle cx="7" cy="18" r="3" />
                <circle cx="17" cy="6" r="3" />
                <circle cx="17" cy="12" r="3" />
                <circle cx="17" cy="18" r="3" />
              </svg>
            </div>
            <h1 className="font-medium mb-4 mt-2">Workforce Planning</h1>
          </FUCollapse.Toggle>
          <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
            <p className="text-gray-700 dark:text-gray-300">
              Gain clear visibility and control over your workforce. Make informed decisions about open positions, contract types, and duration based on your project's current crew, including holidays and sickness. Real-time communication within TACTIC Resource reduces the need for meetings, while seamless integration to third-party applications like ActiTIME, ShotGrid, HiBob, and ftrack, creates an optimal workflow.
            </p>
            {/* <div className="mt-7 flex items-center">
              <Link
                href=""
                className="text-primary inline-flex gap-2 items-center"
              >
                Learn more
                <FaArrowRight />
              </Link>
            </div> */}
          </FUCollapse.Menu>
        </FUCollapse>

        <div className="border-b my-6"></div>

        <FUCollapse open={accordion == 6} toggleCollapse={handleAccordion(6)}>
          <FUCollapse.Toggle className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <div className="bg-cyan-500/10 rounded-lg flex items-center justify-center h-12 w-12">
              <svg
                className="h-6 w-6 text-cyan-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M19 9V7C19 6.44772 18.5523 6 18 6H6C5.44772 6 5 6.44772 5 7V9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 12V17C19 17.5523 18.5523 18 18 18H6C5.44772 18 5 17.5523 5 17V12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12H15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 7H15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 18H15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h1 className="font-medium mb-4 mt-2">Crew Costs</h1>
          </FUCollapse.Toggle>
          <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
            <p className="text-gray-700 dark:text-gray-300">
              Use precise time sheeting to allocate actualized crew costs to the correct project.
            </p>
            {/* <div className="mt-7 flex items-center">
              <Link
                href=""
                className="text-primary inline-flex gap-2 items-center"
              >
                Learn more
                <FaArrowRight />
              </Link>
            </div> */}
          </FUCollapse.Menu>
        </FUCollapse>

        <div className="border-b my-6"></div>

        <FUCollapse open={accordion == 7} toggleCollapse={handleAccordion(7)}>
          <FUCollapse.Toggle className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <div className="bg-indigo-500/10 rounded-lg flex items-center justify-center h-12 w-12">
              <svg
                className="h-6 w-6 text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M4 7V5C4 3.9 4.9 3 6 3H18C19.1 3 20 3.9 20 5V7M4 12H20M4 17H20M12 7V17"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="font-medium mb-4 mt-2">Technology and License Management</h1>
          </FUCollapse.Toggle>
          <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
            <p className="text-gray-700 dark:text-gray-300">
              Obtain precise cost forecasts for hardware and software tailored to roles, projects, or individuals. Make informed decisions and strengthen B2B negotiations with comprehensive cost breakdowns and projections.
            </p>
            {/* <div className="mt-7 flex items-center">
              <Link
                href=""
                className="text-primary inline-flex gap-2 items-center"
              >
                Learn more
                <FaArrowRight />
              </Link>
            </div> */}
          </FUCollapse.Menu>
        </FUCollapse>

        <div className="border-b my-6"></div>

        <FUCollapse open={accordion == 8} toggleCollapse={handleAccordion(8)}>
          <FUCollapse.Toggle className="pt-2 inline-flex items-center gap-x-4 w-full font-medium text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400">
            <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12">
              {/* <svg
                className="h-6 w-6 text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M4 7V5C4 3.9 4.9 3 6 3H18C19.1 3 20 3.9 20 5V7M4 12H20M4 17H20M12 7V17"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}

              <svg
                className="w-7 h-7 text-primary"
                viewBox="0 0 64 64"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="30"
                  fill="none"
                  stroke="rgb(200,53,53)"
                  strokeWidth="2"
                />
                <path
                  d="M32 18c-4 0-6 2-6 4s2 4 6 4 6 2 6 4-2 4-6 4"
                  fill="none"
                  stroke="rgb(200,53,53)"
                  strokeWidth="2"
                />
                <line
                  x1="32"
                  y1="14"
                  x2="32"
                  y2="50"
                  stroke="rgb(200,53,53)"
                  strokeWidth="2"
                />
                <rect x="20" y="36" width="6" height="10" fill="rgb(200,53,53)" />
                <rect x="28" y="30" width="6" height="16" fill="rgb(200,53,53)" />
                <rect x="36" y="24" width="6" height="22" fill="rgb(200,53,53)" />
              </svg>

            </div>
            <h1 className="font-medium mb-4 mt-2">Financial Planning</h1>
          </FUCollapse.Toggle>
          <FUCollapse.Menu className="w-full overflow-hidden duration-300 ps-16">
            <p className="text-gray-700 dark:text-gray-300">
              Real-time monitoring of project financial health through weekly reports. Track expenses, and revenues, and compare current estimated final costs against original budgets. Analyze historical trends and forecast software license needs for future projects. Assess the financial impacts of various scenarios, considering location, uplift, overhead, and tax credits. Calculate accurate overhead and fringe costs for competitive bidding.
            </p>
            {/* <div className="mt-7 flex items-center">
              <Link
                href=""
                className="text-primary inline-flex gap-2 items-center"
              >
                Learn more
                <FaArrowRight />
              </Link>
            </div> */}
          </FUCollapse.Menu>
        </FUCollapse>

        <div className="border-b my-6"></div>
      </div>
    </div>
  )
}

export default FeaturesAccordions
