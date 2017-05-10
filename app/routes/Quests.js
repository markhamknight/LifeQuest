import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ListView, TouchableOpacity} from 'react-native';
import { Container, Content, Thumbnail, Button, Badge } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as Progress from 'react-native-progress';
import Init from '../helpers/Initial';
import Tasks from '../helpers/Tasks';
import Quest from '../helpers/Quests';
const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});
const tasks = [
  {
    title: 'Quest 1',
    status: 'ongoing',
    date: '5-3-2017',
  },
  {
    title: 'Quest 2',
    status: 'skipped',
    date: '5-3-2017',
  },
  {
    title: 'Quest 3',
    status: 'completed',
    date: '5-3-2017',
  },
  {
    title: 'Quest 4',
    status: 'skipped',
    date: '5-3-2017',
  },
  {
    title: 'Quest 5',
    status: 'completed',
    date: '5-3-2017',
  }
]
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    flexDirection: 'row',
    width: null,
    height: null,
    padding: 10,
  },
  bg2: {
    flex: 1,
    width: null,
    height: null,
    padding: 30,
    resizeMode: 'stretch',
  },
  bars : {
    marginBottom: 0,
  },
  avatar: {
      width: 100,
      height: 100,
  },
  avatarContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
  },
  currentLvl: {
    fontFamily: 'Pixel-Noir Caps',
    fontSize: 12,
    color: 'black',
    textShadowColor: 'white',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 20,
  },
  playerName: {
    fontFamily: 'Pixel-Noir Caps',
    fontSize: 8,
    color: 'black',
    textShadowColor: 'white',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 20,
  },
  progressBarLabels: {
    fontFamily: 'Pixel-Noir Caps',
    textAlign:'right',
    color: 'black',
    textShadowColor: 'white',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 20,
  },
  questLabels: {
    fontFamily: 'Pixel-Noir Caps',
    color: 'white',
    padding: 7,
    fontSize: 25,
    backgroundColor: rgb(32, 72, 104,1),
    textAlign: 'center',
    borderWidth: 3,
    borderColor: '#6080f8'
  },
  bottomContainer: {
    flex: 1,
    // backgroundColor: '#204868',
    backgroundColor: rgb(32, 72, 104,0.9),
    flexDirection: 'column',
    borderWidth: 5,
    borderColor: '#6080f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quests: {
    flex: 1,
    flexDirection: 'row',
  },
  questTitleContainer: {
    flex: 6,
    marginLeft: 5,
    flexWrap: 'wrap',
  },
  questTitle: {
    color: 'white',
    fontFamily: 'Pixel-Noir Skinny Short',
    fontSize: 11,
  },
  questStatus: {
    color: 'white',
    fontFamily: 'Pixel-Noir Caps',
    fontSize: 7,
    textAlign: 'right',
    flexWrap: 'wrap',
    marginRight: 15,
    marginTop: 5,
  },
  questButtonText: {
    fontFamily: 'Pixel-Noir Skinny Caps',
    fontSize: 7,
    color: 'black',
    padding: 5,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#FFFFFF',
    opacity: 1,
  },
  rowContainer:{
    flex:1,
    flexDirection:'row',
    padding:10,
    justifyContent:'center',
    alignItems:'center',
  }

})
export class Quests extends Component {

