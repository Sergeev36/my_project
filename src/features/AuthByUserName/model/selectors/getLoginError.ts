import { StateSchema } from 'app/providers/StoreProvaider';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
