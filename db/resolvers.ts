const courses = [
  {
    title: "React 16",
    technology: "JS ES6 and React",
  },
  {
    title: "GraphQL",
    technology: "JS ES6 and GraphQL",
  },
];

export const resolvers = {
  Query: {
    getCourses: (_: any, { input }: any, ctx: any) => {
      console.log("ctx:", ctx);
      const result = courses.filter((course) =>
        course.technology.toLowerCase().includes(input.technology.toLowerCase())
      );
      return result;
    },
    getTechnology: () => courses,
  },
};
