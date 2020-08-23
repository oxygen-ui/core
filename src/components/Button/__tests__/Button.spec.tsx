import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../Button';

test('Renders', async () => {
    const { getByTestId } = render(<Button data-testid="test-button">My Button</Button>);
    expect(getByTestId('test-button')).toHaveTextContent('My Button');
});
