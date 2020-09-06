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

export const disabled = (): JSX.Element => (
    <div>
        <Button style={{ marginRight: 5 }} color="primary" disabled>
            Primary
        </Button>
        <Button style={{ margin: 10 }} color="secondary" disabled>
            Secondary
        </Button>
        <Button style={{ margin: 10 }} color="success" disabled>
            Success
        </Button>
        <Button style={{ margin: 10 }} color="info" disabled>
            Info
        </Button>
        <Button style={{ margin: 10 }} color="warning" disabled>
            Warning
        </Button>
        <Button style={{ margin: 10 }} color="error" disabled>
            Error
        </Button>
        <Button style={{ margin: 10 }} color="light" disabled>
            Light
        </Button>
        <Button style={{ marginLeft: 5 }} color="dark" disabled>
            Dark
        </Button>
    </div>
);

export const sizes = (): JSX.Element => (
    <div>
        <Button style={{ marginRight: 5 }} color="primary" size="small">
            Small
        </Button>
        <Button style={{ margin: 10 }} color="primary" size="medium">
            Medium
        </Button>
        <Button style={{ margin: 10 }} color="primary" size="large">
            Large
        </Button>
    </div>
);

export const blockSizes = (): JSX.Element => (
    <div>
        <Button style={{ marginBottom: 10 }} color="primary" size="small" block>
            Small
        </Button>
        <Button style={{ marginBottom: 10 }} color="primary" size="medium" block>
            Medium
        </Button>
        <Button color="primary" size="large" block>
            Large
        </Button>
    </div>
);
