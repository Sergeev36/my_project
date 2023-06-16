import { StateSchema } from 'app/providers/StoreProvaider';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
