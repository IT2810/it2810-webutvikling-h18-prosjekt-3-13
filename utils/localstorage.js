import { AsyncStorage } from "react-native";

export default function saveData(key, data) {
  try {
    AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}

export const loadData = async key => {
  let parsedItem;
  try {
    let item = await AsyncStorage.getItem(key);
    parsedItem = JSON.parse(item);
  } catch (error) {
    console.log(error);
  }
  return parsedItem;
};
