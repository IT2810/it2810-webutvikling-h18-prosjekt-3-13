import { AsyncStorage } from "react-native";

export default function saveData(key, data) {
  try {
    AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    alert("Error occured while saving");
  }
}

export const loadData = async key => {
  let parsedItem;
  try {
    let item = await AsyncStorage.getItem(key);
    parsedItem = JSON.parse(item);
  } catch (error) {
    return false;
  }
  return parsedItem;
};
