import { addDecorator } from '@storybook/react';
import ThemeDecorator from './decorators/ThemeDecorator';

addDecorator(ThemeDecorator);

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};
