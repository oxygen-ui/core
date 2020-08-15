import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../Button';

test('Renders', async () => {
    const { getByRole } = render(<Button role="button">My Button</Button>);
    expect(getByRole('button')).toHaveTextContent('My Button');
});
