import React, {useState,useEffect} from 'react';
import {SafeAreaView,View,Text,TextInput, TouchableOpacity, Keyboard, StyleSheet} from 'react-native';

function TodoPanel({addTodo,counter}){
    const [text,setText] =useState('');
    const Todo = () => { text && addTodo(text); setText('')};

   return(
        <SafeAreaView>
            <View style={styles.inputContainer}>
                <TextInput testID="input" style={styles.container}
                placeholder="Add to do"
                value={text}
                onChangeText={(value) => setText(value)}
                />

                <TouchableOpacity  
                testID="button" onPress={Todo}>
                    <Text style={styles.button}>Add</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
   )};

    const styles = StyleSheet.create({
        inputContainer:{
            justifyContent:'flex-end',
            backgroundColor:'#eeeeee',
            borderRadius:10,
        },

        button:{
            backgroundColor:'#7986cb',
            margin:5,
            padding:10,
            textAlign:'center',
            fontWeight:'bold',
            borderRadius:10,
            justifyContent:'flex-end',
        }

    })


export {TodoPanel};