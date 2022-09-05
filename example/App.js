/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AnimatedProgressBar from 'react-native-simple-animated-progress-bar';

const App = () => {
  const [progress, setProgress] = useState(0.2);

  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: 128,
          justifyContent: 'center',
          // alignItems: 'center',
        }}>
        {/*<Text*/}
        {/*  style={{*/}
        {/*    fontSize: 18,*/}
        {/*    marginBottom: 72,*/}
        {/*    alignSelf: 'center',*/}
        {/*  }}>*/}
        {/*  progress is : {progress}*/}
        {/*</Text>*/}
        <AnimatedProgressBar progress={progress} />
        <AnimatedProgressBar
          size={20}
          progress={progress}
          rootStyle={{
            marginTop: 32,
          }}
        />
        <AnimatedProgressBar
          size={20}
          isRtl={false}
          progress={progress}
          rootStyle={{
            marginTop: 32,
          }}
        />
        <AnimatedProgressBar
          duration={1000}
          size={20}
          progress={progress}
          rootStyle={{
            marginTop: 32,
          }}
          bgColor={'#bedfff'}
          barColor={'#117493'}
        />
        <AnimatedProgressBar
          duration={2000}
          size={20}
          progress={progress}
          rootStyle={{
            marginTop: 32,
          }}
          bgColor={'#ffadad'}
          barColor={'#9a0d0d'}
        />
        <AnimatedProgressBar
          barWidth={200}
          duration={300}
          size={20}
          progress={progress}
          rootStyle={{
            borderRadius: 8,
            alignSelf: 'center',
            marginTop: 32,
            width: 200,
          }}
          barStyle={{
            borderRadius: 8,
          }}
          bgColor={'#ffd5d5'}
          barColor={'#ff591c'}
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 16,
            marginTop: 72,
          }}>
          <TouchableOpacity
            onPress={() => {
              if (progress > 0) {
                setProgress(progress - 0.1);
              } else {
                setProgress(1);
              }
            }}
            style={{
              width: 128,
              height: 48,
              backgroundColor: '#bdbcbc',
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{textAlign: 'center'}}>- 0.1 progress</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (progress < 1) {
                setProgress(progress + 0.1);
              } else {
                setProgress(0);
              }
            }}
            style={{
              width: 128,
              height: 48,
              backgroundColor: '#bdbcbc',
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{textAlign: 'center'}}>+ 0.1 progress</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
