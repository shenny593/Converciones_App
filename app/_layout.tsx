import { Stack } from "expo-router";

import { ContextProvider } from "./Context";

export default function RootLayout() {
  return (
	<ContextProvider>
		<Stack>
			<Stack.Screen name="mainmenu"  />
			<Stack.Screen name="index" options={{headerShown: false}} />
		</Stack>
	</ContextProvider>
  );
}
