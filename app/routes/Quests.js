import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ListView} from 'react-native';
import { Container, Content, Thumbnail, Button } from 'native-base';
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
  },
  playerName: {
    fontFamily: 'Pixel-Noir Caps',
    fontSize: 8,
  },
  progressBarLabels: {
    fontFamily: 'Pixel-Noir Caps',
  },
  questLabels: {
    fontFamily: 'Pixel-Noir Caps',
    color: 'white',
    padding: 10,
    fontSize: 25,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    borderWidth: 5,
    borderColor: 'blue',
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
    textDecorationLine: 'line-through',
  },
  questDone: {
    flex: 1,
  },
  questSkip: {
    flex: 1,
  },
  questDoneText: {
    fontFamily: 'Pixel-Noir',
    fontSize: 6,
    padding: 0,
    margin: 0,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#FFFFFF',
    opacity: 0.7,
  },

})
export class Quests extends Component {

    constructor(props) {
      super(props);
      this.state = {
        xpProgress: 0.5,
        hpProgress: 0.75,
        manaProgress: 0.25,
        buttonPressed: [false,false,false,false,false],
        dataSource: ds.cloneWithRows(tasks),
      };
      this.test = this.test.bind(this);
    }
    test(id){
      var copy = this.state.buttonPressed;
      copy[id] = !copy[id];
      this.setState({
        buttonPressed: copy,
      })
      console.warn(this.state.buttonPressed);
    };
    renderRow(data,rowID){
      return (
          <View style={{flex:1,flexDirection:'row',padding:10,justifyContent:'center',alignItems:'center'}}>
            <View style={{flex:6}}>  
              <Text style={styles.questTitle}>      
                {data.title}  
              </Text>    
            </View>  
            <View style={{marginRight:5}}>
                <Button small success iconLeft>  
                  <Icon name='check' />  
                  <Text style={styles.questDoneText}>      
                    Done        
                  </Text>
                </Button>  
            </View>     
            <View>  
              <Button small danger iconLeft style={styles.questButtons}>      
                <Icon name='remove' />  
                <Text style={styles.questDoneText}>      
                  Skip        
                </Text>      
              </Button>    
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
                      <Image source={require('../assets/images/backgrounds/latemorning.png')} style={styles.bg} resizeMode="cover">  
                           <Col size={1} style={styles.avatarContainer}>
                              <Image source={require('../assets/images/avatars/default.png')} style={styles.avatar} resizeMode="contain"/>  
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
                          <View style={{flexDirection:'row',padding:10,flex:1}} >
                            <ListView  
                                dataSource={this.state.dataSource}  
                                renderRow={this.renderRow}  
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