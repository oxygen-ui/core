import React, {
    forwardRef,
    ComponentPropsWithoutRef,
    useContext,
    ReactElement,
    useState,
} from 'react';
import classNames from 'classnames';

import { ThemeContext } from '../../theme';
import { useStyles } from './Tabs.styles';
import ParseThemeType from '../../utils/ParseThemeType';
import { TabProps } from './Tab';

export interface TabsProps extends ComponentPropsWithoutRef<'div'> {
    initialTab?: string;
    className?: string;
    children: ReactElement<TabProps>[] | ReactElement<TabProps>;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
    ({ className, children, initialTab, ...props }, ref) => {
        const hasMultipleChildren = Array.isArray(children);
        const [selectedTab, setSelectedTab] = useState<string>(
            initialTab || hasMultipleChildren
                ? children[0].props.id
                : (children as ReactElement<TabProps>).props.id
        );

        const { themeType } = useContext(ThemeContext);
        const classes = useStyles({
            themeType: ParseThemeType(themeType),
        });

        return (
            <div ref={ref} className={classNames(classes.tabs, className)} {...props}>
                <div className={classNames(classes.tabHeader)}>
                    {hasMultipleChildren ? (
                        (children as ReactElement<TabProps>[]).map((child) => (
                            <button
                                key={child.props.id}
                                className={classNames(classes.tabButton, {
                                    [classes.tabButtonActive]: child.props.id === selectedTab,
                                })}
                                disabled={child.props.disabled}
                                onClick={() => setSelectedTab(child.props.id)}>
                                {child.props.title}
                            </button>
                        ))
                    ) : (
                        <button
                            className={classNames(classes.tabButton, {
                                [classes.tabButtonActive]:
                                    (children as ReactElement<TabProps>).props.id === selectedTab,
                            })}
                            disabled={(children as ReactElement<TabProps>).props.disabled}
                            onClick={() =>
                                setSelectedTab((children as ReactElement<TabProps>).props.id)
                            }>
                            {(children as ReactElement<TabProps>).props.title}
                        </button>
                    )}
                </div>
                <div className={classNames(classes.tabBody)}>
                    {hasMultipleChildren
                        ? (children as ReactElement<TabProps>[]).map(
                              (child) =>
                                  child.props.id === selectedTab && (
                                      <div key={child.props.id}>{child.props.children}</div>
                                  )
                          )
                        : (children as ReactElement<TabProps>).props.id === selectedTab && (
                              <div>{(children as ReactElement<TabProps>).props.children}</div>
                          )}
                </div>
            </div>
        );
    }
);

Tabs.displayName = 'Tabs';

export default Tabs;
