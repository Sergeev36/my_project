import React from 'react';
import { RoutePath } from 'shared/configs/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-page.svg';
import AboutIcon from 'shared/assets/icons/about-page.svg';
import ProfileIcon from 'shared/assets/icons/profile-page.svg';

export interface SidebarItemType {
 patch: string;
 text: string;
 Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SideBarItemsList: SidebarItemType[] = [
    {
        patch: RoutePath.main,
        text: 'Главная',
        Icon: MainIcon,
    },
    {
        patch: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon,
    },
    {
        patch: RoutePath.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
    },
];
