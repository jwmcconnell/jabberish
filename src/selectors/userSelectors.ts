export const getUserState = (state: any) => state.user;
export const getUserId = (state: any) => getUserState(state).userId;
export const getUserError = (state: any) => getUserState(state).error;
