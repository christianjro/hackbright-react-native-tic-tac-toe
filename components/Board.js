import {StyleSheet, View, Text} from 'react-native';

function Square() {
    return (
        <View style={styles.squareContainer}>
            <Text style={styles.squareText}>x</Text>
        </View>
    )
}

export default function Board() {
    return (
      <>
        <Text>Status</Text>
        <View style={styles.row}>
          <Square />
          <Square />
          <Square />
        </View>
        <View style={styles.row}>
          <Square />
          <Square />
          <Square />
        </View>
        <View style={styles.row}>
          <Square />
          <Square />
          <Square />
        </View>
      </>
    );
  }

const styles = StyleSheet.create({
    squareContainer: {
        height: 80, 
        width: 80,
        borderColor: '#ccccc',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    squareText: {
        fontSize: 40,
    },
    row: {
        flexDirection: 'row',
    }
})