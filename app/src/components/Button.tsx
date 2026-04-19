import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    button: {
        margin: 5,
        backgroundColor: '#00a44b',
        width: 250,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
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
