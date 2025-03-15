import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";

export default function CreateScreen() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const goBack = () => {
    setTitle("");
    setBody("");
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign
          name="close"
          size={24}
          color="black"
          onPress={() => goBack()}
        />
        <Pressable onPress={() => {}} style={{ marginLeft: "auto" }}>
          <Text style={styles.postText}>Post</Text>
        </Pressable>
      </View>
      <View style={styles.communityContainer}>
        <Text style={styles.rStyles}>/r</Text>
        <Text style={{ fontWeight: 600 }}>Select a community</Text>
      </View>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: 10 }}
        >
          <TextInput
            placeholder="Title"
            style={{ fontSize: 20, fontWeight: "bold", paddingVertical: 20 }}
            value={title}
            onChangeText={(text) => setTitle(text)}
            multiline
          />
          <TextInput
            placeholder="Body text (optional)"
            style={{ fontSize: 20, fontWeight: "bold", paddingVertical: 20 }}
            value={body}
            onChangeText={(text) => setBody(text)}
            multiline
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  postText: {
    marginRight: "auto",
    color: "white",
    backgroundColor: "#115BCA",
    fontWeight: "bold",
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 10,
  },
  communityContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3",
    gap: 10,
  },
  rStyles: {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
});
