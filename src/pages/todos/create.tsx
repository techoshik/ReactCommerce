import { FormEvent, useState } from "react";

export default function CreateTodoPage() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState<FileList | null>();
  const [titleError, setTitleError] = useState('');

  async function readFile(): Promise<string> {
    const random = Math.random() * 100;

    if (random < 50) {
      throw new Error("Random number not allowed: " + random);
    }
    return `Hello, ${random}!`;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const value = await readFile();
      console.log({ value });
    } catch (error) {
      console.log('Error in running randomString()', error);
    }

    setTitleError('');

    // VALIDATE TITLE
    const titleTrimmed = title.trim();
    if (titleTrimmed === '') {
      setTitleError('Required field');
    } else if (titleTrimmed.length <= 3) {
      setTitleError('Title too short');
    }

    // SUCCESS CASE
    console.log({ titleTrimmed });
    const data = {
      title: titleTrimmed,
      file: image,
    };

    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "post",
      body: JSON.stringify(data),
    }).then((response) => {
      console.log({ response });
      return response.json();
    }).then((json) => {
      console.log({ json });
    }).catch((reason) => {
      console.log({ reason });
    }).finally(() => {
      console.log("Finally");
    });

    try {
      const response = await fetch("https://1jsonplaceholder.typicode.com/todos", {
        method: "post",
        body: JSON.stringify(data),
      });
      const json = await response.json();
      console.log({ json });
    } catch (error) {
      console.log({ error });
    } finally {
      console.log("Finally");
    }
  };

  return <div style={{ padding: 30 }}>
    <h1>Create Todo</h1>
    <form method="post" style={{ marginTop: 30 }} onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={title} onChange={(event) => {
        setTitle(event.target.value);
      }} />
      <br />
      <input name="file" type="file" accept="image/*" placeholder="Profile pic" onChange={(event) => {
        const list = event.target.files;
        console.log({ list });
        setImage(list);
      }} />
      <br />
      <img src={image?.length ? image?.item(0)?.webkitRelativePath : ""} alt="Selected Pic" width="100" height="100" />
      <br />
      <button type="submit">Save</button>

      <p style={{ color: "red" }}>{titleError}</p>
    </form>
  </div>;
}