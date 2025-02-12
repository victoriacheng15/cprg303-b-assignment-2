import { View, Text, StyleSheet } from "react-native";

export default function CityInfo({ city }: { city: string }) {
  const facts =
    city === "Calgary"
      ? "Calgary is known for the Calgary Stampede, which is one of the largest festivals in the world."
      : "Edmonton is known for the West Edmonton Mall, the largest shopping mall in North America.";

  return (
    <View style={styles.container}>
      <Text style={styles.info}>{facts}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
  },
  info: {
    fontSize: 16,
    textAlign: "center",
  },
});

