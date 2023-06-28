import { StateSchema } from 'app/providers/StoreProvaider';

export const getProfileForm = (state: StateSchema) => state.profile?.form;
