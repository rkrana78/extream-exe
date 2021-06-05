import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageURL, setImageURL] = useState('');

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                var user = firebase.auth().currentUser;

                user.updateProfile({
                    displayName: name,
                    photoURL: imageURL? imageURL:"https://img.pngio.com/parent-directory-avatar-2png-39689-png-images-pngio-avatarpng-256_256.png"
                }).then(function () {
                    // Update successful.
                }).catch(function (error) {
                    // An error happened.
                });
                // ...
            })
            .catch((error) => {
                
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }
    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter your name"
                label="Name"
                /* leftIcon={{ type: 'material', name:
             'email '}} */
                value={name}
                onChangeText={text => setName(text)}
            />
            <Input
                placeholder="Enter your email"
                label="Email"
                /* leftIcon={{ type: 'material', name:
             'email '}} */
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder="Enter your password"
                label="Password"
                /*leftIcon={{ type: 'material', name:
            'lock '}} */
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Input
                placeholder="Enter your image Url"
                label="Profile Picture"
                /* leftIcon={{ type: 'material', name:
             'email '}} */
                value={imageURL}
                onChangeText={text => setImageURL(text)}
            />

            <Button title="Register" onPress={register} style={styles.button} />
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10
    }, container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
})
