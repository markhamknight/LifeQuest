import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ListView, TouchableOpacity} from 'react-native';
import { Container, Content, Thumbnail, Button, Badge, ListItem, CheckBox} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as Progress from 'react-native-progress';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});
const styles = StyleSheet.create({
   prefsLabelContainer: {
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
      borderColor: '#6080f8',
      backgroundColor: rgb(32, 72, 104,0.9),
      flexDirection: 'row',
      flex:1
   },
   prefsLabel: {
      fontFamily: 'Pixel-Noir Caps',
      fontSize: 25,
      color: 'white',
      textAlign: 'center',

   },
   prefsBottomContainer:{
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
      borderColor: '#6080f8',
      backgroundColor: rgb(32, 72, 104,0.9),
      flexDirection: 'row',
      height: 420,
      flex:6

   },

  mainContainer:{
    flex: 1,
    flexDirection:'column',


   },

  profileContainer:{
    flex:1,
    
      

   },

   prefContainer:{
    flex:3,
   },

    container: {
    flex: 1,
    flexDirection: 'column',

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
               <View style={styles.container}>
                    <View style={styles.mainContainer}>

                      <View style={styles.prefsLabelContainer}>
                         <Text style={styles.prefsLabel}>
                            Preferences
                         </Text>
                      </View>

                      <View style={styles.prefsBottomContainer}>
                        <View style={styles.insideContainer}>

                          <View style={styles.profileContainer}>
                            <Text style={styles.prefsLabel}>
                            Profile
                            </Text>
                          </View>

                          <View style={styles.prefContainer}>
                            
                          </View>

                        </View>
                      </View>

                    </View>
               </View>
            </Container>
        );
    }
}


module.exports = Preferences;
