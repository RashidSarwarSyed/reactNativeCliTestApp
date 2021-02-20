
import React, {useState} from 'react';
import { StyleSheet, View, Button, Modal, Alert, TouchableHighlight, Text } from 'react-native';

import AddGoals from './component/AddGoals';  
import GoalsList from './component/GoalsList'; 
 
export default function App() {
 
  const [goalList, setGoalList] = useState([]);

  const [showAddGoal, setShowAddGoal] = useState(false);

  let  idxGoals = 1; 
 
  const setTheGoal = text => {
    idxGoals =  Math.floor(Math.random() * Math.floor(Math.random() * Date.now())); 
    console.log("Pressed the Add button with input Text: " + text );
  
    setGoalList ([...goalList, {key: ''+idxGoals++, text}])

    setShowAddGoal(!showAddGoal);
  }

  const removeGoal = itemToDel => {
    
    console.log("removing goal> "  + itemToDel); 

    let ar = goalList.filter(itm => itm.key != itemToDel.key);

    setGoalList (ar);
  }

  const getListViewItem = (item) => {
    console.log(item);
  }


  return (
    <View style={styles.container}>
       
      <TouchableHighlight
        style={styles.showAddGoalButton}
        onPress={()=>setShowAddGoal(!showAddGoal)}
        underlayColor='#fff'>
          <Text style={styles.submitText}>"Add Goals</Text>
      </TouchableHighlight>  
      <Modal 
        style={{flex:1, alignContent:'center', justifyContent:'center'}}
        animationType="slide"
        //transparent={true}
        visible={showAddGoal}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setShowAddGoal(!showAddGoal);
        }}
      >
        <AddGoals style={styles.addGoalStyle} addGoal={setTheGoal} />  
      </Modal>
      <View style={styles.addedGoalsText} > 
        <GoalsList  goalList={goalList} getListViewItem={getListViewItem} removeGoal={removeGoal}/>
      </View>
    </View>
  );
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign : 'center',
    padding : 10
  },
  addedGoalsText : {
    // flex : 1,
    backgroundColor:'red', 
    justifyContent : 'center',
    width: '100%',
   // height: 40,
    margin : 20,
    textAlign : 'center',
    padding : 10,
    alignContent : 'center',
    width: '90%',
    justifyContent : 'center',
    flex : 1
  },
  addGoalStyle: {
      flex: 1,
      backgroundColor : 'green'
  },
  showaddGoal: {
    //flex : 1,
    //height : 50,
    marginTop : 50,
    width: '50%',
    backgroundColor : 'orange'
  },
  showAddGoalButton : {
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    //paddingTop:20,
    //paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:20,
    //borderWidth: 1,
    //borderColor: '#fff',
    width : 200,
    height: 50,
    justifyContent : 'center',
  },
  submitText:{
    //flex: 1,
    color:'#fff',
    textAlign:'center',
    

  } 
});
