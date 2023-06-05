import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvaider/config/StateSchema';
import { counterReducer } from 'entities/Counter';

export function creatReduxStore(initialState: StateSchema) {
    return configureStore({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
