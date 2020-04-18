/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Button } from 'react-native';
import Modal from 'react-native-modal';

function customItem({name, description, image_url}) {
    const [isVisible, setVisible] = useState(false);

    const toggleModal = () => { setVisible(!isVisible) };

    function modal() {
        return (
            <View style={styles.containerModal}>
                <Modal isVisible={isVisible}>
                    <View>
                        <Text style={styles.textModal}>{name}</Text>
                        <Button title="Hide modal" onPress={toggleModal}/>
                    </View>
                </Modal>
            </View> 
        )
    }

    return (
        <TouchableWithoutFeedback onPress={toggleModal}>
            <View style={styles.container}>
                {modal()}
                <Image style={styles.photo} source={{uri: image_url}}/>
                <View style={styles.container_text}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    containerModal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textModal: {
        color: '#FFF',
        fontSize: 20,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
        borderRadius: 25,
        alignSelf: 'center',
    },
});

export default customItem