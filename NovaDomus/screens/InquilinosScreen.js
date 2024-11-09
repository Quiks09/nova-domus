import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert, StyleSheet } from 'react-native';
import { Api } from '../lib/api';
import { FontAwesome } from '@expo/vector-icons';
import TenantModal from '../components/InquilinosModal';

const InquilinosScreen = () => {
    const [tenants, setTenants] = useState([]);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [deleteUuid, setDeleteUuid] = useState('');
    const [selectedTenant, setSelectedTenant] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        Api.get('tenants')
            .then(res => res.json())
            .then(data => setTenants(data))
            .catch(e => console.error('Error fetching tenants:', e));
    }, []);

    const deleteTenant = (uuid) => {
        setDeleteUuid(uuid);
        setShowDeleteConfirmation(true);
    };

    const confirmDeleteTenant = () => {
        Api.delete('tenants', { search: { uuid: deleteUuid } })
            .then(() => {
                Alert.alert('Inquilino eliminado');
                setTenants(tenants.filter(t => t.uuid !== deleteUuid));
                setShowDeleteConfirmation(false);
            })
            .catch(e => console.error(e));
    };

    const handleViewDetails = (tenant) => {
        setSelectedTenant(tenant);
        setModalVisible(true);
    };

    const renderTenant = ({ item }) => (
        <View style={styles.row}>
            <View style={styles.tenantInfo}>
                <Text style={styles.tenantName}>{item.name}</Text>
                <Text style={styles.tenantPrice}>${item.precio ? item.precio.toFixed(2) : 'N/A'}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity onPress={() => handleViewDetails(item)} style={styles.detailsButton}>
                    <Text style={styles.detailsButtonText}>Ver Detalles</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTenant(item.uuid)}>
                    <FontAwesome name="trash" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Inquilinos</Text>
            <FlatList
                data={tenants}
                keyExtractor={(item) => item.uuid}
                renderItem={renderTenant}
                ListEmptyComponent={<Text>No hay inquilinos disponibles</Text>}
            />
            {showDeleteConfirmation && (
                <View style={styles.confirmationBox}>
                    <Text>¿Seguro desea eliminar al inquilino?</Text>
                    <TouchableOpacity onPress={confirmDeleteTenant}>
                        <Text style={styles.confirmButton}>Sí</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowDeleteConfirmation(false)}>
                        <Text style={styles.cancelButton}>No</Text>
                    </TouchableOpacity>
                </View>
            )}
            <TenantModal
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
                tenant={selectedTenant}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tenantInfo: {
        flexDirection: 'column',
    },
    tenantName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    tenantPrice: {
        color: '#555',
    },
    icon: {
        fontSize: 24,
        color: 'red',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailsButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    detailsButtonText: {
        color: 'white',
    },
    confirmationBox: {
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    confirmButton: {
        color: 'green',
        fontWeight: 'bold',
    },
    cancelButton: {
        color: 'red',
        fontWeight: 'bold',
    },
});

export default InquilinosScreen;
