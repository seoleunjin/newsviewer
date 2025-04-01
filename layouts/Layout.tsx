import Link from 'next/link'
import React from 'react'

type HeaderProps = {
  children: React.ReactNode;
};


const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header>
      <div>
        <div>
          <Link href="@/">
            <h2>News<span>ly</span></h2>
          </Link>
          <nav>
            <Link href="@/">북마크</Link>
            <button>다크모드</button>
          </nav>
        </div>
      </div>
      <div>{children}</div>
    </header>
  );
};

export default Header;