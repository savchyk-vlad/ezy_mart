import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageService {
  async getItem(key: string) {
    try {
      const storageItem = await AsyncStorage.getItem(key);

      return storageItem && JSON.parse(storageItem);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async setItem<T>(key: string, data: T) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }


  async removeItem(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }

  async clearStorage(excludeKeys?: string[]) {
    try {
      if (excludeKeys?.length) {
        const allKeys = await AsyncStorage.getAllKeys();

        const keysToRemove = allKeys.filter(
          key => !excludeKeys.find(exKey => key === exKey),
        );

        await AsyncStorage.multiRemove(keysToRemove);
        return;
      }
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }
}

const AsyncStorageService = new StorageService();
export default AsyncStorageService;
