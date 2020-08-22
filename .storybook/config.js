import { configure, addDecorator } from '@storybook/react';
import ThemeDecorator from './decorators/ThemeDecorator';

addDecorator(ThemeDecorator);

configure(require.context('../src', true, /\.stories\.tsx$/), module);
