import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    button: {
        margin: 5,
        backgroundColor: 'blue',
        width: 250,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
    },
});

export function Button({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress()}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
