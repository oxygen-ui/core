import React, { FC } from 'react';

import { theming, defaultTheme } from '../Theme';
import Theme from '../Theme';

const { ThemeProvider } = theming;

interface Props {
    theme?: Theme;
}

const OxygenProvider: FC<Props> = ({ children, theme }) => (
    <ThemeProvider theme={theme || defaultTheme}>{children}</ThemeProvider>
);

export default OxygenProvider;
