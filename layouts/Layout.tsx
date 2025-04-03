import Link from "next/link";
import React from "react";
import "@/styles/globals.css";
import * as styles from "./layout.css";

import ThemeProvider from '@/context/ThemeProvider';
import DarkModeBtn from "@/components/Buttons/DarkModeBtn";


type HeaderProps = {
  children: React.ReactNode;
};

const Layout: React.FC<HeaderProps> = ({ children }) => {
  return (
    <html>
      <body>
        <ThemeProvider>
        <header className={styles.header}>
          <div className={styles.width}>
            <div className={styles.grid}>
              <Link href="@/">
                <h2 className={styles.logo}>
                  News<span className={styles.span}>ly</span>
                </h2>
              </Link>
              <nav className={styles.grid}>
                <Link href="@/">북마크</Link>
                <DarkModeBtn />
              </nav>
            </div>
          </div>
        </header>
        <div>{children}</div>
        <footer>
          <div className={styles.width}></div>
        </footer>
      </ThemeProvider>
      </body>
      
    </html>
  );
};

export default Layout;
