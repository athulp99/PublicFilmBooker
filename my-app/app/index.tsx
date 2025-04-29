import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ marginBottom: 20 }}>Edit app/index.tsx to edit this screen.</Text>
      <Button title="Go to Profile" onPress={() => router.push("/profile")} />
      <Button title="Go to What's On" onPress={() => router.push("/whatsOn")} />
    </View>
  );
}
