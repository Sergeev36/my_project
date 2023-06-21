import { StateSchema } from 'app/providers/StoreProvaider';

export const getProfileLoading = (state: StateSchema) => state.profile?.isLoading || false;
