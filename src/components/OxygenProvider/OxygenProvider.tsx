import React, { FC, useState } from 'react';
import 'normalize.css';
import '../../assets/oxygen-ui.css';

import Theme, { theming, defaultTheme, ThemeType } from '../../theme';
import { ThemeContextProvider } from '../../theme/ThemeContext';

const { ThemeProvider } = theming;

interface OxygenProviderProps {
    theme?: Theme;
    type?: ThemeType;
}

const OxygenProvider: FC<OxygenProviderProps> = ({ children, theme, type }) => {
    const [statefulTheme, setStatefulTheme] = useState<Theme>(theme || defaultTheme);
    const [statefulThemeType, setStatefulThemeType] = useState<ThemeType>(type || 'system');

    return (
        <ThemeContextProvider
            value={{
                theme: statefulTheme,
                themeType: statefulThemeType,
                setTheme: setStatefulTheme,
                setThemeType: setStatefulThemeType,
            }}>
            <ThemeProvider theme={statefulTheme}>{children}</ThemeProvider>
        </ThemeContextProvider>
    );
};

export default OxygenProvider;
