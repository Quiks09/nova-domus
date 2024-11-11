import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Alert } from 'react-native';
import { Api } from '../lib/api';  
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [deleteUuid, setDeleteUuid] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        Api.get('user')
            .then(res => res.json())
            .then(userList => {
                if (!userList.error) {
                    setUsers(userList);
                }
            })
            .catch(e => {
                console.error('Error fetching user list:', e);
            });
    }, []);

    const deleteUser = (uuid) => {
        setDeleteUuid(uuid);
        setShowDeleteConfirmation(true);
    };

    const deleteCurrentUser = () => {
        Api.delete('user', { search: { uuid: deleteUuid } })
            .then(() => {
                Alert.alert('Usuario Eliminado');
                setUsers(users.filter(user => user.uuid !== deleteUuid));
                setShowDeleteConfirmation(false);
            })
            .catch(e => {
                console.error('Error deleting user:', e);
            });
    };

    const renderUser = ({ item }) => (
        <View style={styles.tableRow}>
            <View style={styles.userInfo}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <View style={styles.userDetails}>
                    <Text style={styles.userName}>{item.displayName}</Text>
                    <Text style={styles.userEmail}>{item.username}</Text>
                </View>
            </View>
            <Text style={styles.userRole}>{item.roles}</Text>
            <Text style={[styles.status, item.isEnabled ? styles.active : styles.inactive]}>
                {item.isEnabled ? 'Activo' : 'Inactivo'}
            </Text>
            <View style={styles.actions}>
                {/*<TouchableOpacity onPress={() => navigation.navigate('UserForm', { uuid: item.uuid })}>
                    <FontAwesome name="edit" style={styles.editIcon} />
                </TouchableOpacity>*/} 
                <TouchableOpacity onPress={() => deleteUser(item.uuid)}>
                    <FontAwesome name="trash" style={styles.deleteIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Lista de Usuarios</Text>
                {/*<TouchableOpacity onPress={() => navigation.navigate('UserForm')}>
                    <FontAwesome name="user-plus" style={styles.addIcon} />
                </TouchableOpacity>*/} 
            </View>
            <FlatList
                data={users}
                keyExtractor={(item) => item.uuid}
                renderItem={renderUser}
                ListEmptyComponent={<Text>No hay usuarios disponibles</Text>}
            />
            {showDeleteConfirmation && (
                <View style={styles.confirmationBox}>
                    <Text>Seguro desea eliminar el Usuario?</Text>
                    <View style={styles.confirmationActions}>
                        <TouchableOpacity onPress={deleteCurrentUser}>
                            <Text style={styles.confirmButton}>Sí</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setShowDeleteConfirmation(false)}>
                            <Text style={styles.cancelButton}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    addIcon: {
        marginLeft: 20,
        color: 'rgb(22, 218, 22)',
        fontSize: 24,
    },
    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#959393',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 2,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 10,
    },
    userDetails: {
        flexDirection: 'column',
    },
    userName: {
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: 12,
        color: '#555',
    },
    userRole: {
        flex: 1,
        textAlign: 'center',
        marginTop: 20,
    },
    status: {
        flex: 1,
        textAlign: 'center',
        paddingVertical: 5,
        borderRadius: 15,
        fontSize: 12,
        fontWeight: 'bold',
    },
    active: {
        backgroundColor: '#d4edda',
        color: '#155724',
    },
    inactive: {
        backgroundColor: '#f8d7da',
        color: '#721c24',
    },
    actions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    editIcon: {
        fontSize: 20,
        color: 'blueviolet',
        marginRight: 10,
    },
    deleteIcon: {
        fontSize: 20,
        color: 'red',
    },
    confirmationBox: {
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    confirmationActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
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

export default UserList;