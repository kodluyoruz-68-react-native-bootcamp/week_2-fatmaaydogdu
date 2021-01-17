import React from 'react';
import {View,TouchableOpacity,Text, StyleSheet} from 'react-native';

function TodoItem({onToggle,task,deleteTask })  {
    return(
        <TouchableOpacity testID = "button"
        style={styles[task.isDone ? 'inclick' : 'click']}
        onPress={onToggle(task.id)}
        onLongPress={deleteTask(task.id)}>

            <Text style={styles[task.isDone ? 'throughText' : 'text']}>{task.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    inclink:{
        backgroundColor:'#e8eaf6',
        margin:5,
        padding:10,
        borderRadius:10,
    },

    clink:{
        margin:5,
        padding:10,
        borderRadius:10
    },

    throughText:{
        backgroundColor:'#ede7f6',
        margin:5,
        padding:5,
        borderRadius:10,
        textAlign:'center',
        fontWeight:'bold',
    },

    text:{
        backgroundColor:'#b39ddb',
        margin:5,
        padding:10,
        borderRadius:10,
        textAlign:'center',
        fontWeight:'bold',
    }
});

export {TodoItem};