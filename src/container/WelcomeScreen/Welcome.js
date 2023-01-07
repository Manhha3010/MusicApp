import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import ButtonBig from '../../components/ButtonBig/ButtonBig';
import React from 'react';
function WelCome() {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#0085FF', '#fff']}
      start={{x: 0.26, y: 0.26}}
      end={{x: 0, y: 1.0}}
      location={[0.25, 0.4]}
      style={styles.root}>
      <View>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/img/image4.png')}
            style={styles.imgStyle}></Image>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.appName}>
            MUSIC APP - Thiết kế giao diện người dùng
          </Text>
          <Text style={styles.textContent}>
            {
              ' Nguyễn Trung Hiếu MSV: AT160419\n Trần Huy Hoàng MSV: AT160423\n Hà Duy Mạnh MSV: AT160430\n Bùi Đức Thắng MSV: AT160445\n Nguyễn Văn Sâm MSV:AT160440'
            }
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.replace('LoginScreen');
            }}>
            <ButtonBig text={'Bắt đầu'} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

export default WelCome;
