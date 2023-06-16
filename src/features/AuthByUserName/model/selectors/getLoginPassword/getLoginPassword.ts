import { StateSchema } from 'app/providers/StoreProvaider';

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
