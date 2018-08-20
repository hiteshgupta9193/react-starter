export const apiTypeCreator = type => ({
  [type]: {
    FETCH: `${type}_FETCH`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`,
    RESET: `${type}_RESET`
  }
});

export const actionCreator = type => payload => ({
  type,
  payload
});
