import React, { useState } from 'react';

import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  useWindowDimensions
} from 'react-native';

import styles from './Estilo';

export default function App() {

  const [nome, setNome] = useState('');
  const [time, setTime] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const { width } = useWindowDimensions();

  const larguraCard =
    width >= 1000 ? '23%' :
    width >= 650 ? '31%' :
    '48%';

  const times = [
    {
      id: '1',
      nome: 'São Paulo',
      simbolo: '🔴⚪⚫',
      local: 'São Paulo - SP',
      historia:
        'O São Paulo possui uma trajetória marcada por grandes conquistas nacionais e internacionais.'
    },
    {
      id: '2',
      nome: 'Corinthians',
      simbolo: '⚫⚪',
      local: 'São Paulo - SP',
      historia:
        'O Corinthians possui uma das maiores torcidas do país e uma história muito forte no futebol brasileiro.'
    },
    {
      id: '3',
      nome: 'Palmeiras',
      simbolo: '🟢⚪',
      local: 'São Paulo - SP',
      historia:
        'O Palmeiras construiu uma trajetória de muitos títulos e tradição no futebol nacional.'
    },
    {
      id: '4',
      nome: 'Santos',
      simbolo: '⚪⚫',
      local: 'Santos - SP',
      historia:
        'O Santos ficou mundialmente conhecido por sua história, seus craques e pela geração de Pelé.'
    },
    {
      id: '5',
      nome: 'Flamengo',
      simbolo: '🔴⚫',
      local: 'Rio de Janeiro - RJ',
      historia:
        'O Flamengo possui uma enorme torcida e grandes conquistas ao longo de sua história.'
    },
    {
      id: '6',
      nome: 'Fluminense',
      simbolo: '🟢🔴⚪',
      local: 'Rio de Janeiro - RJ',
      historia:
        'O Fluminense é um dos clubes mais tradicionais do futebol carioca.'
    },
    {
      id: '7',
      nome: 'Botafogo',
      simbolo: '⭐⚫⚪',
      local: 'Rio de Janeiro - RJ',
      historia:
        'O Botafogo possui grande tradição e revelou importantes nomes da história do futebol.'
    },
    {
      id: '8',
      nome: 'Vasco',
      simbolo: '⚫⚪🔴',
      local: 'Rio de Janeiro - RJ',
      historia:
        'O Vasco possui uma história importante dentro e fora dos campos.'
    },
    {
      id: '9',
      nome: 'Atlético-MG',
      simbolo: '⚫⚪🐔',
      local: 'Belo Horizonte - MG',
      historia:
        'O Atlético Mineiro possui uma torcida apaixonada e uma forte tradição no futebol brasileiro.'
    },
    {
      id: '10',
      nome: 'Cruzeiro',
      simbolo: '🔵⚪',
      local: 'Belo Horizonte - MG',
      historia:
        'O Cruzeiro é um dos grandes clubes de Minas Gerais e possui diversas conquistas importantes.'
    },
    {
      id: '11',
      nome: 'Grêmio',
      simbolo: '🔵⚫⚪',
      local: 'Porto Alegre - RS',
      historia:
        'O Grêmio possui uma trajetória marcada por grandes conquistas nacionais e internacionais.'
    },
    {
      id: '12',
      nome: 'Internacional',
      simbolo: '🔴⚪',
      local: 'Porto Alegre - RS',
      historia:
        'O Internacional é um dos clubes mais tradicionais do sul do Brasil.'
    },
    {
      id: '13',
      nome: 'Bahia',
      simbolo: '🔵🔴⚪',
      local: 'Salvador - BA',
      historia:
        'O Bahia possui grande tradição no futebol nordestino.'
    },
    {
      id: '14',
      nome: 'Vitória',
      simbolo: '🔴⚫',
      local: 'Salvador - BA',
      historia:
        'O Vitória possui grande importância no futebol baiano.'
    },
    {
      id: '15',
      nome: 'Athletico-PR',
      simbolo: '🔴⚫',
      local: 'Curitiba - PR',
      historia:
        'O Athletico Paranaense ganhou bastante destaque no futebol brasileiro nas últimas décadas.'
    },
    {
      id: '16',
      nome: 'Coritiba',
      simbolo: '🟢⚪',
      local: 'Curitiba - PR',
      historia:
        'O Coritiba é um dos clubes mais tradicionais do Paraná.'
    },
    {
      id: '17',
      nome: 'Chapecoense',
      simbolo: '🟢⚪',
      local: 'Chapecó - SC',
      historia:
        'A Chapecoense representa Santa Catarina e possui uma trajetória muito marcante.'
    },
    {
      id: '18',
      nome: 'Red Bull Bragantino',
      simbolo: '🔴⚪',
      local: 'Bragança Paulista - SP',
      historia:
        'O Red Bull Bragantino representa Bragança Paulista e vem crescendo no cenário nacional.'
    },
    {
      id: '19',
      nome: 'Mirassol',
      simbolo: '🟡🟢',
      local: 'Mirassol - SP',
      historia:
        'O Mirassol representa o interior paulista e vem ganhando espaço no futebol brasileiro.'
    },
    {
      id: '20',
      nome: 'Remo',
      simbolo: '🔵⚪',
      local: 'Belém - PA',
      historia:
        'O Remo é um tradicional clube do futebol paraense.'
    }
  ];

  function confirmarTorcida() {

    if (nome.trim() === '') {
      setMensagem('Digite seu nome primeiro!');
      return;
    }

    if (!time) {
      setMensagem('Escolha um time!');
      return;
    }

    setMensagem(
      `⚽ ${nome}, você escolheu o ${time.nome}!`
    );
  }

  return (
    <ScrollView style={styles.pagina}>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55'
        }}
        style={styles.imagemTopo}
        resizeMode="cover"
      />

      <View style={styles.container}>

        <View style={styles.cabecalho}>

          <Text style={styles.titulo}>
            ⚽ Arena do Brasileirão
          </Text>

          <Text style={styles.subtitulo}>
            Escolha seu time e conheça um pouco da história
          </Text>

        </View>

        <View style={styles.cardPrincipal}>

          <Text style={styles.tituloCard}>
            👤 Torcedor
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={setNome}
          />

        </View>

        <Text style={styles.secaoTitulo}>
          🏆 Escolha seu time
        </Text>

        <View style={styles.listaTimes}>

          {times.map((item) => (

            <TouchableOpacity
              key={item.id}
              style={[
                styles.timeCard,
                { width: larguraCard },
                time?.id === item.id && styles.timeSelecionado
              ]}
              onPress={() => setTime(item)}
            >

              <Text style={styles.timeEmoji}>
                {item.simbolo}
              </Text>

              <Text style={styles.timeNome}>
                {item.nome}
              </Text>

              <Text style={styles.timeLocal}>
                {item.local}
              </Text>

            </TouchableOpacity>

          ))}

        </View>

        {time && (

          <View style={styles.detalhes}>

            <Text style={styles.detalhesEmoji}>
              {time.simbolo}
            </Text>

            <Text style={styles.detalhesTitulo}>
              {time.nome}
            </Text>

            <Text style={styles.detalhesLocal}>
              📍 {time.local}
            </Text>

            <View style={styles.linha} />

            <Text style={styles.historiaTitulo}>
              Um pouco da história
            </Text>

            <Text style={styles.historia}>
              {time.historia}
            </Text>

          </View>

        )}

          <View style={styles.areaBotao}>

  <Button
    title="Confirmar meu time"
    color="#f59e0b"
    onPress={confirmarTorcida}
  />

            </View> 

        {mensagem !== '' && (

          <View style={styles.resultado}>

            <Text style={styles.resultadoTexto}>
              {mensagem}
            </Text>

          </View>

        )}

        <Text style={styles.rodape}>
          ⚽ Futebol é paixão, história e torcida
        </Text>

      </View>

    </ScrollView>
  );
}