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
   prefsContainer: {
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
   prefsLabel: {
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
      fontSize: 6,
      color: 'white',
      textAlign: 'center'
   },

   prefsBottomContainer:{
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
      borderColor: '#6080f8',
      backgroundColor: rgb(32, 72, 104,0.9),
      flexDirection: 'row',
      height: 420

   }



});
export class Preferences extends Component {

    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
        return (
            <Container>
               <Content>
                      <Row size={1} style={styles.prefsContainer}>
                         <Text style={styles.prefsLabel}>
                            Preferences
                         </Text>
                      </Row>

                      <Row style={styles.prefsBottomContainer}>
                        <Text>
                          Looool
                        </Text>
                      </Row>
                      
               </Content>
            </Container>
        );
    }
}


module.exports = Preferences;
