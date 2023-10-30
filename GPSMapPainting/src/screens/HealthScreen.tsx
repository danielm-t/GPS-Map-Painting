import React, { useState } from 'react';
import { StyleSheet,View, Text } from 'react-native';
import useHealthConnect from '../components/useHealthConnect';


type ValueProps ={
    label: string;
    value: string;
}
const Value = ({ label, value }: ValueProps) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);
export default function HealthScreen(){
    const [date, setDate] = useState(new Date());
    const { steps, distance } = useHealthConnect(date);
    return (
        <View style={{flexDirection:'row', gap:25}}>
          <Value label={'Steps'} value={steps.toString()}/>
          <Value label={'Distance'} value={distance.toString()}/>
        </View>
      );
}
const styles = StyleSheet.create({
    label: {
      color: 'black',
      fontSize: 20,
    },
    value: {
      fontSize: 30,
      color: 'black',
      fontWeight: '500',
    },
  });