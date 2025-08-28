import { Text, View, ImageBackground, StyleSheet, Dimensions, Image} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
background:{
  height: Dimensions.get("window").height, //covers the entire screen
  width: Dimensions.get("window").width //covers the entire screen
},
companyLogo:{
  borderColor: "#000" 
}
})

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>BOOKS</Text>
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <ImageBackground source={require("@/assets/images/background-image.png")} style={styles.background} resizeMode="cover">
        {/*Other Components go here */}
       <View style={styles.companyLogo}>
        <Image source={require("@/assets/images/Logo.png")}></Image>
       </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
    </View>
  );
}
