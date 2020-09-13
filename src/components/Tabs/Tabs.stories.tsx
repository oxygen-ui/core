import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';

export default { title: 'Tabs' };

export const basic = (): JSX.Element => (
    <Tabs>
        <Tab id="tab-1" title="Tab 1">
            Tab 1 description.
        </Tab>
        <Tab id="tab-2" title="Tab 2">
            Tab 2 description.
        </Tab>
    </Tabs>
);

export const singleTab = (): JSX.Element => (
    <Tabs>
        <Tab id="tab-1" title="Tab 1">
            Tab 1 description.
        </Tab>
    </Tabs>
);

export const disabledTab = (): JSX.Element => (
    <Tabs>
        <Tab id="tab-1" title="Tab 1">
            Tab 1 description.
        </Tab>
        <Tab id="tab-2" title="Tab 2" disabled>
            Tab 2 description.
        </Tab>
    </Tabs>
);

export const overflowTabs = (): JSX.Element => (
    <Tabs>
        <Tab id="tab-1" title="Tab 1">
            Tab 1 description.
        </Tab>
        <Tab id="tab-2" title="Tab 2">
            Tab 2 description.
        </Tab>
        <Tab id="tab-3" title="Tab 3">
            Tab 3 description.
        </Tab>
        <Tab id="tab-4" title="Tab 4">
            Tab 4 description.
        </Tab>
        <Tab id="tab-5" title="Tab 5">
            Tab 5 description.
        </Tab>
        <Tab id="tab-6" title="Tab 6">
            Tab 6 description.
        </Tab>
        <Tab id="tab-7" title="Tab 7">
            Tab 7 description.
        </Tab>
        <Tab id="tab-8" title="Tab 8">
            Tab 8 description.
        </Tab>
    </Tabs>
);
