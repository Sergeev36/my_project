import { useState } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwither';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

import styles from './Sidebar.module.scss';

export interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}>Sidebar</Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
}
