import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Logo from '../../assets/icons/logo';
import CustomInput from '../../components/CustomInput';
import PressableText from '../../components/PressableText';
import {colors} from '../../constants/colors';
import CustomButton from '../../components/CustomButton';
import LineText from '../../components/LineText';
import Eye from '../../assets/icons/Eye';
import EyeSlash from '../../assets/icons/EyeSlash';
import {useState} from 'react';

const SignUp = () => {
  const [visiblePassword, setVisiblePassword] = useState(true);

  return (
    <View style={styles.page}>
      <View style={styles.pageTop}>
        <Logo />
        <View style={styles.inputContainer}>
          {/* <CustomInput placeholder="Telefon Numarası" />
          <CustomInput placeholder="Şifre" />
        */}
          <CustomInput placeholder="Şifre Girin" inputType="password" />
          {/* <CustomInput
          placeholder="Şifre Tekrar"
          /> */}
        </View>
        <CustomButton buttonTitle="Kayıt Ol" />
        <View style={styles.chooseBar}>
          <LineText />
          <View style={styles.textBar}>
            <PressableText
              text="Facebook ile Giriş Yap"
              color={colors.BLUE}
              hasIcon={true}
            />
            <PressableText text="Şifreni mi unuttun?" color={colors.WHITE} />
          </View>
        </View>
      </View>
      <View style={styles.pageBottom}>
        <Text style={[styles.facebookText, {color: colors.WHITE}]}>
          Zaten Hesabın Var Mı Giriş Yap ?
        </Text>
        <PressableText text=" Giriş Yap" color={colors.BLUE} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.BLACK,
    flex: 1,
    padding: 16,
    gap: 20,
  },
  pageTop: {
    backgroundColor: colors.BLACK,
    borderWidth: 0.4,
    borderColor: colors.GRAY,
    alignItems: 'center',
    paddingTop: 25,
    paddingHorizontal: 30,
  },
  inputContainer: {
    marginTop: 30,
    gap: 10,
    width: '100%',
    marginBottom: 15,
  },
  chooseBar: {
    width: '100%',
    marginVertical: 20,
  },
  textBar: {
    marginTop: 30,
    alignItems: 'center',
    gap: 25,
  },
  pageBottom: {
    borderWidth: 0.4,
    borderColor: colors.GRAY,
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
