import './Loader.scss';
import { classNames } from 'shared/libs/classNames/classNames';

export interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-ripple', {}, [className])}>
        <div />
        <div />
    </div>
);
