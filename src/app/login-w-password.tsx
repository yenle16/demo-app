import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet, TextInput } from "react-native";
import PhoneInput
  from 'react-native-phone-input';
import * as Device from 'expo-device';
import * as Localization from 'expo-localization';
import { checkUser } from "@/services/auth/login";
import { CheckUser } from "@/types/auth";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function LoginWithPasswordScreen() {
  const logo = require('../assets/sticky-qr.png');
  const styles = StyleSheet.create({
    phoneInput: {
      height: 50,
      width: '100%',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
    },
  })
  const lang = Localization.locale.split('-')[0];
  const os = Device.osName.toLowerCase();
  // const handleCheckUser = async () => {
  //   const params = {
  //     lang: lang,
  //     platform: 'stickyqr-user',
  //     os: os
  //   }
  //   const data = await checkUser(phoneNumber, params);
  //   if ("error" in data) {
  //     // console.error(`checkPhone err`, data);
  //   }
  //   const phoneData = data as CheckUser;
  //   return phoneData
  // }
  const [phoneNumber, setPhoneNumber] = useState('+1');

  ///
  const [password, setPassword] = useState('');

  // State variable to track password visibility 
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state 
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <SafeAreaView className='flex flex-col items-center bg-white px-8'>
      <View className="flex flex-col justify-between h-full">
        <View className="flex justify-center items-center h-1/2 gap-6">
          <View className="flex my-5 gap-4">
            <Text className='text-black font-normal text-base leading-6'>Phone number</Text>
            <View className=" flex flex-row items-center align-middle gap-4 border border-slate-300 rounded-xl w-full">
              <PhoneInput
                initialValue={phoneNumber}
                onChangePhoneNumber={(number) => setPhoneNumber(number)}
                style={styles.phoneInput}
              />
            </View>
            <Text className='text-black font-normal text-base leading-6'>Password</Text>
            <View className=" flex flex-row items-center align-middle gap-4 border border-slate-300 rounded-xl w-full">
              <View className="flex flex-row items-center justify-between rounded-xl w-full">
                <TextInput
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Enter Password"
                  placeholderTextColor="#aaa"
                  className="p-3 "
                />
                <MaterialCommunityIcons
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={24}
                  color="#aaa"
                  className="mx-3"
                  onPress={toggleShowPassword}
                />
              </View>
            </View>
          </View>
        </View>
        <View className='flex my-8 justify-end gap-4'>
          <TouchableOpacity className='bg-[#FF4F0F] p-3 mt-4 rounded-lg' >
            <Text className='text-center text-base text-white font-semibold'>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );

}
