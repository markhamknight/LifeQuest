import React, { Component } from 'react';
<<<<<<< HEAD
import { View, Text, StyleSheet, Image, ListView, TouchableOpacity, Modal, TextInput} from 'react-native';
import { Container, Content, Thumbnail, Button, Badge, Form, Item ,Label, Input} from 'native-base';
=======
import { View, Text, StyleSheet, Image, ListView, TouchableOpacity} from 'react-native';
import { Container, Content, Thumbnail, Button, Badge, ListItem, CheckBox} from 'native-base';
>>>>>>> 6e913c6870bcc02a97e9909e32cc9ad08e5b9f0f
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as Progress from 'react-native-progress';
import Misc from '../helpers/Misc';
import User from '../helpers/User';
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
      backgroundColor: rgb(32, 72, 104,1),
      flexDirection: 'row',
      flex:1
   },
   prefsLabel: {
      fontFamily: 'Pixel-Noir Caps',
      fontSize: 25,
      color: 'white',
      textAlign: 'center',

   },
   avatar: {
      width: 100,
      height: 100,
  },
/*   avatarContainer: {
      justifyContent: 'center',
      alignItems: 'center',
  },*/
  currentLvl: {
    fontFamily: 'Pixel-Noir Caps',
    fontSize: 10,
    color: 'black',
    textShadowColor: 'white',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 20,
  },
  playerName: {
    fontFamily: 'Pixel-Noir Caps',
    fontSize: 12,
    color: 'black',
    textShadowColor: 'white',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 20,
  },
  bottomContainer: {
    // backgroundColor: '#204868',
    backgroundColor: rgb(32, 72, 104,0.9),
    flexDirection: 'column',
    borderWidth: 5,
    borderColor: '#6080f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prefButtons: {
    backgroundColor:'white',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding: 10,
    borderColor: 'black',
    borderWidth: 3,
    height: 100,
    margin: 5,

  },
  prefButtonsText: {
    fontFamily: 'Pixel-Noir Caps',
    fontSize: 10,

  },
  avatarText: {
    textAlign:'center',
    marginTop:-5,
    fontFamily: 'Pixel-Noir Caps',
    fontSize: 8,
    color: 'green',
  }
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
});
export class Preferences extends Component {

