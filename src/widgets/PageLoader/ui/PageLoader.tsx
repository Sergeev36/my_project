import { classNames } from 'shared/libs/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { memo } from 'react';
import styles from './PageLoader.module.scss';

export interface PageLoaderProps {
  className?: string
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
    <div className={classNames(styles.PageLoader, {}, [className])}>
        <Loader />
    </div>
));
