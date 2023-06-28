import { StateSchema } from 'app/providers/StoreProvaider';

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;
