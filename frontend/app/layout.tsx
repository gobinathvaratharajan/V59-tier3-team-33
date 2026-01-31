import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JoyRoute",
  description: "Turn your destinations into the most efficient routes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window === "undefined") {
    // On server, redirect root to /dashboard
    redirect("/dashboard");
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* for charts only */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className={twMerge("bg-gray-50 dark:bg-gray-900", inter.className)}>
        {children}
      </body>
    </html>
  );
}
