import useMediaQuery from '../hooks/useMedia';
import { ThemeType } from '../theme';

const GetThemeType = (themeType: ThemeType): 'dark' | 'light' => {
    return (useMediaQuery('(prefers-color-scheme: dark)') && themeType === 'system') ||
        themeType === 'dark'
        ? 'dark'
        : 'light';
};

export default GetThemeType;
