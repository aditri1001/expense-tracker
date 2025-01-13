import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import TextInput from './component/text-input'
import LoginButton from './component/button'

export default function loginpage() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Hey,</Text>
                <Text style={styles.header}>Welcome Back</Text>
            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.loginHeading}>Login now to track all your expenses</Text>
                <TextInput />
                <Text style={styles.forgotTxt}>Forgot Password?</Text>
            </View>
            <View style={styles.loginBtn}>
                <LoginButton />
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.bottomContainerHeading}>Don't have an account</Text>
                <Pressable onPress={() => { }}>
                    <Text style={styles.bottomContainerButton}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomContainer: {},
    bottomContainerHeading: {},
    bottomContainerButton: {},
    forgotTxt: {},
    headerContainer: {
        flex: 1,
        height: '100%',
        width: "100%",
        margin: 10,
        padding: 10,
    },
    header: {
        fontSize: 35,
        
    },
    loginContainer: {},
    loginHeading: {},
    loginBtn: {},
    mainContainer: {
        flex: 1,
        height: '100%',
        width: "100%",
        margin: 0,
        padding: 0,
    },
})