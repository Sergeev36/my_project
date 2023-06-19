import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvaider';

export const useAppDispatch: () => AppDispatch = useDispatch;
