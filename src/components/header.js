//import libraries for making component
import React from 'react'
import {Text,View} from 'react-native'

//make component
const Header = (props) => {
    const{textStyle, viewStyle } = styles;
    return (
        <View style = {viewStyle}>
            <Text style = {textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles  = {

    viewStyle:{
        backgroundColor: '#F1F1F1',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: {width:0 , height: 20},
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

//make the component availabre to other parts of the app
//significa que el componente puede ser utilizado por otra
//parte de la aplicacion
export default Header;

/**
 * component nesty
 */