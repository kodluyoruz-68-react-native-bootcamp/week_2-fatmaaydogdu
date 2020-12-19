import React, {useState} from 'react';
import {SafeAreaView, View, Text,StyleSheet, FlatList} from 'react-native';
import TodoPanel from './components/TodoPanel';
import TodoItem from './components/TodoItem';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function ToDo() {

  const [todolist, settodoList] = useState([]);
  const [counter,setCounter] = useState(0);

  const addTodo = (text) => {
    text !== '' && settodoList([...todolist,
        {id: Math.random().toString(), 
        text: text, isDone: false}])

        setCounter(counter +1);
  };

  const onToggle = (id) => (e) => {
    settodoList (
      todolist.map((task) => task.id === id ? {...task, isDone: !task.isDone}: task)
    )
  };

  const onCheckButtonClickHandler = (id) => (e) => {
    settodoList((todolist)=> {
      return(todolist.filter((task) => task.id !== id))
    });
    setCounter(counter - 1);
  };

  const renderlist = ({item}) => ( <TodoItem task ={item} deleteTask={onCheckButtonClickHandler} onToggle={onToggle}/>)
    
   return (

    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.title} >TODO</Text>
        <Text style={styles.counter}>{counter}</Text>
      </View>

      <View style={styles.textContainer}>
      <FlatList 
      testID="list" 
      data={todolist}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={renderlist}
      />

      <TodoPanel counter={counter} addTodo={addTodo}/>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#d1d9ff',
  },

  title:{
    fontSize:40,
    fontWeight:"bold",
    color:'black',
  },

  counter:{
    fontSize:40,
    marginLeft:10,
    padding: 10,
    margin: 5,
    borderRadius: 15,
    alignItems: 'flex-start',
    textAlign:'center',
  },

  textContainer:{
    margin:15,
    justifyContent:'space-between'
  }
})
export default ToDo;