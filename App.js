/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {Image, Button ,TextInput, Text, View} from 'react-native';


// class App extends Component {
//   constructor(){
//     super();
//     this.state={y:'',x:''}
//     }
//   render() {
//     var press = ()=>{
//       this.setState({y: this.state.x })
//     }

//     return (
//       <View>
//         <Image
//         style={{width:150, height:150}}
//         source={{uri:'https://cdn2.veltra.com/ptr/20151129032239_2039083946_11990_0.jpg?imwidth=550&impolicy=custom'}}/>
//         <Text 
//         style={{fontSize:25}}>
//         {this.state.x}
//         </Text>
//         <Text 
//         style={{fontSize:25}}>
//         {this.state.y}
//         </Text>
//         <TextInput
//         onChangeText={
//           (z)=>this.setState({x:z})
//         }
//         style={{fontSize:25}}
//         placeholder='Ketik Nama Anda'/>
//         <Button 
//         onPress={press}
//         title='Klik disini!'
//         />
//       </View>
//     );
//   }
// }
// export default App;

// import React, { Component } from 'react';
// import { Image, Button, TextInput, View } from 'react-native';
// import { Text } from 'react-native-elements' // elements

// class App extends Component {

//   render() {
//     return (
//       <View>
//           <Text > halo </Text>
//           <Text h1> halo </Text>
//           <Text h2> halo </Text>
//           <Text h3> halo </Text>
//           <Text h4> halo </Text>
//           <Text h5> halo </Text>
//           <Text h6> halo </Text>
//       </View>
//     );
//   }
// }
// export default App;

// import React, { Component } from 'react';
// import { Image, Button, TextInput, View } from 'react-native';
// import { Text } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome'; // kalau mau di ambil lewat fontawesome

// class App extends Component {

//   render() {
//     return (
//       <View>
//           <Text h1> halo <Icon name='heart' size={50} color='pink'/></Text>
//           <Icon name='android' size={50} color='green'/>
//           <Icon name='heart' size={50} color='pink'/>
//       </View>
//     );
//   }
// }
// export default App;

// import React, { Component } from 'react';
// import { Alert, Text, Image, Button, TextInput, View } from 'react-native';
// import { ListItem, Rating, SearchBar, Avatar, FormInput, Header, SocialIcon } from 'react-native-elements'

// class App extends Component {
//   ratingSelesai(rating) {
//     Alert.alert('Rating Anda: ' + rating + '/5');
//   }
//   render() {
//     const list = [
//       {
//         nama: 'Kak Messi ♥',
//         foto: 'http://...messi.jpg',
//         ket: 'Capt. Tsubasa live action!'
//       },
//       {
//         nama: 'Oom Ronaldinho ☺',
//         foto: 'http://...ronaldinho.jpg',
//         ket: 'The King of Samba'
//       },
//       {
//         nama: 'Pakdhe Rivaldo ♠',
//         foto: 'http://...rivaldo.jpg',
//         ket: 'Genius Midfielder'
//       }
//     ]
//     return (
//       <View>
//         <Header
//           backgroundColor={'purple'}
//           leftComponent={{
//             icon: 'menu', color: '#fff'
//           }}
//           centerComponent={{
//             text: 'APLIKASIKU', style: { color: '#fff' }
//           }}
//           rightComponent={{
//             icon: 'home', color: '#fff'
//           }}
//         />
//         <SearchBar
//           lightTheme //ganti jadi terang
//           round // bulat
//           showLoadingIcon // jadi seperti ada loading nya
//           onChangeText={() => { }}
//           onClear={() => { }}
//           placeholder='Cari apa hayo?' />
//         <Avatar
//           xlarge //small medium large
//           rounded
//           source={{ uri: 'https://cdn2.veltra.com/ptr/20151129032239_2039083946_11990_0.jpg?imwidth=550&impolicy=custom' }}
//           onPress={() => { }}
//           activeOpacity={0.7}
//         />
//         {/* <SocialIcon type='facebook' light />
//         <SocialIcon type='twitter' />
//         <SocialIcon type='youtube' button /> */}
//         <Text style={{ fontFamily: 'Ubuntu-Regular', fontSize: 50 }}> Ubuntu ubuntu </Text>
//         {/* <FormInput placeholder='Input biasa' />
//         <FormInput
//           placeholder='Input efek shake' shake={true} /> */}
//         {/* <Rating
//           type="star" // heart, rocket, bell
//           ratingCount={5}
//           fractions={1}
//           startingValue={2.57}
//           imageSize={80}
//           showRating
//           style={{ paddingVertical: 10 }}
//           onFinishRating={this.ratingSelesai}
//         /> */}
//         <Rating
//           type="heart" // star, rocket, bell
//           ratingCount={5}
//           fractions={1}
//           startingValue={2}
//           imageSize={80}
//           showRating
//           readonly // untuk lihat aja
//           // onFinishRating={this.ratingSelesai}
//           style={{ paddingVertical: 10 }}
//         />
//         {
//           list.map((val, i) => (
//             <ListItem
//               key={i}
//               avatar={{ uri: val.foto }}
//               avatarStyle={{ height: 40, width: 40 }}
//               title={val.nama}
//               subtitle={val.ket}
//             />
//           ))
//         }
//       </View>
//     );
//   }
// }
// export default App;

