import Link from "next/link";
import React from "react";
import "@/styles/globals.css";
import * as styles from "./layout.css";
import ThemeProvider from '@/context/ThemeProvider';
import DarkModeBtn from "@/components/Buttons/DarkModeBtn";
import Image from "next/image";
import BookmarkIcon from '@/public/images/bookMark.svg'


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
                <Image
                  src={BookmarkIcon}
                  className={styles.bookmark}
                  alt="북마크"
                  width={16}
                  height={21}
                />  
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
