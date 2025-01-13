import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Button from "./component/button"

export default function heropage() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.maincontainer}>
                    <View style={styles.textContainer}>
                        <Pressable onPress={() => { }}>
                            <Text style={styles.loginBtn}>login</Text>
                        </Pressable>
                    </View>
                    <Image source={require('./assets/heropageImg.png')} style={styles.heroImg} />
                    <View style={styles.txtcontainer}>
                        <Text style={styles.headingTxt}>Always Take Control of Your Finances</Text>
                        <Text style={styles.bottomTxt}>Finances must be arranged to set a better lifestyle in future</Text>
                        <View style={styles.btn}>
                            <Button />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bottomTxt: {
        fontSize: 15,
        color: '#727D73',
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'

    },
    btn: {
        marginTop: 20,
    },
    container: {
        flex: 1,
        height: '100%',
        width: "100%",
        margin: 0,
        padding: 0,
    },
    heroImg: {
        height: 400,
        width: '100%',
        marginTop: '25%'
    },
    headingTxt: {
        fontSize: 40,
        color: '#343131',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    loginBtn: {
        textAlign: "right",
        marginRight: 15,
        marginTop: 10,
        fontSize: 25,
        fontFamily: "Poppins-Medium"
    },
    maincontainer: {
        height: '100%',
        width: "100%",
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        width: "100%",
    },
    txtcontainer: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})