    constructor(props) {
      super(props);
      this.state = {
        xpProgress: 0.5,
        hpProgress: 0.75,
        manaProgress: 0.25,
        buttonPressed: [true,false,true,false,false],
        dataSource: ds.cloneWithRows(Quest.getQuestsForToday()),
      };
      this.undoQuest = this.undoQuest.bind(this);
      this.completeQuest = this.completeQuest.bind(this);
      this.skipQuest = this.skipQuest.bind(this);
      this.renderButtons = this.renderButtons.bind(this);
      Init.initializeTasks();
      Init.initializeUser();
      //Tasks.generateTasks();
    }
    undoQuest(id,qid){
      var copy = this.state.buttonPressed;
      copy[id] = !copy[id];
      let data = {
        id: qid,
        status: 'ongoing',
      };
      Quest.updateQuest(data);
      this.setState({
        buttonPressed: copy,
        dataSource: ds.cloneWithRows(Quest.getQuestsForToday()),
        xpProgress: this.state.xpProgress-0.1,
      })
    };
    completeQuest(id,qid){
      var copy = this.state.buttonPressed;
      copy[id] = !copy[id];
      let data = {
        id: qid,
        status: 'completed',
      };
      Quest.updateQuest(data);
      this.setState({
        buttonPressed: copy,
        dataSource: ds.cloneWithRows(Quest.getQuestsForToday()),
        xpProgress: this.state.xpProgress+0.1,
      })
    };
    skipQuest(id,qid){
      var copy = this.state.buttonPressed;
      copy[id] = !copy[id];
      let data = {
        id: qid,
        status: 'skipped',
      };
      Quest.updateQuest(data);
      this.setState({
        buttonPressed: copy,
        dataSource: ds.cloneWithRows(Quest.getQuestsForToday()),
        xpProgress: this.state.xpProgress+0.1,
        manaProgress: this.state.manaProgress-0.1,
      })
    };
    renderButtons(rowID,questID) {
      var id = rowID;
      var qid = questID;
      if(this.state.buttonPressed[id]) {
        return (
          <View>
              <TouchableOpacity onPress={()=>this.undoQuest(id,qid)}>
                  <Text style={[styles.questButtonText,{backgroundColor:'#F0AD4F'}]}>
                     undo
                     <Icon name='undo' /> 
                  </Text>
               </TouchableOpacity>
            </View>    
          );
      } else {
        return (
            <View style={{flexDirection: 'row'}}>
              <View>    
                <TouchableOpacity onPress={()=>this.completeQuest(id,qid)}>
                  <Text style={[styles.questButtonText,{backgroundColor:'#5CB75C'}]}>
                     done
                     <Icon name='check' /> 
                  </Text>
                </TouchableOpacity>
              </View>  
              <View>    
                <TouchableOpacity onPress={()=>this.skipQuest(id,qid)}>
                  <Text style={[styles.questButtonText,{backgroundColor:'#D9534F'}]}>
                     skip
                     <Icon name='remove' /> 
                  </Text>
                </TouchableOpacity>  
              </View>   
            </View>
          ); 
      }
    };

    renderRow(rowData, sectionID, rowID, highlightRow){
      let id = rowID;
      let content = this.renderButtons(rowID,rowData.id);
      return (
          <View style={{flexDirection:'column',flex:1}}>
            <Text style={[styles.questStatus, rowData.status == 'completed' ? {color: '#5CB75C'} : rowData.status == 'skipped' ? {color:'#D9534F'} : {}]}>
              {rowData.status} 
            </Text>
            <View style={styles.rowContainer}>  
              <View style={styles.questTitleContainer}>  
                <Text style={[styles.questTitle, this.state.buttonPressed[id] ? {   textDecorationLine: 'line-through'}:{}]}>        
                  {rowData.name}    
                </Text>      
              </View>  
              {content}   
            </View>  
          </View>
      );
    };
    renderSeparator(sectionId, rowId) {
      return (
        <View key={rowId} style={styles.separator} />
      )
    }

    render() {
        return (
          <Container>
              <Content>
                <Grid>    
                   <Row size={1}>
                      <Image source={require('../assets/images/backgrounds/lateafternoon.png')} style={styles.bg} resizeMode="cover">  
                           <Col size={1} style={styles.avatarContainer}>
                              <Image source={require('../assets/images/avatars/avatar1.jpg')} style={styles.avatar} resizeMode="contain"/>  
                              <Text style={styles.playerName}>
                                Markhamknight
                              </Text>
                              <Text style={styles.currentLvl}>
                                Level 1
                              </Text>
                            </Col>      
                            <Col size={2}>      
                               <Row>  
                                 <View>  
                                   <Text style={styles.progressBarLabels}>  
                                     HP  
                                   </Text>  
                                   <Progress.Bar progress={this.state.hpProgress} width={225} color="red" borderRadius={0} height={10} borderWidth={1} style={styles.bars}/>  
                                 </View>  
                               </Row>  
                               <Row>  
                                   <View>  
                                      <Text style={styles.progressBarLabels}>  
                                       Mana    
                                     </Text>    
                                    <Progress.Bar progress={this.state.manaProgress} width={225} color="blue" borderRadius={0} height={10} borderWidth={1} style={styles.bars}/>    
                                   </View>  
                               </Row>  
                               <Row>  
                                 <View>  
                                      <Text style={styles.progressBarLabels}>  
                                       XP  
                                     </Text>  
                                     <Progress.Bar progress={this.state.xpProgress} width={225} color="yellow" borderRadius={0} height={10} borderWidth={1} style={styles.bars}/>  
                                 </View>  
                               </Row>  
                            </Col>  
                      </Image>   
                    </Row>
                     <Row size={3} style={{flexDirection:'column'}}>
                        <Text style={styles.questLabels}>
                          Quests:
                        </Text>
                        <View style={styles.bottomContainer}>
                          <View style={styles.quests} >
                            <ListView  
                                dataSource={this.state.dataSource}  
                                renderRow={this.renderRow.bind(this)}  
                                renderSeparator={this.renderSeparator}  
                            />
                          </View>
                        </View>
                     </Row>    
                </Grid>    
              </Content>
          </Container>
        );
    }
}
module.exports = Quests;