import Image from 'next/image'

import Hero from './Hero/index'
import Features from '@/components/common/Features'
import FeedBack from '@/components/common/FeedbackTestimonial'
import FAQs from '@/components/common/FAQs'
import Clients from '@/components/common/Clients'
import Footer from '@/components/common/Footer'
import PricingCards from '@/components/common/PricingCards'
import Benefits from './Benefits'
import AboutSection from './AboutSection'
import CTA from './CTA'

import { benefits } from './benefits-data'

//image
import whiteWave from '@/assets/images/shapes/white-wave.svg'

export const metadata = {
  title: 'SassMorden Landing',
}

const SassModern = () => {
  return (
    <div className="text-gray-800">
      <Hero />
      <AboutSection />
      <Benefits benefits={benefits} />
      <Features />
      <Clients />
      <FeedBack />
      <CTA />
      <Footer />
    </div>
  )
}

export default SassModern
