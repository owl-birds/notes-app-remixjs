const NewText = () => {
  return (
    <div className="text-wrapper">
      <div className="text-header">
        <h4>New Text</h4>
      </div>
      <form method="post">
        <textarea className="text-input" name="_addText"></textarea>
        <button>Add Text</button>
      </form>
    </div>
  );
};

export default NewText;
