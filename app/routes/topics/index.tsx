import Topics from "../../components/note/topics/";

// REMIX STUFFSS
import { useLoaderData } from "remix";

// Database
import { db } from "~/utils/db.server";

// type
import type { FunctionComponent } from "react";

// Loader
export const loader = async () => {
  const data = {
    topics: await db.topic.findMany({
      select: {
        id: true,
        title: true,
      },
    }),
  };
  return data;
};

const Index: FunctionComponent = () => {
  const { topics } = useLoaderData();
  // console.log(topics);
  return (
    <>
      <Topics data={topics} />
    </>
  );
};

export default Index;
