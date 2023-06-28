import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/libs/classNames/classNames';
import { useMemo } from 'react';
import styles from './Avatar.module.scss';

export interface AvatarProps {
  className?: string
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({
    className, src, size, alt,
}: AvatarProps) => {
    const mods: Mods = {};

    const avatarStyles = useMemo(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            className={classNames(styles.Avatar, mods, [className])}
            style={avatarStyles}
            src={src}
            alt={alt}
        />
    );
};
