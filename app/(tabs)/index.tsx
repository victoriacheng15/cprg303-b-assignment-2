import { StyleSheet, View, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import Signin from "@/components/Signin";

export default function HomeScreen() {
	return (
		<>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>
					<HelloWave />
					Welcome!
					<HelloWave />
				</Text>
			</View>
			<Signin />
		</>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		padding: 20,
		marginTop: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	stepContainer: {
		marginTop: 20,
		marginHorizontal: 20,
	},
	subtitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		marginTop: 10,
		paddingHorizontal: 10,
		borderRadius: 5,
	},
	signInButton: {
		marginTop: 20,
		padding: 10,
		backgroundColor: "#A1CEDC",
		borderRadius: 5,
		alignItems: "center",
	},
	signInButtonText: {
		fontWeight: "bold",
		color: "#fff",
	},
});
