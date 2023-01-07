import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {useContext} from 'react';
import {AuthContext} from '../store/authContext';
import AuthStack from './AuthStack';
import UnAuthStack from './UnAuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  const [token, setToken] = useState('');

  const getToken = async () => {
    const tokenAsync = await AsyncStorage.getItem('token');
    setToken(tokenAsync);
    console.log('token asynxc', tokenAsync);
    console.log(token);
  };
  getToken();

  const userInfor = useContext(AuthContext);

  return userInfor.token || token ? <AuthStack /> : <UnAuthStack />;
};

export default StackNavigator;
