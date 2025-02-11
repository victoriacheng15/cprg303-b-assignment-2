import { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import creds from "@/credentials.json";

export default function Signin() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [usernameError, setUsernameError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	function validateUsername(username: string) {
		return username.length >= 5;
	}

	function validatePassword(password: string) {
		const passwordRegex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		return passwordRegex.test(password);
	}

	function handleSignIn() {
		// Reset errors
		setUsernameError("");
		setPasswordError("");

		// Validate username
		if (!validateUsername(username)) {
			setUsernameError("Username must be at least 5 characters long.");
			return;
		}

		// Validate password
		if (!validatePassword(password)) {
			setPasswordError(
				"Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
			);
			return;
		}

		// Check credentials against credentials.json
		const user = creds.users.find(
			(user) => user.username === username && user.password === password,
		);

		if (!user) {
			setPasswordError("Invalid username or password.");
			return;
		}

		// Proceed with sign-in logic (e.g., navigate to another screen)
		console.log("Sign-in successful!");
	}

	return (
		<>
			<View style={styles.stepContainer}>
				<Text style={styles.subtitle}>Sign In</Text>
				<TextInput
					style={styles.input}
					placeholder="Username"
					value={username}
					onChangeText={setUsername}
				/>
				{usernameError ? (
					<Text style={styles.errorText}>{usernameError}</Text>
				) : null}
				<TextInput
					style={styles.input}
					placeholder="Password"
					value={password}
					onChangeText={setPassword}
					secureTextEntry
				/>
				{passwordError ? (
					<Text style={styles.errorText}>{passwordError}</Text>
				) : null}
				<TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
					<Text style={styles.signInButtonText}>Sign In</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
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
	errorText: {
		color: "red",
		marginTop: 5,
		fontSize: 14,
	},
});