// import React, { Component } from 'react';
// import { View } from 'react-native';
// import { } from 'react-native-elements';
// import { Fab, Title, Text, Icon, Thumbnail, Container, Header, Content, Footer, Button, Body, Right, Left, Item, Input, FooterTab } from 'native-base'

// class App extends Component {
//     constructor(){
//       super();
//       this.state={
//         status: false
//       }
//     }


//   render() {

//     return (
//       <Container>
//         {/* <Header>
//           <Left>
//             <Button>
//               <Icon name='menu' />
//             </Button>
//           </Left>
//           <Body>
//             <Title> Aplikasi</Title>
//           </Body>
//           <Right>
//             <Button>
//               <Icon name='home' />
//             </Button>
//             <Button>
//               <Icon name='search' />
//             </Button>
//             <Button>
//               <Icon name='more' />
//             </Button>
//           </Right>
//         </Header> */}
//         <Header searchBar rounded>
//           <Item>
//             <Icon name='search'/>
//             <Input placeholder=' cari barang idamanmu...'/>
//             <Icon namr='home'/>
//           </Item>
//         </Header>
//         <Content>
//           <Text h1>Halo Dunia</Text>
//           <Thumbnail
//             large // large / small
//             square // jadi kotak
//             source={{ uri: 'https://cdn2.veltra.com/ptr/20151129032239_2039083946_11990_0.jpg?imwidth=550&impolicy=custom' }}
//           />
//           <Icon
//             name='home' //Ionicons  
//           />
//           <Icon
//             name='home'
//             type='FontAwesome' // punya font awesome
//           />
//           <Button
//             iconLeft // icon di kanan padding nya
//             success // warna nya
//             full  // full atau tidak
//             rounded // biar bulat     
//           >
//             <Text> Lampu ON </Text>
//             <Icon name="twitter" type="Zocial" />
//           </Button>
//         </Content>
//         {/* <Footer>
//           <FooterTab>
//             <Button>
//             <Icon name='home'/>
//             <Text>Home</Text>
//             </Button>
//             <Button>
//             <Icon name='instagram' type='Zocial'/>
//             <Text>instagram</Text>
//             </Button>
//             <Button>
//             <Icon name='twitter' type='Zocial'/>
//             </Button>
//             <Button>
//             <Icon name='facebook' type='Zocial'/>
//             <Text>facebook</Text>
//             </Button>
//           </FooterTab>
//           </Footer> */}

//           <Fab
//           active={this.state.status}
//           direction='left'
//           position='bottomRight'
//           style={{ backgroundColor: 'purple' }}
//           onPress={()=>{
//             this.setState({
//               status: !this.state.status
//             })
//           }}
//           >

//           <Icon name='home'/>
//           <Button style={{ backgroundColor: 'blue' }}>
//           <Icon name='facebook' type='Zocial'/>
//           </Button>
//           <Button style={{ backgroundColor:'lightblue' }}>
//           <Icon name='twitter' type='Zocial'/>
//           </Button>
//           <Button style={{ backgroundColor:'green' }}>
//           <Icon name='instagram' type='Zocial'/>
//           </Button>
//           </Fab>
//       </Container>
//     );
//   }
// }
// export default App;

//navigation
// import React, { Component } from 'react';
// import { StackNavigator } from 'react-navigation';
// import Satu from './komponen/satu';
// import Dua from './komponen/dua';
// const RootStack = StackNavigator(
//   {
//     HalSatu: { screen: Satu },
//     HalDua: { screen: Dua },
//   },
//   {
//     initialRouteName: 'HalSatu',
//   }
// );
// class App extends Component {
//   render() {
//     return (<RootStack />);
//   }
// }
// export default App;

// import React, { Component } from 'react';
// import { TabNavigator } from 'react-navigation';
// import Tiga from './komponen/tiga';
// import Empat from './komponen/empat';



