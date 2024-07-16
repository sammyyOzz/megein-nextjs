import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";
import Header from "@/components/Navigation/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Megein - Media and Gender Enlightenment Initiative",
  description: "Megein: Empowering through Media and Gender Enlightenment Initiatives",
  keywords: ["megein", "gender equality", "media initiatives", "anti-misogyny", "gender education"],
  robots: {
    index: true,  // Ensuring the page is indexed
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,  // Optional based on your content strategy
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
