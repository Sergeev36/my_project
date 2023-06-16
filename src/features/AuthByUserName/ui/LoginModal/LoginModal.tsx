import { Suspense } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

export interface LoginModalProps {
  className?: string
  isOpen?: boolean;
  onClose?: ()=>void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        lazy
        isOpen={isOpen}
        onClose={onClose}
        className={classNames('', {}, [className])}
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync />
        </Suspense>

    </Modal>
);
