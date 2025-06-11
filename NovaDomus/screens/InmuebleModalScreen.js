import React, { useState } from 'react';
import { View, Text, Image, Modal, StyleSheet, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const InmuebleModalScreen = ({ visible, onClose, inmueble }) => {
  const [imageViewerVisible, setImageViewerVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!inmueble) return null;

  const handleImagePress = (index) => {
    setSelectedImageIndex(index);
    setImageViewerVisible(true);
  };

  const renderImage = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleImagePress(index)}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
    </TouchableOpacity>
  );

  const renderFullSizeImage = ({ item }) => (
    <Image source={{ uri: item.image_url }} style={styles.fullSizeImage} />
  );

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>{inmueble.city}</Text>
            <Text style={styles.price}>{inmueble.price} {inmueble.currency}</Text>
            <Text style={styles.description}>{inmueble.description}</Text>

            {/* Image Carousel */}
            <FlatList
              data={inmueble.photos}
              renderItem={renderImage}
              horizontal
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />

            <View style={styles.detailsContainer}>
              <Text style={styles.detail}><Text style={styles.bold}>Dirección:</Text> {inmueble.address}</Text>
              <Text style={styles.detail}><Text style={styles.bold}>Área:</Text> {inmueble.area} m²</Text>
              <Text style={styles.detail}><Text style={styles.bold}>Habitaciones:</Text> {inmueble.rooms}</Text>
              <Text style={styles.detail}><Text style={styles.bold}>Baños:</Text> {inmueble.bathrooms}</Text>
            </View>
          </ScrollView>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={imageViewerVisible} transparent animationType="fade">
          <View style={styles.fullImageViewerContainer}>
            <FlatList
              data={inmueble.photos}
              renderItem={renderFullSizeImage}
              horizontal
              keyExtractor={(item, index) => index.toString()}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              initialScrollIndex={selectedImageIndex}
            />
            <TouchableOpacity style={styles.closeButtonFullSize} onPress={() => setImageViewerVisible(false)}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  modalContent: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
  },
  detailsContainer: {
    marginTop: 15,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#127281',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 15,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  fullImageViewerContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullSizeImage: {
    width: screenWidth,
    height: screenHeight * 0.75,
    resizeMode: 'contain',
  },
  closeButtonFullSize: {
    position: 'absolute',
    top: 30,
    right: 20,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
});

export default InmuebleModalScreen;
