const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const seed = async () => {
  await prisma.topic.deleteMany({});
  //   await prisma.post.deleteMany({});
  const topic = await prisma.topic.create({
    data: {
      title: "TEST'S TITLE",
    },
  });
  await Promise.all(
    getPosts().map(async (post) => {
      const data = {
        topicId: topic.id,
        ...post,
      };
      return await prisma.post.create({ data });
      //   const tempPost = await prisma.post.create({ data });
      //   const text = {
      //     postId: tempPost.id,
      //     content: `TEXT TEST ${tempPost.id}`,
      //   };
      //   await prisma.text.create({ text });
      //   const pict = {
      //     postId: tempPost.id,
      //     imageSource: `Image source for ${tempPost.id}`,
      //   };
      //   return await prisma.pict.create({ pict });
    })
  );
};
const getPosts = () => {
  return [
    {
      title: "JavaScript Performance Tips",
    },
    {
      title: "Tailwind vs. Bootstrap",
    },
    {
      title: "Writing Great Unit Tests",
    },
    {
      title: "What Is New In PHP 8?",
    },
  ];
};
seed();
// export {};