// export default TabNavigator({
//   TIGA: { screen: Tiga },
//   EMPAT: { screen: Empat },
// });

// import React, { Component } from 'react';
// import { DrawerNavigator } from 'react-navigation';
// import Lima from './komponen/lima';
// import Enam from './komponen/enam';
// const RootStack = DrawerNavigator(
//   {
//   LIMA: {screen:Lima,},
//   ENAM: {screen:Enam,},
//   },
//   {
//     initialRouteName: 'LIMA',
//   },
// );
// class App extends Component{
//   render(){
//     return(<RootStack/>)
//   }
// }
// export default App;

//API
// import React, { Component } from 'react';
// import { View } from 'react-native';
// import {List, ListItem, Body, Text, Left, Thumbnail} from 'native-base';
// import axios from 'axios';

// class App extends Component {
//   constructor(){
//           super();
//           this.state={
//             dataapi:''
//           }
//         }
//   componentDidMount(){
//     var url ='https://facebook.github.io/react-native/movies.json'
//     axios.get(url).then((x)=>{
//       this.setState({
//         title: x.data.title,
//         film1: x.data.movies[0].title,
//         film2: x.data.movies[1].title,
//         film3: x.data.movies[2].title,
//         film4: x.data.movies[3].title,
//         film5: x.data.movies[4].title,
//         tahun1: x.data.movies[0].releaseYear,
//         tahun2: x.data.movies[1].releaseYear,
//         tahun3: x.data.movies[2].releaseYear,
//         tahun4: x.data.movies[3].releaseYear,
//         tahun5: x.data.movies[4].releaseYear,
//       })
//     })
//   }
//   render() {
//     return (
//       <View>
//       <Text style={{fontSize:50}}>
//         tanpa maping Gan #capekCuy
//       </Text>
//       <Text style={{fontSize:20}}>
//        {this.state.film1} , {this.state.tahun1}
//       </Text>
//       <Text style={{fontSize:20}}>
//        {this.state.film2} , {this.state.tahun2}
//        <Text style={{fontSize:20}}>
//        {this.state.film2} , {this.state.tahun2}
//       </Text>
//       <Text style={{fontSize:20}}>
//        {this.state.film3} , {this.state.tahun3}
//       </Text>
//       </Text>
//       <Text style={{fontSize:20}}>
//        {this.state.film3} , {this.state.tahun3}
//       </Text>
//       <Text style={{fontSize:20}}>
//        {this.state.film4} , {this.state.tahun4}
//       </Text>
//       <Text style={{fontSize:20}}>
//        {this.state.film5} , {this.state.tahun5}
//       </Text>
//       <Text style={{fontSize:30}}>
//         Datar Film sikit cantek:
//       </Text>
//       <List>
//         <ListItem avatar>
//           <Left>
//             <Thumbnail source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX///8AAACWlpYwMDBhYWHCwsK0tLSbm5s3Nzeenp46OjohISETExNkZGRKSkrIyMh2dnZERES6urptbW1GmbilAAABW0lEQVR4nO3cy27CQBBFQQwkxJg3//+vySoLD1EsCw3XQ50tEurauVuyVytJkiRJkiRJkiRJkqSI+vUy6mcLh24ZDbOFm1ePPrENIWF8hIT5EU4QPnhoOFZWHMsR+icKd+Vv28rCbTnCjpCQkJCQkJCQkJCQkLCysP0N+H77HHW7VhZeyxHuTxSGR0iYHyFhfoSE+RES5kdImB8h4U+X88eo86my4lSOcHmisP1LVPvXREJCQkJCQkJCQkJCQsIpwvY34GH/NWp/qCw8lCP8vgDqEkWYHyFhfoSE+RES5kdImB8hYfcOO377d5r2b22EhISEhISEhISEhISEU4Ttb8Dtv28RHiFhfoSE+RES5kdImB8hYX6EhN07fPuy/UtU+9dEQkJCQkJCQkJCQkJCwinC9jfg8AgJ8yMkzI/w74b//zyiYbawXy+jB49ckiRJkiRJkiRJkiRJr+gbuedpvvZChmAAAAAASUVORK5CYII='}}/>
//             {/* <Thumbnail source={require('./gbr.png')}/> */}
//           </Left>
//           <Body>
//             <Text>
//           {this.state.film1} , ({this.state.tahun1})
//           </Text>
//             <Text note>
//               Tentang sesuatu Gan
//             </Text>
//           </Body>
//         </ListItem>

