import { FlatList, Text, View } from "react-native";
import PostListItem from "../../../components/PostListItem";

import post from "../../../../assets/data/posts.json";
import { Post } from "../../../types";

export default function HomeScreen() {
  const item: Post = post[0];

  return (
    <View>
      <FlatList
        data={post}
        renderItem={({ item }) => <PostListItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
