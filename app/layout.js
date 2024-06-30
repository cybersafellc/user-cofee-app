import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cofee App",
  description: "Programmer masa gak ngopi. Ngopi Dong!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        ></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
