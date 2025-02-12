import { View, Text, Image, StyleSheet } from "react-native";
import CityLink from "@/components/CityLink";
import CityInfo from "@/components/CityInfo";

export default function CalgaryScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Calgary</Text>
			{/* source: https://commons.wikimedia.org/wiki/File:Calgary_Skyline_(206561463)_(cropped).jpeg */}
			<Image
				source={{
					uri: "https://upload.wikimedia.org/wikipedia/commons/0/01/Calgary_Skyline_%28206561463%29_%28cropped%29.jpeg",
				}}
				style={styles.image}
			/>
			<CityLink url="https://www.calgary.ca/home.html" />
			<CityInfo city="Calgary" />
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
	image: {
		width: 300,
		height: 200,
		marginVertical: 10,
	},
});
