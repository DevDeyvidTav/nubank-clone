import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Ion from 'react-native-vector-icons/Ionicons'
import React from 'react';

export default function App() {
  const [show, setShow] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.first}>
          <View style={styles.user}>
            <Icon name='user' color='#FFF' />
          </View>
          <Text style={{ marginLeft: 15, marginTop: 45, fontSize: 18, fontWeight: '500', color: "white" }}>
            Olá, Deyvid Tavares
          </Text>
        </View>
        <View style={styles.second}>
          <View style={{ display: 'flex', gap: 10, flexDirection: 'row', gap: 16, alignItems: 'center' }}>
            {show ? <Ion onPress={() => setShow(!show)} name='eye-off' size={20} color='#FFF' /> : <Ion onPress={() => setShow(!show)} name='eye' size={20} color='#FFF' />}
            <Icon name='questioncircleo' size={17} color='#FFF' />
            <Icon name='mail' size={20} color='#FFF' />
          </View>
        </View>
      </View>
      <Text style={{ fontSize: 20, fontWeight: '600', marginTop: 13, marginLeft: 15 }}>
        Conta
      </Text>
      <Text style={{ fontSize: 25, fontWeight: '800', marginTop: 13, marginLeft: 15 }}>
        {show ? 'R$ 0,05' : '....'}
      </Text>
      <View style={styles.actions}>
        <View style={styles.actionsBox}>
          <Ion name='cash' size={22} color='#333' />
          <Text style={{ marginTop: 5, fontSize: 12, color: "#333" }}>Pix</Text>
        </View>
        <View style={styles.actionsBox}>
          <Icon name='creditcard' size={22} color='#333' />
          <Text style={{ marginTop: 5, fontSize: 12, color: "#333" }}>Cartão</Text>
        </View>
        <View style={styles.actionsBox}>
          <Icon name='barcode' size={22} color='#333' />
          <Text style={{ marginTop: 5, fontSize: 12, color: "#333" }}>Boleto</Text>
        </View>
        <View style={styles.actionsBox}>
          <Icon name='user' size={22} color='#333' />
          <Text style={{ marginTop: 5, fontSize: 12, color: "#333" }}>Indicar Amigos</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => alert('Botão pressionado')}>
        <Icon name='creditcard' size={22} color='#333' />
        <Text style={styles.buttonText}>Meus cartões</Text>
      </TouchableOpacity>

      <View style={{ width: "100%", height: 1, backgroundColor: "#f3f3f9", marginTop: 25 }}>

      </View>
      <TouchableOpacity>
      <View style={styles.creditCard}>

        <Text style={styles.cardNumber}>**** **** **** 1234</Text>
        <Text style={styles.cardHolder}>Deyvid Tavares</Text>
        <Text style={styles.cardValid}>Válido até 12/24</Text>
      </View>

        <View style={styles.billInfo}>
          <Text style={styles.billLabel}>Fatura Atual</Text>
          <Text style={styles.billAmount}>R$ 1.234,56</Text>
          <Text style={styles.dueDate}>Vencimento: 10/10/2023</Text>
        </View>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',

  },
  text: {
    fontSize: 18,
    color: "#7e0aca"
  },
  header: {
    backgroundColor: "#7e0aca",
    width: "100%",
    height: "22%",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  user: {
    marginTop: 35,
    marginLeft: 15,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    backgroundColor: '#a943de',
    borderRadius: 100
  },
  second: {
    marginTop: 45,
    marginRight: 15
  },
  actions: {
    gap: 15,
    width: "100%",
    height: "13%",
    marginTop: 30,
    flexDirection: 'row',
    marginLeft: 15
  },
  actionsBox: {
    width: 65,
    height: 65,
    backgroundColor: "#f3f3f9",
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    gap: 15,
    flexDirection: 'row',
    marginLeft: '5%',
    alignItems: 'center',
    paddingLeft: 17,
    height: 40,
    width: "90%",
    backgroundColor: '#f3f3f9',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',

  },
  creditCard: {
    backgroundColor: '#8B10AE',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  cardNumber: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardHolder: {
    color: 'white',
    fontSize: 16,
  },
  cardValid: {
    color: 'white',
    fontSize: 16,
  },
  billInfo: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  billLabel: {
    color: '#8B10AE',
    fontSize: 16,
  },
  billAmount: {
    color: '#333',
    fontSize: 28,
    fontWeight: 'bold',
  },
  dueDate: {
    color: '#333',
    fontSize: 16,
  },
});
