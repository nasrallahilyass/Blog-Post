'use client'

import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    return (
        <Button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle dark mode"
        >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
    }