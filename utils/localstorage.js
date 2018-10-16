import { AsyncStorage } from "react-native";

export default function saveData(key, data) {
  try {
    AsyncStorage.setItem(key, JSON.stringify(data));
    console.log("SUCCESS: saved data on key " + key);
  } catch (error) {
    console.log("Error occured while saving on " + key);
    console.log(error);
  }
}

export const loadData = async key => {
  let parsedItem;
  try {
    let item = await AsyncStorage.getItem(key);
    parsedItem = JSON.parse(item);
  } catch (error) {
    console.log("Error occured while loading from " + key);
    console.log(error);
  }
  return parsedItem;
};
