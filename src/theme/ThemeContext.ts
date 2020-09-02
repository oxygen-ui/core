import { createContext, Dispatch, SetStateAction } from 'react';
import Theme, { ThemeType } from '.';
import defaultTheme from './defaultTheme';

interface ThemeContextProps {
    theme: Theme;
    themeType: ThemeType;
    setTheme: Dispatch<SetStateAction<Theme>>;
    setThemeType: Dispatch<SetStateAction<ThemeType>>;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: defaultTheme,
    themeType: 'system',
    setTheme: () => {
        return;
    },
    setThemeType: () => {
        return;
    },
});

export const ThemeContextProvider = ThemeContext.Provider;
export default ThemeContext;
