import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Api } from '../lib/api';
import InmuebleCardScreen from './InmuebleCardScreen';
import InmuebleModalScreen from './InmuebleModalScreen';

const InmueblesScreen = () => {
  const [inmuebles, setInmuebles] = useState([]);
  const [selectedInmueble, setSelectedInmueble] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    Api.get('inmuebles')
      .then(res => res.json())
      .then(data => setInmuebles(data))
      .catch(err => console.error('Error fetching inmuebles:', err));
  }, []);

  const handleExpandClick = (inmueble) => {
    setSelectedInmueble(inmueble);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedInmueble(null);
  };

  const renderInmueble = ({ item }) => (
    <InmuebleCardScreen
      inmueble={item}
      onExpandClick={() => handleExpandClick(item)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={inmuebles}
        renderItem={renderInmueble}
        keyExtractor={item => item._id.toString()}
        contentContainerStyle={styles.list}
      />

      <InmuebleModalScreen
        visible={modalVisible}
        onClose={handleCloseModal}
        inmueble={selectedInmueble}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  list: {
    paddingBottom: 20,
  },
});

export default InmueblesScreen;
