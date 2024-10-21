import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
		<Stack.Screen name="mainmenu"  />
      <Stack.Screen name="index" options={{headerShown: false}} />
	  
    </Stack>
  );
}
