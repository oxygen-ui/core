import { createContext } from 'react';
import { createTheming } from 'react-jss';

const ThemeContext = createContext({});
const theming = createTheming(ThemeContext);

export default theming;
