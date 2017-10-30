//.. todo el codigo para correr en android va aqui 

//importar una libreria 
import React from 'react'
import {Text, AppRegistry, View} from 'react-native'
import Header from './src/components/header'
import AlbumList from './src/components/albumList'
//crear un componente 
const App = () =>(
    <View>
        <Header headerText = {'Album!'} />       
        <AlbumList/>
    </View>
    )

//render
AppRegistry.registerComponent('album',()=>App)