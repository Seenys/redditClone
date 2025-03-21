import { FlatList, Text, View } from "react-native";
import PostListItem from "../../../components/PostListItem";

import posts from "../../../../assets/data/posts.json";

export default function HomeScreen() {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
