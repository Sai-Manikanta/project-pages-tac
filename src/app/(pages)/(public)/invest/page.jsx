
import Footer3 from '@/components/common/Footer3'
import Hero from './Hero'
import Features1 from './Features1'
import Features4 from './Features4'
import ContactUs from './ContactUs'
// import ContactUs from './ContactUs'
// import ContactUs from './ContactUs'

export const metadata = {
  title: 'Invest',
}

const InvestPage = () => {
  return (
    <>
      <Hero />

      {/* <InvestPageUs /> */}
      <Features1 />
      <Features4 />

      <ContactUs />

      <Footer3 />
    </>
  )
}

export default InvestPage
