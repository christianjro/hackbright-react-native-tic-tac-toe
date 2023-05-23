import { StyleSheet, View, Text, Button } from "react-native";

export default function Move() {
  return (
    <View style={styles.moveContainer}>
      <Text style={styles.moveText}>0.</Text>
      <Button title="Go to game start" />
    </View>
  );
}

const styles = StyleSheet.create({
    moveContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    moveText: {
        marginRight: 15,
    }
})