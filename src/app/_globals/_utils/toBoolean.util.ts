export const toBoolean = (value: string | undefined): boolean => {
  const _value = value?.trim().toLowerCase();

  return _value === "true" ? true : false;
};
