import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ListView, TouchableOpacity} from 'react-native';
import { Container, Content, Thumbnail, Button, Badge } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as Progress from 'react-native-progress';
import Quest from '../helpers/Quests';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});
const styles = StyleSheet.create({
   questsLogsContainer: {
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
      borderColor: '#6080f8',
      backgroundColor: rgb(32, 72, 104,0.9),
      flexDirection: 'row',
      flex: 1,
   },
   bottomContainer: {
    backgroundColor: rgb(32, 72, 104,0.9),
    flexDirection: 'column',
    borderWidth: 5,
    borderColor: '#6080f8',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 10,
  },
   questLogsLabel: {
      fontFamily: 'Pixel-Noir Caps',
      fontSize: 25,
      color: 'white',
      textAlign: 'center',

   },
   questButton: {
      padding: 20,
   },
   questButtonText: {
      fontFamily: 'Pixel-Noir Skinny Caps',
      fontSize: 6,
      color: 'black'
   },

   gridContent:{
    justifyContent:'center',
    alignItems:'center',
   },

   gridLabel:{
      fontFamily: 'Pixel-Noir Skinny Caps',
      fontSize: 6,
      color: 'white',
      textAlign: 'center'
  },

   bottomLabel:{
      fontFamily: 'Pixel-Noir Skinny Caps',
      fontSize: 10,
      color: 'white',
      textAlign: 'center'
   },

   taskList:{
      fontFamily: 'Pixel-Noir Skinny Caps',
      fontSize: 5,
      color: 'white',
      textAlign: 'center',
      height: 260

   },

   container: {
    flex: 1,
    flexDirection: 'column',

   },

   itemContainer:{
    flex:1,
    flexDirection: 'row'
   }



});
export class Logs extends Component {

    constructor(props) {
      super(props);
      this.state = {
        dataSource: ds.cloneWithRowsAndSections(Quest.getAllQuests()),
      };
    }

      renderRow(rowData) {
    return(
        <View style={styles.itemContainer}>
          <Text style={{
            marginLeft: 10,
            flex: 9,
            fontSize: 10,
            fontFamily: 'Pixel-Noir Skinny',
            color: 'white',
          }}>
            {rowData.name}
          </Text>
          <Text style={{
            marginRight: 10,
            fontSize: 10,
            fontFamily: 'Pixel-Noir Skinny',
            color: 'white',
          
            }}>
            {rowData.date}
          </Text>
        </View>
    )
  }

  renderSectionHeader(sectionData, sectionID) {
    return(
      <View>
        <View>
            <Text style={{
                fontSize: 17.5,
                fontFamily: 'Pixel-Noir Caps',
                color:  'white',
                backgroundColor: 'grey',
                textAlign: 'center'
            }}>    
              {sectionID}    
            </Text>    
        </View>
      </View>
    )
  }

    render() {
        return (
            <Container>
                  <View style={styles.container}>
                      <Row size={1} style={styles.questsLogsContainer}>
                         <Text style={styles.questLogsLabel}>
                            Quest Logs
                         </Text>
                      </Row>

                      <Row size={1} style={styles.bottomContainer}>
                        <Row size={1} style={{ padding:10 }}>
                          <Grid>
                            <Col size={1}>
                              <Progress.Pie progress={Quest.getCompletedQuest()} size={50}  size={110} color={'green'}/>
                             
                            </Col>
                            <Col size={1} >
                              <Progress.Pie progress={Quest.getMissedQuest()} size={50} showsText={true} size={110} color={'red'}/>
                            </Col>
                            <Col size={1}>
                              <Progress.Pie progress={Quest.getSkippedQuest()} size={50} showsText={true} size={110} color={'blue'}/>
                            </Col>
                          </Grid>
                        </Row>

                        <Row size={1} style={{marginBottom: -60}}>
                          <Col>
                             <Text style={{ textAlign: 'center', paddingTop:10, fontFamily: 'Pixel-Noir Caps', fontSize:10, color:'white'}}> Completed </Text>
                          </Col>
                          <Col>
                              <Text style={{ textAlign: 'center', paddingTop:10, fontFamily: 'Pixel-Noir Caps',fontSize:10, color:'white' }}> Missed </Text>

                          </Col>
                          <Col>
                              <Text style={{ textAlign: 'center', paddingTop:10, fontFamily: 'Pixel-Noir Caps', fontSize:10, color:'white'}}> Skipped </Text>

                          </Col>
                        </Row>

                        <Row size={3}>
                           <ListView 
                              dataSource={this.state.dataSource}
                              renderSectionHeader={this.renderSectionHeader}
                              renderRow={this.renderRow}
                              enableEmptySections={false}
                            />
                        </Row>
               
                </Row>
              </View>
            </Container>
        );
    }
}
module.exports = Logs;
