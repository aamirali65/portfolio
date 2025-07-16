// app/layout.js
import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Aamir Almani | Full Stack Developer Portfolio',
  description:
    'Explore the portfolio of Aamir Almani, a Full Stack Developer specializing in MERN Stack, Android, Next.js, and UI/UX design.',
  keywords: [
    'Aamir Almani',
    'aamir ali',
    'Aamir Ali',
    'Aamirali65',
    'aamirali65',
    'Full Stack Developer',
    'MERN Stack',
    'React Developer',
    'Next.js Developer',
    'Portfolio',
    'Web Developer in Pakistan',
    'Frontend Developer',
    'Backend Developer',
    'Android Developer',
    'Freelancer',
    'UI UX Designer',
  ],
  authors: [{ name: 'Aamir Almani' }],
  creator: 'Aamir Almani',
  publisher: 'Aamir Almani',
  robots: 'index, follow',
  icons: {
    icon: '/assets/img/profile-pic.png',
  },
  openGraph: {
    title: 'Aamir Almani | Full Stack Developer',
    description:
      'Visit the official portfolio of Aamir Almani, MERN Stack Developer, Android Developer, and UI/UX expert.',
    url: 'https://aamiralmani.vercel.app', // or your custom domain
    siteName: 'Aamir Almani Portfolio',
    images: [
      {
        url: '/assets/img/og-image.jpg', // Replace with your OpenGraph image in /public
        width: 1200,
        height: 630,
        alt: 'Aamir Almani Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aamir Almani | Full Stack Developer',
    description:
      'Explore Aamir Almani’s personal portfolio showcasing his full stack and mobile development projects.',
    creator: '@aamirali65', // ✅ Replace with your actual Twitter handle
    images: ['https://pbs.twimg.com/profile_banners/1495335951979188226/1692978520/1080x360'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#171513" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://aamiralmani.vercel.app" />

        {/* Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aamir Almani | Full Stack Developer" />
        <meta
          property="og:description"
          content="Visit the official portfolio of Aamir Almani, MERN Stack Developer, Android Developer, and UI/UX expert."
        />
        <meta property="og:image" content="/assets/img/og-image.jpg" />
        <meta property="og:url" content="https://aamiralmani.vercel.app" />
        <meta property="og:site_name" content="Aamir Almani Portfolio" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aamir Almani | Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Explore Aamir Almani’s personal portfolio showcasing his full stack and mobile development projects."
        />
        <meta name="twitter:image" content="https://pbs.twimg.com/profile_banners/1495335951979188226/1692978520/1080x360" />
        <meta name="twitter:creator" content="@aamir_almani65" />

        {/* LinkedIn uses OpenGraph tags, no extra tags needed */}

        {/* Favicon */}
        <link rel="icon" href="/assets/img/profile-pic.png" type="image/png" />
      </head>
      <body>
        {children}

        {/* Font Awesome */}
        <Script
          src="https://kit.fontawesome.com/41187d9bea.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
