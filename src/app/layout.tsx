import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beaver Robotics | Spatial Intelligence for Robots in the Real World",
  description:
    "Beaver Robotics builds persistent 4D world models and mobility intelligence systems that help robots understand, remember, and move through complex real-world environments.",
  keywords: [
    "Beaver Robotics",
    "spatial intelligence",
    "4D world model",
    "spatial memory",
    "robot mobility",
    "mobility brain",
    "embodied AI",
    "physical AI",
    "robot navigation",
    "real-world robotics",
    "robot autonomy",
    "world models",
    "mobile robots",
    "last-100-meter logistics",
    "persistent world model",
    "robot intelligence",
  ],
  openGraph: {
    title: "Beaver Robotics | Spatial Intelligence for Real-World Robots",
    description:
      "Persistent 4D world models and mobility intelligence for robots entering the real world.",
    type: "website",
    url: "https://www.beaver-robotics.com",
    siteName: "Beaver Robotics",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <link rel="icon" href="/logo-icon.png" type="image/png" />
      <body className="min-h-screen flex flex-col bg-off-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
