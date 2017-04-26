import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Container, Content, Thumbnail, ListItem, CheckBox } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as Progress from 'react-native-progress';

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
  }
})
export class Quests extends Component {

    constructor(props) {
      super(props);
      this.state = {
        xpProgress: 0.5,
        hpProgress: 0.75,
        manaProgress: 0.25,
      };
    }
    render() {
        return (
          <Container>
              <Content>
                <Grid>    
                   <Row size={3}>
                      <Image source={require('../images/backgrounds/latemorning.png')} style={styles.bg} resizeMode="cover">  
                           <Col size={1} style={styles.avatarContainer}>
                              <Image source={require('../images/avatars/default.png')} style={styles.avatar} resizeMode="contain"/>  
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
                   <Row size={4} style={{backgroundColor:'black'}}>    
                      <Image source={require('../images/backgrounds/board.png')} style={styles.bg2} resizeMode="cover">  
                      <Row size={1}>
                        <Text style={styles.questLabels}>  
                          QUESTS  
                        </Text>  
                      </Row>
                      <Row size={5}>
                        
                      </Row>
                      </Image>
                   </Row>    
                </Grid>    
              </Content>
          </Container>
        );
    }
}
module.exports = Quests;