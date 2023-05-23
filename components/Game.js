import { StyleSheet, ScrollView, View, Text } from "react-native";
import Board from './Board';

export default function Game() {
    return (
        <>
            <View style={styles.boardContainer}>
                <Board />
            </View>
            <ScrollView style={styles.movesContainer} contentContainerStyle={styles.movesContainerContent}>
                <Text>Moves placeholder</Text>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    boardContainer: {
        flex: 1,
        backgroundColor: '#cccccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    movesContainer: {
        flex: 1,
        backgroundColor: '#dddddd',
        padding: 10,
    },
    movesContainerContent: {
        alignItems: 'center',
        justifyContent: 'top',
        backgroundColor: '#ffffff'
    },
  });