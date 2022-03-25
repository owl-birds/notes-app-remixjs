const NewTopic = () => {
  return (
    <>
      <form method="post">
        <div>
          <label htmlFor="topic-name">Topic's Name</label>
          <input type="text" id="topic-name" name="topicName" />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default NewTopic;
