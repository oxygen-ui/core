import React from 'react';
import Button from './Button';

export default { title: 'Button' };

export const basic = (): JSX.Element => <Button>Button</Button>;

export const colors = (): JSX.Element => (
    <div>
        <Button style={{ marginRight: 5 }} color="primary">
            Primary
        </Button>
        <Button style={{ margin: 10 }} color="secondary">
            Secondary
        </Button>
        <Button style={{ margin: 10 }} color="success">
            Success
        </Button>
        <Button style={{ margin: 10 }} color="info">
            Info
        </Button>
        <Button style={{ margin: 10 }} color="warning">
            Warning
        </Button>
        <Button style={{ margin: 10 }} color="error">
            Error
        </Button>
        <Button style={{ margin: 10 }} color="light">
            Light
        </Button>
        <Button style={{ marginLeft: 5 }} color="dark">
            Dark
        </Button>
    </div>
);

export const block = (): JSX.Element => <Button block>Block Button</Button>;
