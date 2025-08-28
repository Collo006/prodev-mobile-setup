import { Text, View, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const styles = StyleSheet.create({
container:{
flex:1
},

background:{
  flex:1,
  justifyContent: "center",
  height: Dimensions.get("window").height, //covers the entire screen
  width: Dimensions.get("window").width //covers the entire screen
},

companyLogo:{
  width: "100%",
  alignItems:"center",
  padding:20,
  marginBottom:50
},

textGroup:{
  alignItems: "center"
},
textLarge:{
  color: "white",
  fontSize: 40,
  fontWeight:"200",
  textAlign:"center",
  marginBottom: 12
  
},

textSmall:{
color:"white",
fontSize: 18,
fontWeight: "200",
textAlign: "center"

},

transparentButton:{
borderColor: "white",
borderWidth: 2,
borderRadius: 40,
paddingVertical: 15,
paddingHorizontal: 5,
alignItems: "center",
fontSize: 20,
flex:1,
},

button:{
borderColor: "white",
borderWidth: 2,
borderRadius: 40,
paddingVertical: 15,
paddingHorizontal: 5,
alignItems: "center",
fontSize: 20,
backgroundColor: "white",
flex: 1,
},

buttonGroup:{
 flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
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
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <ImageBackground source={require("@/assets/images/background-image.png")} style={styles.background} resizeMode="cover">
        {/*Other Components go here */}
       <View style={styles.companyLogo}>
        <Image source={require("@/assets/images/Logo.png")} style={{height:100 ,width:100}}></Image>
       </View>
       <View style={styles.textGroup}>
        <Text style={styles.textLarge}>Find your favorite place here</Text>
        <Text style={styles.textSmall}>The best prices for over 2 </Text>
        <Text style={styles.textSmall}>million properties worldwide</Text>
       </View>
       <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <Text style={{...styles.textSmall,color:"black"}}>Join here</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transparentButton}>
          <Text style={styles.textSmall}>Sign In</Text>
        </TouchableOpacity>
       </View>
       <View style={{alignItems:"center", paddingVertical:20}}>
        <Text style={{color:"white"}}>Continue to home</Text>
       </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
    </View>
  );
}
