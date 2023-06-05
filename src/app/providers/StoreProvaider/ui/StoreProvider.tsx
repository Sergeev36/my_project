import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { StateSchema } from 'app/providers/StoreProvaider/config/StateSchema';
import { creatReduxStore } from '../config/store';

export interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const store = creatReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
