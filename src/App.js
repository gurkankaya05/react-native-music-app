import React, { useState,useEffect } from "react";
import { View,Text ,Button, SafeAreaView,FlatList,Switch,StyleSheet} from "react-native";
import SearchBar from "./components/SearchBar/SearchBar";
import SongCard from "./components/SongCard/SongCard";

import musicdata from './music_data.json';

const App = () =>{
    const renderSong = ({item}) => <SongCard song={item} />

    const renderSeperator =()=> <View style={styles.seperator}/>
    // Search Bar  funct
  const handleSearch = text => {
    const filteredList = musicdata.filter(song => {
        const searchedText = text.toLowerCase();
        const currentTitle = song.title.toLowerCase();
        const currentArtist = song.artist.toLowerCase();
        return currentTitle.indexOf(searchedText) >  -1  || currentArtist.indexOf(searchedText) > -1 ;
     
    })
    setDataList(filteredList);
  }
//Search bar funct
    const [dataList,setDataList] = useState(musicdata);

            return(
    <SafeAreaView style={styles.container}>
        
            <SearchBar onSearch={handleSearch}/>
            <FlatList keyExtractor={(item) => item.id}
             data={dataList}
              renderItem={renderSong} 
              ItemSeparatorComponent={renderSeperator} />
        
    </SafeAreaView>

    )
   
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    seperator:{
    borderWidth:1,
    borderColor:'#e0e0e0'
    },
})

export default App;

