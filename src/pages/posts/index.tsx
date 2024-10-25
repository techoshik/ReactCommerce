import { PostItem } from "@/components/post-item";
import { firebaseDatabase } from "@/configs/firebase-config";
import { Post } from "@/models/post";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";



export default function PostsPage() {
  const [list, setList] = useState<Post[]>([]);

  useEffect(() => {
    const coll = collection(firebaseDatabase, 'posts');
    getDocs(coll).then((snapshot) => {
      const newList: Post[] = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          title: doc.get('title'),
          image_url: doc.get('image_url'),
        }
      });
      setList(newList);
    });

  }, []);

  return <div style={{ padding: 20 }}>
    <div style={{
      margin: 20,
      display: "flex",
      flex: 1,
      justifyContent: "space-between",
      alignContent: "center",
    }}>
      <h1 style={{ display: "inline-block" }}>Posts</h1>
      <Link href="/posts/create">Add</Link>
    </div>
    {list.map((item) => <PostItem key={item.id} item={item} />)}
  </div>
}