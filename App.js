import {View, Button, Text, Image, Pressable} from 'react-native';

const logoImg = require('./assets/adaptive-icon.png');


export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: "plum", padding: 60}}>
      <Button
        title="Press"
        onPress={() => console.log("Button Pressed")}
        color="midnightblue"
      />
      <Pressable onPress={() => console.log("Image Pressed")}>
        <Image source={logoImg} style={{width: 300, height: 300}}/>
      </Pressable>
      <Pressable onPress={() => console.log("Text Pressed")}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a consequat nisl. Vestibulum sed suscipit velit. Etiam lorem nibh, fringilla ut cursus sed, tincidunt id nisl. Aliquam dolor diam, aliquet tempor varius in, convallis non leo. Pellentesque rutrum justo pulvinar, blandit nisi ut, faucibus elit. Donec viverra tortor eu mattis scelerisque. Phasellus luctus elementum sapien ut hendrerit. Quisque tempor neque accumsan aliquet viverra. In a odio ex. Integer sed massa in diam tristique euismod. Quisque vitae varius nunc. Nam at malesuada leo. Cras in viverra mi.

          Vestibulum a semper dolor, ut dictum felis. Phasellus ut dui egestas urna blandit suscipit et at neque. Sed posuere felis in tortor iaculis bibendum semper non sapien. Fusce non sapien aliquam, aliquam leo et, euismod felis. Cras vel magna vel velit rhoncus tincidunt et maximus arcu. Curabitur quam augue, placerat vel luctus sit amet, semper eget nisl. Nunc faucibus condimentum egestas.
        </Text>
      </Pressable>
    </View>
  );
}