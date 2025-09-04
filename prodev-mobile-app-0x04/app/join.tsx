import { styles } from "@/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";



export default function Join(){
      return (
          <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.container}>
                 <MaterialIcons name="arrow-back" size={25}/> 
                      
                </View>
            </SafeAreaView>
          </SafeAreaProvider>
      );
}