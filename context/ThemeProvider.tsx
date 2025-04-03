'use client';

import { darkTheme, lightTheme } from '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            value={{ light: lightTheme, dark: darkTheme }}
        >
            {children}
        </ThemeProvider>
    );
};

export default Provider;