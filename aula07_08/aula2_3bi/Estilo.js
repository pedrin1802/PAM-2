import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  pagina: {
    flex: 1,
    backgroundColor: '#0f172a',
  },

  imagemTopo: {
    width: '100%',
    aspectRatio: 16 / 6,
    minHeight: 180,
    maxHeight: 380,
  },

  container: {
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
    padding: 20,
    paddingBottom: 50,
  },

  cabecalho: {
    backgroundColor: '#1e293b',
    borderRadius: 18,
    padding: 22,
    marginTop: -35,
    marginBottom: 25,
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 16,
    color: '#cbd5e1',
    textAlign: 'center',
    marginTop: 8,
  },

  cardPrincipal: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 20,
    marginBottom: 25,
  },

  tituloCard: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 15,
  },

  input: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
  },

  secaoTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },

  listaTimes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  timeCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,

    minHeight: 140,

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 3,
    borderColor: 'transparent',
  },

  timeSelecionado: {
    backgroundColor: '#fef3c7',
    borderColor: '#f59e0b',
  },

  timeEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },

  timeNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
  },

  timeLocal: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 5,
    textAlign: 'center',
  },

  detalhes: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 25,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },

  detalhesEmoji: {
    fontSize: 55,
  },

  detalhesTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 10,
  },

  detalhesLocal: {
    fontSize: 15,
    color: '#64748b',
    marginTop: 5,
  },

  linha: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 20,
  },

  historiaTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
  },

  historia: {
    fontSize: 16,
    lineHeight: 24,
    color: '#334155',
    textAlign: 'center',
    maxWidth: 700,
  },

  areaBotao: {
    marginTop: 5,
  },

  resultado: {
    backgroundColor: '#fef3c7',
    borderRadius: 15,
    padding: 18,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#f59e0b',
  },

  resultadoTexto: {
    color: '#92400e',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  rodape: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 30,
  },

});