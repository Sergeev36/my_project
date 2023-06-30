import { StateSchema } from 'app/providers/StoreProvaider';

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
