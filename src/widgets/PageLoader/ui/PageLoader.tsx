import { classNames } from 'shared/libs/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';

export interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(styles.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