//         <ListItem avatar>
//           <Left>
//             <Thumbnail source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX///8AAACWlpYwMDBhYWHCwsK0tLSbm5s3Nzeenp46OjohISETExNkZGRKSkrIyMh2dnZERES6urptbW1GmbilAAABW0lEQVR4nO3cy27CQBBFQQwkxJg3//+vySoLD1EsCw3XQ50tEurauVuyVytJkiRJkiRJkiRJkqSI+vUy6mcLh24ZDbOFm1ePPrENIWF8hIT5EU4QPnhoOFZWHMsR+icKd+Vv28rCbTnCjpCQkJCQkJCQkJCQkLCysP0N+H77HHW7VhZeyxHuTxSGR0iYHyFhfoSE+RES5kdImB8h4U+X88eo86my4lSOcHmisP1LVPvXREJCQkJCQkJCQkJCQsIpwvY34GH/NWp/qCw8lCP8vgDqEkWYHyFhfoSE+RES5kdImB8hYfcOO377d5r2b22EhISEhISEhISEhISEU4Ttb8Dtv28RHiFhfoSE+RES5kdImB8hYX6EhN07fPuy/UtU+9dEQkJCQkJCQkJCQkJCwinC9jfg8AgJ8yMkzI/w74b//zyiYbawXy+jB49ckiRJkiRJkiRJkiRJr+gbuedpvvZChmAAAAAASUVORK5CYII='}}/>
//             {/* <Thumbnail source={require('./gbr.png')}/> */}
//           </Left>
//           <Body>
//             <Text>
//           {this.state.film2} , ({this.state.tahun2})
//           </Text>
//             <Text note>
//               Tentang sesuatu Gan
//             </Text>
//           </Body>
//         </ListItem>

//         <ListItem avatar>
//           <Left>
//             <Thumbnail source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX///8AAACWlpYwMDBhYWHCwsK0tLSbm5s3Nzeenp46OjohISETExNkZGRKSkrIyMh2dnZERES6urptbW1GmbilAAABW0lEQVR4nO3cy27CQBBFQQwkxJg3//+vySoLD1EsCw3XQ50tEurauVuyVytJkiRJkiRJkiRJkqSI+vUy6mcLh24ZDbOFm1ePPrENIWF8hIT5EU4QPnhoOFZWHMsR+icKd+Vv28rCbTnCjpCQkJCQkJCQkJCQkLCysP0N+H77HHW7VhZeyxHuTxSGR0iYHyFhfoSE+RES5kdImB8h4U+X88eo86my4lSOcHmisP1LVPvXREJCQkJCQkJCQkJCQsIpwvY34GH/NWp/qCw8lCP8vgDqEkWYHyFhfoSE+RES5kdImB8hYfcOO377d5r2b22EhISEhISEhISEhISEU4Ttb8Dtv28RHiFhfoSE+RES5kdImB8hYX6EhN07fPuy/UtU+9dEQkJCQkJCQkJCQkJCwinC9jfg8AgJ8yMkzI/w74b//zyiYbawXy+jB49ckiRJkiRJkiRJkiRJr+gbuedpvvZChmAAAAAASUVORK5CYII='}}/>
//             {/* <Thumbnail source={require('./gbr.png')}/> */}
//           </Left>
//           <Body>
//             <Text>
//           {this.state.film3} , ({this.state.tahun3})
//           </Text>
//             <Text note>
//               Tentang sesuatu Gan
//             </Text>
//           </Body>
//         </ListItem>

//         <ListItem avatar>
//           <Left>
//             <Thumbnail source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX///8AAACWlpYwMDBhYWHCwsK0tLSbm5s3Nzeenp46OjohISETExNkZGRKSkrIyMh2dnZERES6urptbW1GmbilAAABW0lEQVR4nO3cy27CQBBFQQwkxJg3//+vySoLD1EsCw3XQ50tEurauVuyVytJkiRJkiRJkiRJkqSI+vUy6mcLh24ZDbOFm1ePPrENIWF8hIT5EU4QPnhoOFZWHMsR+icKd+Vv28rCbTnCjpCQkJCQkJCQkJCQkLCysP0N+H77HHW7VhZeyxHuTxSGR0iYHyFhfoSE+RES5kdImB8h4U+X88eo86my4lSOcHmisP1LVPvXREJCQkJCQkJCQkJCQsIpwvY34GH/NWp/qCw8lCP8vgDqEkWYHyFhfoSE+RES5kdImB8hYfcOO377d5r2b22EhISEhISEhISEhISEU4Ttb8Dtv28RHiFhfoSE+RES5kdImB8hYX6EhN07fPuy/UtU+9dEQkJCQkJCQkJCQkJCwinC9jfg8AgJ8yMkzI/w74b//zyiYbawXy+jB49ckiRJkiRJkiRJkiRJr+gbuedpvvZChmAAAAAASUVORK5CYII='}}/>
//             {/* <Thumbnail source={require('./gbr.png')}/> */}
//           </Left>
//           <Body>
//             <Text>
//           {this.state.film4} , ({this.state.tahun4})
//           </Text>
//             <Text note>
//               Tentang sesuatu Gan
//             </Text>
//           </Body>
//         </ListItem>

