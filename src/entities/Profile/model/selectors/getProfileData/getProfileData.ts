import { StateSchema } from 'app/providers/StoreProvaider';

export const getProfileData = (state: StateSchema) => state.profile?.data;
