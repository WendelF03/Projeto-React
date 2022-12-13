import React from "react";
import { Image, StyleSheet, Text, View, Linking } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/wd.jpg')} style={styles.profile} />
      <Text style={styles.name}>
        Wendel Pedro -
        <Text style={styles.age}> 20 </Text>
      </Text>
      <Text style={styles.text}>
        • Sobre: Faz parte do programa Embarque Digital, programa educacional de apoio à formação de capital humano especializado na área de tecnologias de informação e comunicação na cidade do Recife. Atualmente cursando o 3º período de Análise e Desenvolvimento de Sistemas na Faculdade Senac Pernambuco.
      </Text>
      <Text style={styles.text}>
        • Linguagens: HTML, CSS, JS, JAVA, PHP, C++, C#.
      </Text>
      <Text style={styles.text}>
        • Bancos de dados: SQL, MYSQL, PostgreSQL, MongoDB.
      </Text>
      <View style={styles.images}>
        <Text onPress={() => Linking.openURL('https://github.com/WendelF03')}>
          <Image source={require('./assets/github.png')} style={styles.icons} ></Image>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#45454a',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profile: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: '#628FDB'
  },
  name: {
    color: "#C9D1D9",
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 20
  },
  age: {
    color: '#628FDB'
  },
  text: {
    fontSize: 17,
    color: '#FFF',
    maxWidth: 400,
    textAlign: 'justify',
    fontFamily: 'Verdana',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10
  },
  social: {
    fontSize: 17,
    color: '#FFF'
  },
  images: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: 250,
    justifyContent: 'space-around',
    marginTop: 20
  },
  icons: {
    width: 50,
    height: 50,
    color: "#FFF"
  }
});