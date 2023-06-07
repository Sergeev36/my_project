import { classNames } from 'shared/libs/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

export interface LoginModalProps {
  className?: string
  isOpen?: boolean;
  onClose?: ()=>void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])}>
        <LoginForm />
    </Modal>
);
