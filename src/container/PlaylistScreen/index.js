import {View, Text, SafeAreaView, Button} from 'react-native';
import React, {useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../../store/authContext';

function SettingScreen() {
  const userInfor = useContext(AuthContext);
  const onLogOut = () => {
    const handleLogOut = async () => {
      console.log('lò out');
      try {
        userInfor.setToken(null);
        const res = await AsyncStorage.setItem('token', '');
        console.log('token la gi cua userinFot', userInfor.token);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    handleLogOut();
  };
  useEffect(() => {
    console.log('token la gi cua userinFot', userInfor.token);
  }, [userInfor.token]);
  return (
    <SafeAreaView>
      <View>
        <Button title="Log Out" onPress={onLogOut} />
      </View>
      <View></View>
    </SafeAreaView>
  );
}

export default SettingScreen;
