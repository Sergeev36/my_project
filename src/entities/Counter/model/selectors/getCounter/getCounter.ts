import { StateSchema } from 'app/providers/StoreProvaider';

export const getCounter = (state: StateSchema) => state.counter;
