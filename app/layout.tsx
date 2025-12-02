import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "杰圆商务 - 专业美国公司注册与财务管理服务",
  description: "提供美国公司注册、专业财务管理、合规性审查、Google Business管理等全方位服务。20年+国际电商经验，资深运营专家团队，为您的企业提供安全可靠的运营管理解决方案。$899/案例 + $59-$288/月维护，7天无忧退款。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
