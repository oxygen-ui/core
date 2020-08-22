import React from 'react';
import { OxygenProvider } from '../../src';

const ThemeDecorator = (story) => <OxygenProvider>{story()}</OxygenProvider>;

export default ThemeDecorator;
