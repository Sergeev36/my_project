import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/libs/classNames/classNames';
import { SidebarItemType } from '../../model/items';
import styles from './SidebarItem.module.scss';

export interface SidebarItemProps {
  item?: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.patch}
            className={classNames(styles.item, { [styles.collapsed]: collapsed })}

        >
            <item.Icon className={styles.icon} />
            <span className={styles.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
};
