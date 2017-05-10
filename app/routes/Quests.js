import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ListView} from 'react-native';
import { Container, Content, Thumbnail, Button, Badge } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as Progress from 'react-native-progress';
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
    status: 'ongoing',
    date: '5-3-2017',
  },
  {
    title: 'Quest 3',
    status: 'ongoing',
    date: '5-3-2017',
  },
  {
    title: 'Quest 4',
    status: 'ongoing',
    date: '5-3-2017',
  },
  {
    title: 'Quest 5',
    status: 'ongoing',
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
    fontSize: 7,
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
    padding: 10,
    fontSize: 25,
    textDecorationLine: 'underline',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#204868',
    flexDirection: 'column',
    borderWidth: 5,
    borderColor: '#6080f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quests: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  questTitleContainer: {
    flex: 6,
    marginLeft: 5,
  },
  questTitle: {
    color: 'white',
    fontFamily: 'Pixel-Noir Skinny',
    fontSize: 10,
  },
  questStatus: {
    color: 'white',
    fontFamily: 'Pixel-Noir Skinny',
    fontSize: 8,
    textAlign: 'center',
  },
  questButton: {
    flex: 1,
    marginRight: 5,
  },
  questDoneText: {
    fontFamily: 'Pixel-Noir',
    fontSize: 10,
    padding: 0,
    margin: 0,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#FFFFFF',
    opacity: 0.7,
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
        buttonPressed: [false,false,false,true,false],
        dataSource: ds.cloneWithRows(tasks),
      };
      this.handleButtonPress = this.handleButtonPress.bind(this);
      this.renderButtons = this.renderButtons.bind(this);
    }
    handleButtonPress(id){
      var copy = this.state.buttonPressed;
      copy[id] = !copy[id];
      this.setState({
        buttonPressed: copy,
        dataSource: ds.cloneWithRows(tasks),
      })
    };
    renderButtons(id) {
      var rowID = id;
      if(this.state.buttonPressed[id]) {
        return (
          <View>
                <Button small warning iconRight onPress={()=>this.handleButtonPress(id)}>  
                  <Text style={styles.questDoneText}>
                    Undo        
                  </Text>
                  <Icon name='undo' />  
                </Button>  
            </View>    
          );
      } else {
        return (
            <View style={{flexDirection: 'row'}}>
              <View>    
                <Button small success iconRight onPress={()=>this.handleButtonPress(id)}>      
                  <Text style={styles.questDoneText}>          
                    done            
                  </Text>
                  <Icon name='check' />   
                </Button>
              </View>  
              <View>    
                  <Button small danger iconRight onPress={()=>this.handleButtonPress(id)}>      
                    <Text style={styles.questDoneText}>          
                      skip            
                    </Text>    
                    <Icon name='remove' />      
                  </Button>   
              </View>   
            </View>
          ); 
      }
    };

    renderRow(rowData, sectionID, rowID, highlightRow){
      let id = rowID;
      let content = this.renderButtons(rowID);
      return (
          <View style={{flexDirection:'column',flex:1}}>
            <Text style={styles.questStatus}>
              {rowData.status} 
            </Text>
            <View style={styles.rowContainer}>  
              <View style={styles.questTitleContainer}>  
                <Text style={[styles.questTitle, this.state.buttonPressed[id] ? {   textDecorationLine: 'line-through'}:{}]}>        
                  {rowData.title}    
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
                      <Image source={require('../assets/images/backgrounds/night.png')} style={styles.bg} resizeMode="cover">  
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
                     <Row size={3}>
                        <View style={styles.bottomContainer}>
                          <Text style={styles.questLabels}>
                            Quests:
                          </Text>
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