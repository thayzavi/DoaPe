import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const FundoWrapper =({ children}) => {
return(
        <ImageBackground
            source={require('../../../assets/fundo.png')}
            style={styles.background}
            resizeMode="cover">

            {children}
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    background:{
        flex:1,
        padding: 6,
    },
});

export default FundoWrapper;