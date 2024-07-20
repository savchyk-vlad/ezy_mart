export const usePatterns = () => {
  const PATTERNS = {
    EMAIL:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    SPECIAL_CHARS: /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
  };

  return {
    EMAIL: PATTERNS.EMAIL,
    SPECIAL_CHARS: PATTERNS.SPECIAL_CHARS,
  };
};
