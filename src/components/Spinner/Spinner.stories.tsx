import React from 'react';
import Spinner from './Spinner';

export default { title: 'Spinner' };

export const growBasic = (): JSX.Element => <Spinner color="primary" type="grow" />;

export const growColors = (): JSX.Element => (
    <div>
        <Spinner style={{ marginRight: 10 }} color="primary" type="grow" />
        <Spinner style={{ margin: 10 }} color="secondary" type="grow" />
        <Spinner style={{ margin: 10 }} color="success" type="grow" />
        <Spinner style={{ margin: 10 }} color="info" type="grow" />
        <Spinner style={{ margin: 10 }} color="warning" type="grow" />
        <Spinner style={{ margin: 10 }} color="error" type="grow" />
        <Spinner style={{ margin: 10 }} color="light" type="grow" />
        <Spinner style={{ marginLeft: 10 }} color="dark" type="grow" />
    </div>
);

export const growSizes = (): JSX.Element => (
    <div>
        <Spinner style={{ marginRight: 10 }} color="primary" size="small" type="grow" />
        <Spinner style={{ margin: 10 }} color="primary" size="medium" type="grow" />
        <Spinner style={{ marginLeft: 10 }} color="primary" size="large" type="grow" />
    </div>
);

export const growSpeeds = (): JSX.Element => (
    <div>
        <Spinner style={{ marginRight: 10 }} color="primary" speed="slow" type="grow" />
        <Spinner style={{ margin: 10 }} color="primary" speed="default" type="grow" />
        <Spinner style={{ marginLeft: 10 }} color="primary" speed="fast" type="grow" />
    </div>
);

export const spinBasic = (): JSX.Element => <Spinner color="primary" />;

export const spinColors = (): JSX.Element => (
    <div>
        <Spinner style={{ marginRight: 10 }} color="primary" />
        <Spinner style={{ margin: 10 }} color="secondary" />
        <Spinner style={{ margin: 10 }} color="success" />
        <Spinner style={{ margin: 10 }} color="info" />
        <Spinner style={{ margin: 10 }} color="warning" />
        <Spinner style={{ margin: 10 }} color="error" />
        <Spinner style={{ margin: 10 }} color="light" />
        <Spinner style={{ marginLeft: 10 }} color="dark" />
    </div>
);

export const spinSizes = (): JSX.Element => (
    <div>
        <Spinner style={{ marginRight: 10 }} color="primary" size="small" />
        <Spinner style={{ margin: 10 }} color="primary" size="medium" />
        <Spinner style={{ marginLeft: 10 }} color="primary" size="large" />
    </div>
);

export const spinSpeeds = (): JSX.Element => (
    <div>
        <Spinner style={{ marginRight: 10 }} color="primary" speed="slow" />
        <Spinner style={{ margin: 10 }} color="primary" speed="default" />
        <Spinner style={{ marginLeft: 10 }} color="primary" speed="fast" />
    </div>
);
