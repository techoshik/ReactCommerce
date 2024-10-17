import { FormEvent, useState } from "react";

export default function CreateTodoPage() {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
  };

  return <div style={{ padding: 30 }}>
    <h1>Create Todo</h1>
    <form method="post" style={{ marginTop: 30 }} onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={title} onChange={(event) => {
        setTitle(event.target.value);
      }} />
      <button type="submit">Save</button>

      <p style={{ color: "red" }}>{titleError}</p>
    </form>
  </div>;
}