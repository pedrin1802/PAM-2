import { View, Text, FlatList } from 'react-native';

import styles from './Estilo';

export default function App() {

    const usuarios = [
        { id: '1', nome: 'João', img: '84358734yt' },
        { id: 200, nome: 'Emanuela' },
    ];

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Bem-vindo!</Text>

            <Text style={styles.subtitulo}>Lista de usuários:</Text>

            <FlatList
                data={usuarios}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.nome}>{item.nome}</Text>
                    </View>
                )}
            />

        </View>
    );
}