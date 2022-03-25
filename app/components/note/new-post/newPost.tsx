const NewPost = () => {
  return (
    <>
      <form method="post">
        <div>
          <label htmlFor="post-name">Post's Name</label>
          <input type="text" id="post-name" name="postName" />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default NewPost;
