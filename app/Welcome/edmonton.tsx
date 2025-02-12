import { View, Text, Image, StyleSheet } from "react-native";
import CityLink from "@/components/CityLink";
import CityInfo from "@/components/CityInfo";

export default function EdmontonScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edmonton</Text>
      <Image
        source={{ uri: "https://source.unsplash.com/800x600/?edmonton" }}
        style={styles.image}
      />
      <CityLink url="https://www.edmonton.ca/" />
      <CityInfo city="Edmonton" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: 300,
    height: 200,
    marginVertical: 10,
  },
});
