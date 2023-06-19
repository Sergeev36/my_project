import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwither';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { SideBarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

export interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => SideBarItemsList.map((item) => (
        <SidebarItem key={item.patch} item={item} collapsed={collapsed} />
    )), [collapsed]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                theme={ThemeButton.BACKGROUND_INVERTED}
                onClick={onToggle}
                className={styles.collapsedBtn}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                {itemsList}
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.lang} />
            </div>
        </div>
    );
});
