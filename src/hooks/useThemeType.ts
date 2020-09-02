import { useState, useCallback } from 'react';
import { ThemeType, ThemeTypeContext } from '../theme';

export const useThemeType = (initialState: ThemeType = 'system'): ThemeTypeContext => {
    const [value, setValue] = useState<ThemeType>(initialState);

    const setThemeType = useCallback((currentThemeType: ThemeType): void => {
        setValue(currentThemeType);
    }, []);

    return {
        themeType: value,
        setThemeType,
    };
};
