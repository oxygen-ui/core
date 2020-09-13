import { createUseStyles } from 'react-jss';

import Theme, { theming } from '../../theme';
import { TabsProps } from './Tabs';

interface StyledTabsProps extends TabsProps {
    themeType: 'dark' | 'light';
}

const stylesheet = (theme: Theme) => ({
    tabs: ({}: StyledTabsProps) => {
        const styles = {
            border: '1.5px solid #eee',
        };

        return styles;
    },
    tabHeader: () => {
        const styles = {
            borderBottom: '1.5px solid #eee',
            overflowX: 'auto',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
        };

        return styles;
    },
    tabBody: () => {
        const styles = {
            padding: 20,
        };

        return styles;
    },
    tabButton: ({ themeType }: StyledTabsProps) => {
        const styles = {
            background: 'transparent',
            border: 0,
            cursor: 'pointer',
            display: 'inline-block',
            verticalAlign: 'top',
            whiteSpace: 'normal',
            height: '100%',
            padding: '15px 20px',
            '&:disabled': {
                cursor: 'not-allowed',
            },
            '&:focus': {
                outline: 0,
            },
            '&:hover': {
                borderBottom: `3px solid ${theme.colors[themeType].background.primary}`,
            },
        };

        return styles;
    },
    tabButtonActive: ({ themeType }: StyledTabsProps) => {
        const styles = {
            borderBottom: `3px solid ${theme.colors[themeType].background.primary}`,
        };

        return styles;
    },
});

export const useStyles = createUseStyles(stylesheet, { theming });
