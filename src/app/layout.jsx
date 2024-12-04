
import Image from 'next/image'
import { Be_Vietnam_Pro } from 'next/font/google'

import NextTopLoader from 'nextjs-toploader'
import AppProviders from '@/components/AppProviders'

import appLogo from '@/assets/images/logo-dark.png'

// styles
import './globals.css'
import 'aos/dist/aos.css'

const BeVietnamPro = Be_Vietnam_Pro({
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
})


export const metadata = {
  title: {
    template:
      '%s | TACTIC',
    default: 'TACTIC',
  },
  description:
    'TACTIC',
  authors: [{ name: 'Coderthemes' }],
}

const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <style>{splashScreenStyles}</style>
      </head>
      <body className={BeVietnamPro.className}>
        <div id="splash-screen">
          <Image alt="Logo" width={355} height={83} src={appLogo} style={{ height: '10%', width: 'auto' }} />
        </div>
        <NextTopLoader color='#2864e6' showSpinner={false} />
        <AppProviders>
          <div id='__next_splash'>
            {children}
          </div>
        </AppProviders>
      </body>
    </html>
  )
}
