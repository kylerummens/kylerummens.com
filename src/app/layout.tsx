import Image from 'next/image'
import '../styles/globals.scss';
import profile_image from '../../public/profile.webp';
import { Roboto, Roboto_Mono } from '@next/font/google';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300','400','500','700','900']
})

const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${roboto_mono.variable}`}>
      <head />
      <body>

        <div className="flex min-h-screen flex-col items-center">

          <div
              className="flex h-full w-full max-w-[1728px] flex-1 flex-col items-start px-6 lg:flex-row lg:px-16 lg:gap-16 xl:gap-20">
              <div
                  className="flex w-full max-w-full flex-col py-10 lg:sticky lg:top-0 lg:mb-0 lg:min-h-screen lg:flex-1 lg:overflow-visible lg:py-16">

                  <Image src={profile_image} alt="Kyle's profile image" className="h-36 w-36 md:h-52 md:w-52 rounded-full mb-8" priority />

                  <h1 className="label text-4xl font-medium mb-4">Kyle Rummens</h1>
                  <h2 className="secondary-label text-2xl font-light">I&apos;m a software engineer, rock climber, wannabe pilot, and
                      recovering Dr. Pepper addict</h2>

              </div>
              <div className="pb-10 lg:min-h-screen lg:py-16 flex w-full flex-col lg:w-[550px] xl:w-[820px]">

                  {children}

              </div>
          </div>
      </div>

      </body>
    </html>
  )
}