    constructor(props) {
      super(props);
      this.state = {
        modalVisible: false,
        selectedAvt: User.getAvatar(),
        avatar: User.getAvatar(),
        tmpName:User.getName(),
        name: User.getName(),
      };
      this.selectedAvatar = this.selectedAvatar.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.updateAccount = this.updateAccount.bind(this);
      this.updatePreference = this.updatePreference.bind(this);
      this.cancelModal = this.cancelModal.bind(this);
    }
    selectedAvatar(data) {
      if(data == this.state.selectedAvt) {
        return 'Selected';
      } else {
        return '';
      }
    }
    handleTextChange(event) {
      let alphabetRegex = /[a-zA-Z]/;
      let zip = event.nativeEvent.text;
      this.setState({
          tmpName:zip,
      });
    }
    updateAccount(){
      if (this.state.tmpName == '' || this.state.tmpName == null) {
        alert('Please enter a name');
      } else {
        let data = {
          avatar: this.state.selectedAvt,
          name: this.state.tmpName,
        }
        User.updateAcct(data);
        this.setState({
          modalVisible: false,
        });
      }
    }
    updatePreference(data) {

        if(User.checkPref(data)) {
          if(!User.getPref()) {
            alert('Must have at least 1 interest');
          } else {
            User.removePref(data);
          }
        } else {
          User.addPref(data);
        }
        this.setState({

        });
    }
    cancelModal() {
      this.setState({
        tmpName:this.state.name,
        modalVisible:false,
        selectedAvt: this.state.avatar,
      })
    }
    render() {
        let avt = User.getAvatar();
        let src;
        if(avt == 'avatar1') {
          src = require('../assets/images/avatars/avatar1.jpg');
        } else if (avt == 'avatar2'){
          src = require('../assets/images/avatars/avatar2.jpg');
        } else if (avt == 'avatar3'){
          src = require('../assets/images/avatars/avatar3.jpg');
        } else if (avt == 'avatar4'){
          src = require('../assets/images/avatars/avatar4.jpg');
        } else if (avt == 'avatar5'){
          src = require('../assets/images/avatars/avatar5.jpg');
        } else if (avt == 'avatar6'){
          src = require('../assets/images/avatars/avatar6.jpg');
        } else if (avt == 'avatar7'){
          src = require('../assets/images/avatars/avatar7.jpg');
        } else if (avt == 'avatar8'){
          src = require('../assets/images/avatars/avatar8.jpg');
        } else if (avt == 'avatar9'){
          src = require('../assets/images/avatars/avatar8.jpg');
        }

        return (
            <Container>
<<<<<<< HEAD
               <Content>
                  <Grid>
                    <Row size={1} style={styles.prefsContainer}>  
                       <Text style={styles.prefsLabel}>  
                          Preferences  
                       </Text>  
                    </Row>  
                    <Row size={4} style={styles.bottomContainer}>  
                        <Row size={1} style={{padding:10}}>  
                            <Col size={3}>  
                              <Image source={src} style={styles.avatar} resizeMode="contain"/>    
                            </Col>  
                            <Col size={5} style={{flexDirection:'row',alignItems:'center'}}>  
                              <View style={{flexDirection:'column'}}>
                                <Text style={[styles.playerName,{paddingBottom:5}]}>      
                                   {User.getName()}      
                                </Text>      
                                <Text style={[styles.currentLvl,{paddingBottom:5}]}>      
                                   Level {User.getLvl()}      
                                </Text>
                                <Button iconLeft small info onPress={() => this.setState({modalVisible: true})}>
                                    <Icon name='cog' />
                                    <Text style={{fontFamily: 'Pixel-Noir Caps',fontSize:7}}>Update Character</Text>
                                </Button>
                              </View>    
                            </Col>  
                        </Row>
                        <Row size={1} style={{margin:10,backgroundColor: rgb(32, 72, 104,1)}}>
                          <Text style={[styles.prefButtonsText,{color:'white',padding:10,}]}>  
                            My Preferences  
                          </Text>  
                        </Row>
                        <Row size={3}>
                            <Col>
                              <TouchableOpacity 
                                style={[styles.prefButtons,User.checkPref('chores') == true? {backgroundColor:rgb(0,255,0,.9)}:{backgroundColor:rgb(255,0,0,.9)}]}
                                onPress={()=>this.updatePreference('chores')}
                              >
                                  <Text style={styles.prefButtonsText}>
                                    Chores
                                  </Text>
                              </TouchableOpacity>
                            </Col>
                            <Col>
                              <TouchableOpacity 
                                  style={[styles.prefButtons,User.checkPref('health') == true? {backgroundColor:rgb(0,255,0,.9)}:{backgroundColor:rgb(255,0,0,.9)}]}
                                  onPress={()=>this.updatePreference('health')}
                                >
                                  <Text style={styles.prefButtonsText}>
                                    Health
                                  </Text>
                              </TouchableOpacity>
                            </Col>
                            <Col>
                              <TouchableOpacity 
                                style={[styles.prefButtons,User.checkPref('social') == true? {backgroundColor:rgb(0,255,0,.9)}:{backgroundColor:rgb(255,0,0,.9)}]}
                                onPress={()=>this.updatePreference('social')}
                              >
                                  <Text style={styles.prefButtonsText}>
                                    Social
                                  </Text>
                              </TouchableOpacity>
                            </Col>
                        </Row>
                        <Row size={1}>
                            <Col>
                              <TouchableOpacity 
                                style={[styles.prefButtons,User.checkPref('recreation') == true? {backgroundColor:rgb(0,255,0,.9)}:{backgroundColor:rgb(255,0,0,.9)}]}
                                onPress={()=>this.updatePreference('recreation')}
                              >
                                  <Text style={styles.prefButtonsText}>
                                    Recreation
                                  </Text>
                              </TouchableOpacity>
                            </Col>
                            <Col>
                              <TouchableOpacity 
                                style={[styles.prefButtons,User.checkPref('education') == true? {backgroundColor:rgb(0,255,0,.9)}:{backgroundColor:rgb(255,0,0,.9)}]}
                                onPress={()=>this.updatePreference('education')}
                              >
                                  <Text style={styles.prefButtonsText}>
                                    Education
                                  </Text>
                              </TouchableOpacity>
                            </Col>
                        </Row>
                    </Row>
                  </Grid>
                  <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                    >
                     <View style={{marginTop: 22,padding:10,}}>
                          <View style={{justifyContent:'center',alignItems:'center'}}>
                           <Text>
                             Player Name
                           </Text>
                         </View>
                          <TextInput ref='input'
                            placeholder='Player Name'
                            placeholderTextColor='#000000'
                            underlineColorAndroid='#000000'
                            returnKeyType='go'
                            onChange={this.handleTextChange}
                            value={this.state.tmpName}
                            />
                     </View>
                     <View style={{justifyContent:'center',alignItems:'center'}}>
                       <Text>
                         Avatars
                       </Text>
                     </View>
                     <Grid>
                       <Row style={{marginBottom:55}}>
                          <Col>
                            <TouchableOpacity style={styles.prefButtons} onPress={() => this.setState({selectedAvt:'avatar1'})}>
                                <Image source={require('../assets/images/avatars/avatar1.jpg')} style={styles.avatar} resizeMode="contain"/>
                            </TouchableOpacity>
                            <Text style={styles.avatarText}>
                              {this.selectedAvatar('avatar1')}
                            </Text>
                          </Col>
                          <Col>
                            <TouchableOpacity style={styles.prefButtons} onPress={() => this.setState({selectedAvt:'avatar2'})}>
                                <Image source={require('../assets/images/avatars/avatar2.jpg')} style={styles.avatar} resizeMode="contain"/>
                            </TouchableOpacity>
                            <Text style={styles.avatarText}>
                              {this.selectedAvatar('avatar2')}
                            </Text>
                          </Col>
                          <Col>
                            <TouchableOpacity style={styles.prefButtons} onPress={() => this.setState({selectedAvt:'avatar3'})}>
                               <Image source={require('../assets/images/avatars/avatar3.jpg')} style={styles.avatar} resizeMode="contain"/>
                            </TouchableOpacity>
                            <Text style={styles.avatarText}>
                              {this.selectedAvatar('avatar3')}
                            </Text>
                          </Col>
                        </Row>
                        <Row style={{marginBottom:55}}>
                          <Col>
                            <TouchableOpacity style={styles.prefButtons} onPress={() => this.setState({selectedAvt:'avatar4'})}>
                                <Image source={require('../assets/images/avatars/avatar4.jpg')} style={styles.avatar} resizeMode="contain"/>
                            </TouchableOpacity>
                            <Text style={styles.avatarText}>
                              {this.selectedAvatar('avatar4')}
                            </Text>
                          </Col>
                          <Col>
                            <TouchableOpacity style={styles.prefButtons} onPress={() => this.setState({selectedAvt:'avatar5'})}>
                                <Image source={require('../assets/images/avatars/avatar5.jpg')} style={styles.avatar} resizeMode="contain"/>
                            </TouchableOpacity>
                            <Text style={styles.avatarText}>
                              {this.selectedAvatar('avatar5')}
                            </Text>
                          </Col>
                          <Col>
                            <TouchableOpacity style={styles.prefButtons} onPress={() => this.setState({selectedAvt:'avatar6'})}>
                                <Image source={require('../assets/images/avatars/avatar6.jpg')} style={styles.avatar} resizeMode="contain"/>
                            </TouchableOpacity>
                            <Text style={styles.avatarText}>
                              {this.selectedAvatar('avatar6')}
                            </Text>
                          </Col>
                        </Row>
                        <Row style={{marginBottom:55}}>
                          <Col>
                            <TouchableOpacity style={styles.prefButtons} onPress={() => this.setState({selectedAvt:'avatar7'})}>
                               <Image source={require('../assets/images/avatars/avatar7.jpg')} style={styles.avatar} resizeMode="contain"/>
                            </TouchableOpacity>
                            <Text style={styles.avatarText}>
                              {this.selectedAvatar('avatar7')}
                            </Text>
                          </Col>
                          <Col>
                            <TouchableOpacity style={styles.prefButtons} onPress={() => this.setState({selectedAvt:'avatar8'})}>
                                <Image source={require('../assets/images/avatars/avatar8.jpg')} style={styles.avatar} resizeMode="contain"/>
                            </TouchableOpacity>
                            <Text style={styles.avatarText}>
                              {this.selectedAvatar('avatar8')}
                            </Text>
                          </Col>
                          <Col>
                            <TouchableOpacity style={styles.prefButtons} onPress={() => this.setState({selectedAvt:'avatar9'})}>
                               <Image source={require('../assets/images/avatars/avatar9.jpg')} style={styles.avatar} resizeMode="contain"/>
                            </TouchableOpacity>
                            <Text style={styles.avatarText}>
                              {this.selectedAvatar('avatar9')}
                            </Text>
                          </Col>
                        </Row>
                        <Row style={{marginBottom:10}}>
                          <Col style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Button iconLeft small info onPress={() => this.updateAccount() }>
                                <Icon name='cog' />
                                <Text style={{fontFamily: 'Pixel-Noir Caps',fontSize:10}}>Update</Text>
                            </Button>
                          </Col>
                          <Col style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <Button iconLeft small info onPress={() => this.cancelModal() }>
                                <Icon name='remove' />
                                <Text style={{fontFamily: 'Pixel-Noir Caps',fontSize:10}}>Cancel</Text>
                            </Button>
                          </Col>
                        </Row>
                     </Grid>
                     
                  </Modal>
               </Content>
=======
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
>>>>>>> 6e913c6870bcc02a97e9909e32cc9ad08e5b9f0f
            </Container>
        );
    }
}


module.exports = Preferences;
