import { StateSchema } from 'app/providers/StoreProvaider';

export const getProfileError = (state: StateSchema) => state.profile?.error;
