/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ItemRow from './itemRow';

const DATA = [
  {
    title: 'Luke Skywalker',
    description: 'aaaaaaaaaaaaaaaaa',
    thumbUrl: 'https://reactnative.dev/img/tiny_logo.png'
  },
  {
    title: 'Anton Kelm',
    description: 'bbbbbbbbbbbbbbbbbbbb',
    thumbUrl: 'https://s3.eu-central-1.amazonaws.com/storage.propmap.io/staging/uploads/user/avatar/25/user_account_profile_avatar_person_student_male-512.jpg',
  },
  {
    title: 'Daniel Dinh',
    description: 'bbbbbbbbbbbbbbbbbbbb',
    thumbUrl: 'https://s3.eu-central-1.amazonaws.com/storage.propmap.io/staging/uploads/user/avatar/53/userPhoto-9.jpg',
  },
  {
    title: 'Donald Trump',
    description: 'bbbbbbbbbbbbbbbbbbbb',
    thumbUrl: 'https://s3.eu-central-1.amazonaws.com/storage.propmap.io/staging/uploads/user/avatar/103/image-2.jpg',
  },
  {
    title: 'Cristiano Ronaldo',
    description: 'bbbbbbbbbbbbbbbbbbbb',
    thumbUrl: 'https://s3.eu-central-1.amazonaws.com/storage.propmap.io/staging/uploads/user/avatar/14/image-22.jpg',
  },
];

function ListView() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <ItemRow
          style={styles.item}
          name={item.title}
          description={item.description}
          image_url={item.thumbUrl}
          />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default ListView
