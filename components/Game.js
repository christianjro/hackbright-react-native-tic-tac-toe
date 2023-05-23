import { StyleSheet, ScrollView, View, Text } from "react-native";
import Board from './Board';
import Move from './Move';

export default function Game() {
    return (
        <>
            <View style={styles.boardContainer}>
                <Board />
            </View>
            <ScrollView style={styles.movesContainer} contentContainerStyle={styles.movesContainerContent}>
                <Move />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    boardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    movesContainer: {
        flex: 1,
        padding: 10,
    },
    movesContainerContent: {
        alignItems: 'center',
        justifyContent: 'top',
    },
  });