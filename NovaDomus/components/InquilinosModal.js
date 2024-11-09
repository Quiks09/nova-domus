import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TenantModal = ({ visible, onClose, tenant }) => {
    if (!tenant) return null;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Detalles del Inquilino</Text>
                    <Text><Text style={styles.label}>Nombre:</Text> {tenant.name}</Text>
                    <Text><Text style={styles.label}>Precio:</Text> ${tenant.precio?.toFixed(2) || 'N/A'}</Text>
                    <Text><Text style={styles.label}>Inicio de Contrato:</Text> {tenant.inicioContrato ? new Date(tenant.inicioContrato).toLocaleDateString() : 'N/A'}</Text>
                    <Text><Text style={styles.label}>Fin de Contrato:</Text> {tenant.finContrato ? new Date(tenant.finContrato).toLocaleDateString() : 'N/A'}</Text>
                    {tenant.contacto && <Text><Text style={styles.label}>Contacto:</Text> {tenant.contacto}</Text>}
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default TenantModal;
