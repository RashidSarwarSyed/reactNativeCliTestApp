import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableHighlight } from 'react-native';

const GoalList = (props) => {

  const renderListItem = ({ item }) => {
    //console.log({item});
    return (  
      <View style={{flexDirection: 'row'}}>
        <View style={styles.addedGoalsTextList}>
          <Text
            onPress={props.getListViewItem.bind(this, item)}>
            {item.text}
          </Text>
        </View>
        <View>
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress = {()=>props.removeGoal(item)}
            >
            <Image
              style={styles.removeIcon} 
              source={require('../assets/images/trash.png')}
               
            />
          </TouchableHighlight>
        </View>
      </View>   
    )
  }


  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  };

  return (

    <View style={styles.addedGoalsText}>
      <FlatList
        data={props.goalList}
        renderItem={renderListItem}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  addedGoalsText : {
    // flex : 1,
    backgroundColor:'red', 
    justifyContent : 'flex-start',
    width: '100%',
   // height: 40,
    margin : 20,
    textAlign : 'center',
    padding : 10,
    alignContent : 'flex-start',
    width: '90%'
  },
  addedGoalsTextList : {
    // flex : 1,
    backgroundColor:'yellow',  
    //width: '80%',
    flex: 4,
    height: 40,
    marginRight : 5,
     
    padding : 10,
    alignContent : 'flex-start',
   ///width: '90%',
    justifyContent : 'flex-start'
  },
  removeIcon : {
    width: 30,
    height : 30,
    //width: '20%'
    flex: 1
  }
});

export default GoalList;