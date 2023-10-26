import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Level",
  description: "create next level app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <nav>
        <div>
          <a href="/">home</a>
        </div>
      </nav>
      <body className={inter.className}>{children}</body>
      <footer>Footer</footer>
    </html>
  );
};
export default RootLayout;
