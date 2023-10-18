import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ion from 'react-native-vector-icons/Ionicons';
import React from 'react';

export default function BillDetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          onPress={() => navigation.goBack()}
          name="arrowleft"
          size={24}
          color="white"
        />
        <Text style={styles.headerText}>Detalhes da Fatura</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.billSummary}>
          <View style={styles.billSummaryRow}>
            <Text style={styles.billSummaryLabel}>Fatura Atual</Text>
            <Text style={styles.billSummaryAmount}>R$ 1.234,56</Text>
          </View>
          <View style={styles.billSummaryRow}>
            <Text style={styles.billSummaryLabel}>Vencimento</Text>
            <Text style={styles.billSummaryDueDate}>10/10/2023</Text>
          </View>
        </View>

        <View style={styles.transactionList}>
          {/* Renderize a lista de transações da fatura aqui */}
          {/* Exemplo de uma transação: */}
          <View style={styles.transactionItem}>
            <Text style={styles.transactionTitle}>Compra em Supermercado</Text>
            <Text style={styles.transactionDate}>05/10/2023</Text>
            <Text style={styles.transactionAmount}>R$ 150,00</Text>
          </View>
          {/* Repita esse bloco para cada transação */}
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#7e0aca',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 15,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  billSummary: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  billSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  billSummaryLabel: {
    color: '#666',
    fontSize: 16,
  },
  billSummaryAmount: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
  },
  billSummaryDueDate: {
    color: '#666',
    fontSize: 16,
  },
  transactionList: {
    padding: 20,
  },
  transactionItem: {
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  transactionTitle: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionDate: {
    color: '#666',
    fontSize: 14,
  },
  transactionAmount: {
    color: '#8B10AE',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
