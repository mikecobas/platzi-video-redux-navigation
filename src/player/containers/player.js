import React , { Component } from 'react'
import Video from 'react-native-video';
import Layout  from '../components/layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'
import ProgressBar from '../components/progress-bar';
import TimeLeft from '../components/time-left';


import {
    StyleSheet,
    ActivityIndicator,
    Text,
} from 'react-native'
import FullScreen from '../components/fullscreen';



class Player extends Component {
    state= {
        loading: true,
        paused: false,
        fullScreen: false,
        duration: '0:00',
        currentTime: '0:00',
        progress: 0,
        seek:0
    }
    onBuffer = ( { isBuffering } ) =>{
        this.setState({
            loading: isBuffering
        })
    }
    playPause = () =>{
        this.setState({
            paused: !this.state.paused
        })
    }
    fullScreen = () =>{
        this.player.presentFullscreenPlayer();
        this.setState({
            fullScreen: !this.state.fullScreen
        })
    }

    onLoad = (payload) =>{
        let duration = payload.duration / 60;
        let min = Math.floor(duration);
        let seconds =  duration % 1;
        seconds = (seconds * 60)/ 1000;
        let totalTime = (min + seconds * 10).toFixed(2).replace('.', ':');
        this.setState({
            duration:totalTime
        })
    }

    setTime = (payload) => {
        let duration = payload.currentTime / 60;
        let mins = Math.floor(duration);
        let seconds = duration % 1;
        seconds = (seconds * 60) / 1000;
        let currentTime = (mins + seconds * 10).toFixed(2).replace('.', ':');
        this.setState({
          currentTime: currentTime,
          progress: (payload.currentTime / payload.seekableDuration ),
          //seek: payload.seekableDuration.toFixed(2).replace('.', ':'),
        })
      }
    
      changeSliderStarted = (value) => {
        this.setState({
            valueSlider: value,
           // currentTime:  ((value *1000)).toFixed(2).replace('.', ':'),
        })
       // console.log(((value *1000)/ this.state.seek).toFixed(2).replace('.', ':'))
      }
      changeSliderFinished = (value) => {
        this.setState((prevState) => ({
            value: prevState.valueSlider,
            progress: value * 1000
          }));
           this.player.seek(value * 100)
           // console.log(value * 1000);
            //console.log(this.state.duration * value);
      }
    

    render(){
        return (
            <Layout 
            loading = {this.state.loading}
            video={
                <Video
                  source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
                  style={styles.video}
                  resizeMode="contain"
                  onBuffer={this.onBuffer}
                  paused={this.state.paused}
                    ref={(ref) => {
                    this.player = ref
                    }}
                    onFullscreenPlayerWillDismiss={this.fullScreenPlayerWillDismiss}
                    onLoad={this.onLoad}
                    onProgress={this.setTime}
                    onSeek={this.changeSliderStarted}
                    fullscreenOrientation='landscape'  
                 
                />
              }
            loader={
                <ActivityIndicator color='red' />
            }
            controls={
                <ControlLayout>
                    <PlayPause
                        onPress={this.playPause}
                        paused={this.state.paused}
                    />
                    <ProgressBar 
                        progress={this.state.progress}
                        onChangeStarted={this.changeSliderStarted}
                        onChangeFinished={this.changeSliderFinished}
                        
                    />
                    <TimeLeft 
                        currentTime={ this.state.currentTime }
                        duration={ this.state.duration }            
                    />

                    <FullScreen 
                        onPress={this.fullScreen}
                        fullscreen={this.state.fullScreen}
                    />
                </ControlLayout>
            }
        >

          
        </Layout>
        )
        
    }
}


const styles = StyleSheet.create({
    video:{
        position: 'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
    },
    duration: {
        color: 'white',
        fontWeight: 'bold',
        paddingLeft:10,
        paddingRight:10
      }
})

export default Player