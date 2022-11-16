import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps
} from '@chakra-ui/react';
import { MoonIcon } from './Moon';
import { SunIcon } from './Sun';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

type ThemeModeTogglerProps = Omit<IconButtonProps, 'aria-label'>;

export const ThemeModeToggler: React.FC<ThemeModeTogglerProps> = (props) => {
  const { toggleColorMode } = useColorMode();
   const [mounted, setMounted] = useState(false);
   const { resolvedTheme, setTheme } = useTheme();
  
   // After mounting, we have access to the theme
   useEffect(() => setMounted(true), []);
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      fontSize="6xl"
      aria-label=""
      variant="ghost"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      icon={<SwitchIcon />}
      _hover={{ bg: 'transparent' }}
      _active={{ bg: 'transparent' }}
      style={{ boxShadow: 'none' }}
      {...props}
    >
      </IconButton>
  );
};
