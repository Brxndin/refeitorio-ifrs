import { Dispatch, SetStateAction } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        margin: 10,
        borderColor: '#909090',
        borderWidth: 2,
        width: '90%',
        height: 'auto',
        padding: 10,
        borderRadius: 15,
    },
});

interface InputChildren {
    name: string,
    placeholder?: string,
    setData: Dispatch<SetStateAction<any>>,
    type: string
}

export function Input({ name, placeholder, setData, type }: InputChildren) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={'#909090'}
            secureTextEntry={type === 'password'}
            onChangeText={(value) => setData((prevState: any) => ({ ...prevState, [name]: value }))}
        />
    );
}
