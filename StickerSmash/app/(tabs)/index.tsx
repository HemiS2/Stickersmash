import { View, StyleSheet } from "react-native";
import { Image } from 'expo-image'

const PlaceholserImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image source={PlaceholserImage} style={styles.image} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",    
  },
  imageContainer: {
    flex: 1,

  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },

});
