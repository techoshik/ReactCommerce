import { firebaseDatabase, firebaseStorage } from "@/configs/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ChangeEvent, useState } from "react";
import { v4 } from "uuid";

export default function CreatePostPage() {
  const [title, setTitle] = useState<string>('');
  const [image, setImage] = useState<Blob>();
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.item(0);
    if (file === undefined || file === null) {
      console.log('No file selected');
      return;
    } else {
      console.log('File selected', file);
      setImage(file);

      const url = URL.createObjectURL(file);
      console.log('File selected url', url);
      setSelectedImageUrl(url);
    }
  };

  const handleSubmit = async () => {
    if (!image) return;

    console.log('start - handleSubmit');

    console.log({ title, image, selectedImageUrl });

    // UPLOAD FILE
    const fileId = v4();
    const fileRef = ref(firebaseStorage, `${fileId}.png`);
    const fileResult = await uploadBytes(fileRef, image);
    console.log({ fileResult });

    const fileDownloadUrl = await getDownloadURL(fileRef);
    console.log({ fileDownloadUrl });

    // REQUEST DATA
    const id = v4();
    const requestData = {
      title: title,
      image_url: fileDownloadUrl,
    };
    const postRef = doc(firebaseDatabase, 'posts', id);

    await setDoc(postRef, requestData);

    console.log('end - handleSubmit');

    window.location.href = '/posts';
  };

  return <div style={{ padding: 30 }}>
    <input type="text" name="title" placeholder="Title" onChange={handleTitleChange} />
    <br />
    <br />
    <input type="file" accept="image/png" name="file" placeholder="Image" onChange={handleFileChange} />
    <br />
    {selectedImageUrl ?
      <img src={selectedImageUrl} alt="Selected file" width={300} height={300} />
      : null
    }
    <br />
    <button onClick={handleSubmit}>Save</button>
  </div>
}