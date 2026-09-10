import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [nota, setNota] = useState('');
  const [resultado, setResultado] = useState('');

  function avaliarNota() {
    const valor = parseFloat(nota.replace(',', '.'));
    
    if (isNaN(valor)) {
      setResultado('Por favor, digite uma nota válida.');
      return;
    }

    if (valor >= 6) {
      setResultado('Status: Aprovado! 🎉');
    } else {
      setResultado('Status: Reprovado ou Recuperação. 📚');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Avaliador de Notas</Text>
      
      <Text style={styles.label}>Média Final:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 8.5"
        keyboardType="numeric"
        value={nota}
        onChangeText={setNota}
      />
      
      <TouchableOpacity style={styles.botao} onPress={avaliarNota}>
        <Text style={styles.textoBotao}>Verificar Status</Text>
      </TouchableOpacity>
      
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#007AFF',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e0245e',
    marginTop: 10,
  },
});