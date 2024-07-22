import AsyncStorageService from '~services/AsyncStorageService';

export const getItemFromAsyncStorage = async (
  key: string,
  errorMessage: string,
) => {
  let item = '';
  try {
    item = await AsyncStorageService.getItem(key);
  } catch (error) {
    console.log(errorMessage, error);
  }

  return item;
};

