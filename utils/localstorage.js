import { AsyncStorage } from "react-native";

export const saveData = (key, data) => {
  if (typeof key !== "string") {
    return false;
  }
  if (!data) {
    return false;
  }

  AsyncStorage.setItem(key, JSON.stringify(data));
  return true;
};

export const loadData = async key => {
  try {
    if (typeof key !== "string") {
      return false;
    }

    let item = await AsyncStorage.getItem(key);
    let parsedItem = JSON.parse(item);
    return parsedItem;
  } catch (error) {
    console.log(error);
    return false;
  }
};
