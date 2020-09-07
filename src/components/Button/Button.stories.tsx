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

export const block = (): JSX.Element => (
    <Button color="primary" block>
        Block Button
    </Button>
);

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

export const actions = (): JSX.Element => (
    <Button onClick={() => alert('world!')} color="primary">
        Hello
    </Button>
);

export const growLoadingColors = (): JSX.Element => (
    <div>
        <Button style={{ marginRight: 5 }} isLoading={true} color="primary">
            Please wait...
        </Button>
        <Button style={{ margin: 10 }} isLoading={true} color="secondary">
            Please wait...
        </Button>
        <Button style={{ margin: 10 }} isLoading={true} color="success">
            Please wait...
        </Button>
        <Button style={{ margin: 10 }} isLoading={true} color="info">
            Please wait...
        </Button>
        <Button style={{ margin: 10 }} isLoading={true} color="warning">
            Please wait...
        </Button>
        <Button style={{ margin: 10 }} isLoading={true} color="error">
            Please wait...
        </Button>
        <Button style={{ margin: 10 }} isLoading={true} color="light">
            Please wait...
        </Button>
        <Button style={{ marginLeft: 5 }} isLoading={true} color="dark">
            Please wait...
        </Button>
    </div>
);

export const growLoadingSizes = (): JSX.Element => (
    <div>
        <Button style={{ marginRight: 10 }} isLoading={true} color="primary" size="small">
            Please wait...
        </Button>
        <Button style={{ margin: 10 }} isLoading={true} color="primary" size="medium">
            Please wait...
        </Button>
        <Button style={{ marginLeft: 10 }} isLoading={true} color="primary" size="large">
            Please wait...
        </Button>
    </div>
);

export const spinLoadingColors = (): JSX.Element => (
    <div>
        <Button style={{ marginRight: 5 }} isLoading={true} color="primary" loadingType="spin">
            Please wait...
        </Button>
        <Button style={{ margin: 10 }} isLoading={true} color="secondary" loadingType="spin">
            Please wait...
        </Button>
        <Button style={{ margin: 10 }} isLoading={true} color="success" loadingType="spin">
            Please wait...
        </Button>
        <Button style={{ margin: 10 }} isLoading={true} color="info" loadingType="spin">
            Please wait...
        </Button>
        <Button style={{ margin: 10 }} isLoading={true} color="warning" loadingType="spin">
            Please wait...
        </Button>
        <Button style={{ margin: 10 }} isLoading={true} color="error" loadingType="spin">
            Please wait...
        </Button>
        <Button style={{ margin: 10 }} isLoading={true} color="light" loadingType="spin">
            Please wait...
        </Button>
        <Button style={{ marginLeft: 5 }} isLoading={true} color="dark" loadingType="spin">
            Please wait...
        </Button>
    </div>
);

export const spinLoadingSizes = (): JSX.Element => (
    <div>
        <Button
            style={{ marginRight: 10 }}
            isLoading={true}
            color="primary"
            size="small"
            loadingType="spin">
            Please wait...
        </Button>
        <Button
            style={{ margin: 10 }}
            isLoading={true}
            color="primary"
            size="medium"
            loadingType="spin">
            Please wait...
        </Button>
        <Button
            style={{ marginLeft: 10 }}
            isLoading={true}
            color="primary"
            size="large"
            loadingType="spin">
            Please wait...
        </Button>
    </div>
);
