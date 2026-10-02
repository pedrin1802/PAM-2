import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Estilo';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.emoji}>⚽</Text>

      <Text style={styles.titulo}>
        Mundo do Futebol
      </Text>

      <Text style={styles.texto}>
        Bem-vindo ao aplicativo para quem gosta de futebol!
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Times')}
      >
        <Text style={styles.textoBotao}>
          Ver Times
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text style={styles.textoBotao}>
          Sobre o App
        </Text>
      </TouchableOpacity>

    </View>
  );
}