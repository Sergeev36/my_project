import { StateSchema } from 'app/providers/StoreProvaider';

export const getLoginLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
