import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Button from "./component/button"

export default function heropage() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.maincontainer}>
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
    container: {
        flex: 1,
        height: '100%',
        width: "100%",
        margin: 0,
        padding: 0,
    },
    maincontainer: {
        height: '100%',
        width: "100%",
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    heroImg: {
        height: 400,
        width: '100%',
        marginTop: '35%'
    },
    txtcontainer: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingTxt: {
        fontSize: 40,
        color: '#414040',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'

    },
    bottomTxt: {
        fontSize: 15,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'

    },
    btn: {
        marginTop: 20,
    }
})