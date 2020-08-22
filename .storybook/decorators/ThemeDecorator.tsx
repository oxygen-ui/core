import React from 'react';
import { DecoratorFn } from '@storybook/react';

import { OxygenProvider } from '../../src';

const ThemeDecorator: DecoratorFn = (story) => <OxygenProvider>{story()}</OxygenProvider>;

export default ThemeDecorator;
