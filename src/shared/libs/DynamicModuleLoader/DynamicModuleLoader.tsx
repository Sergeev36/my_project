import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvaider';
import { StateSchemaKey } from 'app/providers/StoreProvaider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
}

type ReducerListEntry = [StateSchemaKey, Reducer]

export interface DynamicModuleLoaderProps {
  children: ReactNode
  reducers: ReducersList;
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = ({ children, reducers, removeAfterUnmount }: DynamicModuleLoaderProps) => {
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    }, []);

    return (
        <>
            {children}
        </>
    );
};
