// React Stuffs
import { useState } from "react";

// remix stuffs
import { Link, Scripts } from "remix";

// COMPONENTS
import NewPost from "../new-post/";

interface Props {
  data: Array<any>;
  topic: {
    title: string;
    id: string;
  };
}

const Topic = (props: Props) => {
  const { data, topic } = props;
  // STATE REACT
  const [isAddPost, setIsAddPost] = useState(false);
  return (
    <section className="topics-wrapper">
      <h1 className="topics-title">{topic.title}</h1>
      <div className="topics-add-outer-wrapper">
        <div className="topics-add-inside-wrapper">
          <div className="post-btn-wrapper ">
            <form method="post">
              <input type="hidden" name="_method" value="delete" />
              <button className="btn-delete-post">-</button>
            </form>
            <button
              className="btn-add-post"
              onClick={() => setIsAddPost((prevValue) => !prevValue)}
            >
              +
            </button>
          </div>

          <Scripts />
          {isAddPost ? <NewPost /> : null}
        </div>
      </div>
      <div className="topics-list">
        {data.map((post: any) => (
          <div key={post.id} className="topics-title-link-wrapper">
            <Link
              className="post-link"
              to={`/topics/${topic.id}/posts/${post.id}`}
            >
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Topic;