//         <ListItem avatar>
//           <Left>
//             <Thumbnail source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX///8AAACWlpYwMDBhYWHCwsK0tLSbm5s3Nzeenp46OjohISETExNkZGRKSkrIyMh2dnZERES6urptbW1GmbilAAABW0lEQVR4nO3cy27CQBBFQQwkxJg3//+vySoLD1EsCw3XQ50tEurauVuyVytJkiRJkiRJkiRJkqSI+vUy6mcLh24ZDbOFm1ePPrENIWF8hIT5EU4QPnhoOFZWHMsR+icKd+Vv28rCbTnCjpCQkJCQkJCQkJCQkLCysP0N+H77HHW7VhZeyxHuTxSGR0iYHyFhfoSE+RES5kdImB8h4U+X88eo86my4lSOcHmisP1LVPvXREJCQkJCQkJCQkJCQsIpwvY34GH/NWp/qCw8lCP8vgDqEkWYHyFhfoSE+RES5kdImB8hYfcOO377d5r2b22EhISEhISEhISEhISEU4Ttb8Dtv28RHiFhfoSE+RES5kdImB8hYX6EhN07fPuy/UtU+9dEQkJCQkJCQkJCQkJCwinC9jfg8AgJ8yMkzI/w74b//zyiYbawXy+jB49ckiRJkiRJkiRJkiRJr+gbuedpvvZChmAAAAAASUVORK5CYII='}}/>
//             {/* <Thumbnail source={require('./gbr.png')}/> */}
//           </Left>
//           <Body>
//             <Text>
//           {this.state.film5} , ({this.state.tahun5})
//           </Text>
//             <Text note>
//               Tentang sesuatu Gan
//             </Text>
//           </Body>
//         </ListItem>


//       </List>

//       </View>
//     )
//   }
// }
// export default App;

// import React, { Component } from 'react';
// import { View } from 'react-native';
// import {Form, Button, Text, Item, Input, Label} from 'native-base';
// import axios from 'axios';

// class App extends Component {
//   constructor(){
//           super();
//           this.state={
//             dataApi:[],
//             nama:'',
//             usia:''
//           }
//         }

//   get(){
//     var url ='http://192.168.5.28:3568/data' //local
//     axios.get(url).then((x)=>{
//       console.log(x.data);
//       this.setState({dataApi: x.data})
//     })
//   }

//   post(){
//     var url ='http://192.168.5.28:3568/data' //local
//     axios.post(url,{
//       nama: this.state.nama,
//       usia: this.state.usia
//     }).then((x)=>{console.log(x)}).catch((y)=>{console.log(y)})

//   }

//   render() {
//     const dataku = this.state.dataApi.map((item, i)=>{
//       var nama = item.nama;
//       var usia = item.usia;
//       return (
//         <Text key={i} style={{fontSize:20}}>
//           {nama} , {usia}th
//         </Text>
//       )
//     })
//     return (
//       <View>
//         <Form>
//           <Item>
//             <Label>nama:</Label>
//             <Input
//             onChangeText={(x)=>{this.setState({nama: x})}}/>
//           </Item>
//         </Form>
//         <Form>
//           <Item>
//           <Label>usia:</Label>
//           <Input 
//           onChangeText={(x)=>{this.setState({usia: x})}}/>
//           </Item>
//         </Form>
//         <Button
//           onPress={()=>{this.get()}}
//         >
//           <Text>Get Data</Text>
//         </Button>
//         <Button
//           onPress={()=>{this.post()}}
//         >
//           <Text>Post Data</Text>
//         </Button>
//         {dataku}
//       </View>
//     )
//   }
// }
// export default App;

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
Mapbox.setAccessToken('pk.eyJ1IjoieWVvMTY4IiwiYSI6ImNqa2FteXJqbzBpODMzdmxpcjkxYTBsdXAifQ.3LA75JlZU7FGeHkEhVOo_Q');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
          styleURL={Mapbox.StyleURL.Streets}
          zoomLevel={15}
          centerCoordinate={[106.652, -6.302]} //long, lat
          style={styles.container}>
        </Mapbox.MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
