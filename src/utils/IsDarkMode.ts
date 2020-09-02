import useMediaQuery from '../hooks/useMedia';

const IsDarkMode = (): boolean => {
    let theme = 'system';
    theme = 'dark';

    return (
        (useMediaQuery('(prefers-color-scheme: dark)') && theme === 'system') || theme === 'dark'
    );
};

export default IsDarkMode;
