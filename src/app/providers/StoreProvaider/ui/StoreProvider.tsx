import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { StateSchema } from 'app/providers/StoreProvaider/config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { creatReduxStore } from '../config/store';

export interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: ReducersList;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
    const navigate = useNavigate();

    const store = creatReduxStore(
      initialState as StateSchema,
      asyncReducers as ReducersMapObject<StateSchema>,
      navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
