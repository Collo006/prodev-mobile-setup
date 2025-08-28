import { Text, View, StyleSheet, ImageBackground} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <ImageBackground source={require("@/assets/images/background-image.png")}style={styles.background}  resizeMode="cover">
        {/*Other Components go here */}

        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
    </View>
  );
}
