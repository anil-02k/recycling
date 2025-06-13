import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Open_Sans, Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoLoop - Return Packaging at Your Doorstep | Hackathon 2025",
  description: "Transform packaging waste into rewards. Hand empties to delivery drivers for instant discounts. No trips. No waste. Built for Hackathon 2025.",
  keywords: "sustainability, packaging, recycling, blockchain, AR, environmental impact, circular economy",
  authors: [{ name: "EcoLoop Team" }],
  openGraph: {
    title: "EcoLoop - Sustainable Packaging Revolution",
    description: "Join the packaging revolution. Return boxes at your doorstep and earn rewards while saving the planet.",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoLoop - Sustainable Packaging Revolution",
    description: "Transform packaging waste into rewards with blockchain transparency and AR visualization.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Real-time analytics tracking
              window.ecoloopAnalytics = {
                trackEvent: function(event, data) {
                  console.log('EcoLoop Event:', event, data);
                  // In production, this would send to analytics service
                },
                trackPageView: function(page) {
                  console.log('EcoLoop Page View:', page);
                }
              };
              
              // Initialize AR.js for mobile devices
              if (navigator.userAgent.match(/Mobile|Android|iPhone|iPad/)) {
                window.isARSupported = true;
              }
              
              // Blockchain connection simulation
              window.blockchainAPI = {
                getBoxStatus: function(boxId) {
                  return new Promise(resolve => {
                    setTimeout(() => {
                      resolve({
                        id: boxId,
                        status: 'active',
                        reuses: Math.floor(Math.random() * 10) + 1,
                        co2Saved: (Math.random() * 2).toFixed(2) + 'kg'
                      });
                    }, 1000);
                  });
                }
              };
            `,
          }}
        />
      </head>
      <body
        className={`${unbounded.variable} ${openSans.variable} antialiased font-open-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}