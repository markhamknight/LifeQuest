import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ListView, TouchableOpacity} from 'react-native';
import { Container, Content, Thumbnail, Button, Badge } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as Progress from 'react-native-progress';
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
   },
   bottomContainer: {
    backgroundColor: rgb(32, 72, 104,0.9),
    flexDirection: 'column',
    borderWidth: 5,
    borderColor: '#6080f8',
    alignItems: 'center',
    justifyContent: 'center',
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

   }



});
export class Logs extends Component {

    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
        return (
            <Container>
               <Content>
                      <Row size={1} style={styles.questsLogsContainer}>
                         <Text style={styles.questLogsLabel}>
                            Quest Logs
                         </Text>
                      </Row>

                      <Row style={styles.bottomContainer}>
                        <Row>
                        <Grid>
                          <Col size={1}>
                            <Progress.Pie progress={0.1} size={50}  size={110}/>
                             <Text style={styles.gridLabel}>
                                
                            </Text>
                          </Col>
                          <Col size={1} >
                            <Progress.Pie progress={0.5} size={50} showsText={true} size={110}/>
                            <Text style={styles.gridLabel}>
                                
                            </Text>
                          </Col>
                          <Col size={1}>
                            <Progress.Pie progress={0.75} size={50} showsText={true} size={110}/>
                            <Text style={styles.gridLabel}>
                                
                            </Text>
                          </Col>
                        </Grid>
                      </Row>
                     
                      <Row>
                         <Col size={1}>
                            <View>
                              <Text style={styles.bottomLabel}>
                                Completed
                              </Text>
                            </View>
                          </Col>
                        <Col size={1}>
                          <View>
                            <Text style={styles.bottomLabel}>
                              Missed
                            </Text>
                          </View>
                        </Col>

                        <Col size={1}>
                          <View>
                            <Text style={styles.bottomLabel}>
                            Skipped
                            </Text>
                          </View>
                        </Col>
                      </Row>

                      <Row size={3}>
                        <Col size={1}>
                          <View>
                            <Text style={styles.taskList}>
                              
                              Completed Tasks

                            </Text>

                          </View>
                        </Col>

                        <Col size={1}>
                          <View>
                            <Text style={styles.taskList}>
                            
                            Missed Tasks

                            </Text>
                          </View>
                        </Col>

                        <Col size={1}>
                          <View>
                            <Text style={styles.taskList}>
                            
                            Skipped Tasks

                            </Text>
                          </View>
                        </Col>


                      </Row>


                
                </Row>
              </Content>
            </Container>
        );
    }
}
module.exports = Logs;
