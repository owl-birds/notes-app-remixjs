// REACT STUFFS
import { useState } from "react";
// REMIX STUFFS
import { Link, Scripts } from "remix";
// COMPONENTS
import NewTopic from "../new-topic/";

// intefaces
interface Props {
  data: Array<any>;
}

const Topics = (props: Props) => {
  const { data } = props;
  const [isAddTopic, setIsAddTopic] = useState(false);
  //   console.log(data);
  return (
    <>
      <section className="topics-wrapper">
        <h1 className="topics-title">TOPICS</h1>
        <div className="topics-add-outer-wrapper">
          <div className="topics-add-inside-wrapper">
            <button
              className="btn-add-topic"
              onClick={() => setIsAddTopic((prevValue) => !prevValue)}
            >
              +
            </button>
            <Scripts />
            {isAddTopic ? <NewTopic /> : null}
          </div>
        </div>
        <div className="topics-list">
          {data.map((row) => (
            <div key={row.id} className="topics-title-link-wrapper">
              <Link className="topic-link" to={`/topics/${row.id}`}>
                {row.title}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Topics;
