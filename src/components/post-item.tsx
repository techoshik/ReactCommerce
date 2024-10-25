import { Post } from "@/models/post";

interface Props {
  item: Post;
}

export function PostItem({ item }: Props) {
  return <div
    style={{
      border: 5,
      borderRadius: 10,
      backgroundColor: "aliceblue",
      margin: 10,
      padding: 10
    }}>
    <img src={item.image_url} alt={item.title} width={50} height={50} />
    <p>{item.title}</p>
  </div>
}