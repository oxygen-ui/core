import color from 'color';

import Theme, { ThemeType } from '../theme';

const ParseTextColor = (backgroundColor: string, theme: Theme, themeType: ThemeType): string => {
    return color(backgroundColor).isDark()
        ? theme.colors[themeType].text.white
        : theme.colors[themeType].text.dark;
};

export default ParseTextColor;
