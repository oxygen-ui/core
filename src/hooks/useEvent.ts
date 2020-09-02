import { useCallback, useState } from 'react';

import useEventListener from './useEventListener';

interface Props<TEvent, TValue> {
    name: string;
    getValue: (event: TEvent) => TValue;
    initialState: TValue;
    element: EventTarget;
    active?: boolean;
}

const useEvent = <TEvent, TValue>({
    name,
    getValue,
    initialState,
    element = window,
    active = true,
}: Props<TEvent, TValue>): TValue => {
    const [value, setValue] = useState(initialState);

    const listener = useCallback(
        (event) => {
            setValue(getValue(event));
        },
        [getValue]
    );

    useEventListener({
        name,
        listener,
        element,
        active,
    });

    return value;
};

export default useEvent;
