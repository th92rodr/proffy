import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import WhatsappIcon from '../../assets/images/icons/whatsapp.png';
import UnFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import HeartOutlineIcon from '../../assets/images/icons/heart-outline.png';

import styles from './styles';

interface TeacherItemProps {}

const TeacherItem: React.FC<TeacherItemProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/diego3g.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}></Text>
          <Text style={styles.subject}></Text>
        </View>
      </View>

      <Text style={styles.bio}></Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={HeartOutlineIcon} /> */}
            <Image source={UnFavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={WhatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
