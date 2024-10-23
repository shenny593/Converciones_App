import {View, Text, Image, StyleSheet} from "react-native";
import { useContext } from 'react'
import { Context } from "./Context";
import { router } from "expo-router";


export default function Index()
{
	const {loginData, setLoginData}=useContext(Context);
	//console.log(context);

	const logout=()=>
	{
		
		
	}

	return (
		<View style={styles.container}>
			<Text>Welcome back {loginData.username}</Text>
			<Image style={styles.pfp_image} source={{uri:loginData.pfp_url}} ></Image>
			<Text>Clave de usuario</Text>
			<Text>{loginData.id}</Text>
			<Text>Creditos</Text>
			<Text>{loginData.credits}</Text>
			<Text>XP</Text>
			<Text>{loginData.xp}</Text>
			
		</View>
	)
}

const styles=StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	pfp_image:{
		width:260,
		height:260,
		borderRadius:5
	}
});