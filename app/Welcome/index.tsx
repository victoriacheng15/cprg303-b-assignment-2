import { View, Text, StyleSheet } from "react-native";

export default function WelcomeScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to My New App</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		marginTop: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
});
