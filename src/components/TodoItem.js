import React from 'react';
import {SafeAreaView,View,TouchableOpacity,Text, StyleSheet,textDecorationLine} from 'react-native';

function TodoItem({onToggle,task,deleteTask })  {
    return(
        <TouchableOpacity testID = "button"
        style={styles[task.isDone ? 'inOpacity' : 'opacity']}
        onPress={onToggle(task.id)}
        onLongPress={deleteTask(task.id)}>

            <Text style={styles[task.isDone ? 'throughText' : 'text']}>{task.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    inOpacity:{
        backgroundColor:'#e8eaf6',
        margin:5,
        padding:10,
        borderRadius:10,
    },

    opacity:{
        margin:5,
        padding:10,
        borderRadius:10
    },

    throughText:{
        backgroundColor:'#ede7f6',
        
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

export default TodoItem;