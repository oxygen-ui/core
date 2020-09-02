import { createContext } from 'react';
import { createTheming } from 'react-jss';

import Theme from '.';
import defaultTheme from './defaultTheme';

const ThemeContext = createContext<Theme>(defaultTheme);
const theming = createTheming<Theme>(ThemeContext);

export default theming;
