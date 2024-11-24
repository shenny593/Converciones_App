import { Stack } from "expo-router";

import { MyContextProvider } from "./Context";

export default function RootLayout() {
  return (
	<MyContextProvider>
		<Stack>	
			<Stack.Screen name="index" options={{headerShown: false}} />
			<Stack.Screen name="mainmenu" options={{headerShown: false}}/>
			<Stack.Screen name="credits" options={{headerShown: false}} />
			<Stack.Screen name="pruebafptp" options={{headerShown: false}} />
		</Stack>
	</MyContextProvider>
  );
}
