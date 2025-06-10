import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Robotics Club",
  description: "GEC Palakkad Robotics Club Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-bl from-[#ffe4e6]  to-[#ccfbf1]`}
      >
        {children}
      </body>
    </html>
  );
}
