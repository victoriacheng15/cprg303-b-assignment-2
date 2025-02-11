import { StyleSheet, View, Text } from "react-native";

export default function TabTwoScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>To be continue</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
