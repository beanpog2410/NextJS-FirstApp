import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function NewestList() {
  const router = useRouter();
  const newestPost = useSelector((state) => state.posts.newestPosts);
  console.log(newestPost);

  return (
    <Card>
      <CardHeader title="Tin mới nhất"></CardHeader>
      <Divider />
      <CardContent>
        <List>
          {newestPost.map((item) => {
              const link = "/post/" + item.id;
            return (
              <ListItem button key={item.id}>
                <ListItemText>
                  <Link href={link}>{item.title}</Link>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
}
