import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Estilo';

export default function Sobre({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        ⚽ Sobre
      </Text>

      <Text style={styles.texto}>
        O Mundo do Futebol é um aplicativo criado para praticar
        navegação entre telas utilizando React Native.
      </Text>

      <Text style={styles.texto}>
        Aqui o usuário pode navegar pelas páginas e conhecer
        alguns times do futebol brasileiro.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Inicio')}
      >
        <Text style={styles.textoBotao}>
          Voltar ao Início
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Times')}
      >
        <Text style={styles.textoBotao}>
          Ver Times
        </Text>
      </TouchableOpacity>

    </View>
  );
}