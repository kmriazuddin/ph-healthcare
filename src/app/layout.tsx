import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Providers from "@/lib/Providers/Providers";
import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });

// className={inter.className}

export const metadata: Metadata = {
  title: "PH Healthcare",
  description: "Online Doctor Chambers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <AppRouterCacheProvider>
            <>
              <Toaster position="top-center" />
              {children}
            </>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
