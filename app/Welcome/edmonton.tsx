import { View, Text, Image, StyleSheet } from "react-native";
import CityLink from "@/components/CityLink";
import CityInfo from "@/components/CityInfo";

export default function EdmontonScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Edmonton</Text>
			{/* source: https://commons.wikimedia.org/wiki/File:Edmonton_cityscape.jpg */}
			<Image
				source={{
					uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQ3E6hsWJhHbHgN9F1s0qD9eevrl3Cz10Ig&s",
				}}
				style={styles.image}
			/>
			<CityLink url="https://www.edmonton.ca/" />
			<CityInfo city="Edmonton" />
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
