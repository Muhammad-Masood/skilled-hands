import { ClerkProvider } from "@clerk/nextjs";
import { NavBar } from "../components/crafter/Navbar";
import "../globals.css";
import { Toaster } from "react-hot-toast";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className="bg-gradient-to-l from-cyan-500 to-sky-100 h-full">
          <Toaster position="top-center" />
          <NavBar />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
