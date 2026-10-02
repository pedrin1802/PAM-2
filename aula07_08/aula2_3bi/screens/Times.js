import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../Estilo';

export default function Times({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>
        🏆 Grandes Times do Brasil
      </Text>

      <View style={styles.card}>
        <Text style={styles.nomeTime}>
          🔴⚪⚫ São Paulo FC
        </Text>

        <Text style={styles.textoCard}>
          Fundado em 1930, o São Paulo é um dos clubes mais tradicionais
          do futebol brasileiro.
        </Text>

        <Text style={styles.textoCard}>
          O Tricolor Paulista conquistou grandes títulos nacionais e
          internacionais e manda seus jogos no MorumBIS.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.nomeTime}>
          ⚫⚪ Corinthians
        </Text>

        <Text style={styles.textoCard}>
          Fundado em 1910, o Corinthians nasceu no bairro do Bom Retiro,
          em São Paulo.
        </Text>

        <Text style={styles.textoCard}>
          O clube possui uma das maiores torcidas do Brasil e ficou
          conhecido por importantes conquistas nacionais e internacionais.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.nomeTime}>
          🟢⚪ Palmeiras
        </Text>

        <Text style={styles.textoCard}>
          O Palmeiras foi fundado em 1914 com o nome de Palestra Italia.
        </Text>

        <Text style={styles.textoCard}>
          Ao longo de sua história, tornou-se um dos clubes com mais
          conquistas no futebol brasileiro.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.nomeTime}>
          ⚪⚫ Santos FC
        </Text>

        <Text style={styles.textoCard}>
          Fundado em 1912, o Santos ficou mundialmente conhecido principalmente
          pela geração de Pelé.
        </Text>

        <Text style={styles.textoCard}>
          O clube marcou a história do futebol brasileiro com títulos,
          craques e um estilo de jogo ofensivo.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text style={styles.textoBotao}>
          Sobre o App
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Inicio')}
      >
        <Text style={styles.textoBotao}>
          Voltar ao Início
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}