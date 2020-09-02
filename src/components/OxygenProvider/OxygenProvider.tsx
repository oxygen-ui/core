import React, { FC } from 'react';

import Theme, { theming, defaultTheme, ThemeType } from '../../theme';

const { ThemeProvider } = theming;

interface Props {
    theme?: Theme;
    type?: ThemeType;
}

const OxygenProvider: FC<Props> = ({ children, theme }) => (
    <ThemeProvider theme={theme || defaultTheme}>{children}</ThemeProvider>
);

export default OxygenProvider;
