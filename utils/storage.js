import { AsyncStorage } from "react-native";
import { ascii } from '../data';

const STORAGE_KEY = "ASKI_ANALYTICS";

export const save = async obj => {
  try {
    const data = await load();
    data[obj.title] ? (data[obj.title].count += 1) : (data[obj.title] = {count: 1, ascii: obj.ascii});
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save name.");
  }
};

export const load = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (!data) {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({}));
      return {};
    }
    return JSON.parse(data);
  } catch (e) {
    console.error("Failed to load name.");
  }
};