import { useEffect } from 'react';

interface Props {
    name: string;
    listener: EventListenerOrEventListenerObject;
    element: EventTarget;
    active: boolean;
}

const useEventListener = ({ name, listener, element = window, active = true }: Props): void => {
    useEffect(() => {
        if (active) {
            element.addEventListener(name, listener);

            return () => {
                element.removeEventListener(name, listener);
            };
        }

        return;
    }, [name, listener, element, active]);
};

export default useEventListener;
