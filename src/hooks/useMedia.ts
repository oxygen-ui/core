import { useMemo } from 'react';
import useEvent from './useEvent';

const useMediaQuery = (query: string): boolean => {
    const getMatches = (mediaQueryList: MediaQueryList) => mediaQueryList.matches;
    const mediaQueryList = useMemo(() => window.matchMedia(query), [query]);

    return useEvent({
        name: 'change',
        element: mediaQueryList,
        getValue: getMatches,
        initialState: getMatches(mediaQueryList),
    });
};

export default useMediaQuery;
