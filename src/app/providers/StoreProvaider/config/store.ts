import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvaider/config/StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { profileReducer } from 'entities/Profile';
import { createReducerManager } from './reducerManager';

export function creatReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        profile: profileReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof creatReduxStore>['dispatch'];
