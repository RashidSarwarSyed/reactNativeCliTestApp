import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const AddGoals = (props) => {
    let [enteredText, setEnteredText] = useState('');

    const inputTextHanlder = val => {
        console.log(val);
        setEnteredText(val);
    }

    return ( 

        <View style={styles.takeGoalInput}>
          <TextInput placeholder="Add Goal" style={styles.goalInput}  onChangeText={inputTextHanlder} > </TextInput>
          <Button title="Add Text" style={styles.goalAddButton} onPress={props.addGoal.bind(this, enteredText)} ></Button>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    takeGoalInput :{
      flexDirection : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'green',    
      padding: 50
    },
    goalInput: {
      flex: 2,
      borderWidth: 2,
      borderColor: 'black',
      margin : 10
    },
    goalAddButton: {
      //flex: 1,
      width: 30
    }
  });

  export default AddGoals;