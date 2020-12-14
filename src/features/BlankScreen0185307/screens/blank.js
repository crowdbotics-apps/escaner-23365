import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_7: "", TextInput_11: "", Switch_13: true }

  render = () => (
    <View>
      <Image source={{ uri: "https://via.placeholder.com/150" }} />
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_11}
        onChangeText={nextValue => this.setState({ TextInput_11: nextValue })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_13}
        value={this.state.Switch_13}
        onValueChange={nextChecked => this.setState({ Switch_13: nextChecked })}
      />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Image_3: {},
  Text_5: {},
  TextInput_7: {},
  Text_9: {},
  TextInput_11: {},
  Switch_13: { alignSelf: "flex-start" },
  Button_15: {}
})
