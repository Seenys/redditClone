import { FC } from "react";
import { Post } from "../types";
import { Text, View, Image, StyleSheet } from "react-native";
import { formatDistanceToNowStrict } from "date-fns";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PostListItem: FC<Post> = ({
  created_at,
  description,
  group,
  id,
  image,
  nr_of_comments,
  title,
  upvotes,
  user,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={{ uri: group.image }} style={styles.headerImage} />
        <Text style={styles.group}>{group.name}</Text>
        <Text style={styles.time}>
          {formatDistanceToNowStrict(new Date(created_at))}
        </Text>
        <View style={{ marginLeft: "auto" }}>
          <Text style={styles.join}>Join</Text>
        </View>
      </View>
      <Text style={styles.bodyTittle}>{title}</Text>

      {
        // Image is not required, so we only show it if it exists
        image && (
          <Image
            source={{ uri: image! }}
            style={{ width: "100%", aspectRatio: 4 / 3, borderRadius: 10 }}
          />
        )
      }
      {!image && <Text numberOfLines={4}>{description}</Text>}

      <View style={styles.bodyButtons}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={[styles.bodyButtons, styles.iconBox]}>
            <MaterialCommunityIcons
              name="arrow-up-bold-outline"
              size={19}
              color="black"
            />
            <Text
              style={{ fontWeight: "500", marginLeft: 5, alignSelf: "center" }}
            >
              {upvotes}
            </Text>
            <View
              style={{
                width: 1,
                backgroundColor: "#D4D4D4",
                height: 14,
                marginHorizontal: 7,
                alignSelf: "center",
              }}
            />
            <MaterialCommunityIcons
              name="arrow-down-bold-outline"
              size={19}
              color="black"
            />
          </View>
          <View style={[styles.bodyButtons, styles.iconBox]}>
            <MaterialCommunityIcons
              name="comment-outline"
              size={19}
              color="black"
            />
            <Text
              style={{ fontWeight: "500", marginLeft: 5, alignSelf: "center" }}
            >
              {nr_of_comments}
            </Text>
          </View>
        </View>
        <View style={{ marginLeft: "auto", flexDirection: "row", gap: 10 }}>
          <MaterialCommunityIcons
            name="trophy-outline"
            size={19}
            color="black"
            style={styles.iconBox}
          />
          <MaterialCommunityIcons
            name="share-outline"
            size={19}
            color="black"
            style={styles.iconBox}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    gap: 4,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  headerImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  group: {
    fontWeight: "bold",
  },
  time: {
    color: "grey",
  },
  join: {
    backgroundColor: "blue",
    borderRadius: 9,
    paddingHorizontal: 7,
    paddingVertical: 3,
    color: "white",
    fontWeight: "bold",
  },
  bodyTittle: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  bodyButtons: {
    flexDirection: "row",
  },
  iconBox: {
    borderWidth: 0.5,
    borderColor: "#D4D4D4",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
export default PostListItem;
