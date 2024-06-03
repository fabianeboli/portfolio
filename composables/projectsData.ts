export const projectsData: IProject[] = [
  {
    id: 1,
    title: "Clonebook",
    description: "Implementation of Social Network inspired by Facebook. Users' passwords are encrypted. Accounts are authorized by tokens. Current functionalities are: creating accounts, writing and liking posts and comments, searching other user profiles, adding, accepting, and removing friends from the friends list, and using chat.",
    image: "/projectImages/clonebook.png",
    technologies: [Technology.TypeScript, Technology.React, Technology.Redux, Technology.GraphQL, Technology.Node, Technology.Express, Technology.Mongo, Technology.Moongose, Technology.StyledComponents, Technology.Supertest, Technology.Bcrypt, Technology.Jwt],
    link: "https://google.com",
    repository: "https://github.com/fabianeboli/facebook-clone",
    demo: "https://facebook-clone-production-ef75.up.railway.app/"
  },
  {
    id: 2,
    title: "ChatApp",
    description: "An application that enables users to chat chatrooms. Upon creating a new account, users can create a new chatroom or join an existing one. If the chatroom is owned by the user, it is possible also to edit it or delete it.",
    image: "/projectImages/chat_app.png",
    videoLink: "/projectVideos/chat_app.mp4",
    technologies: [Technology.TypeScript, Technology.React, Technology.Reactstrap, Technology.Redux, Technology.ASP_NET, Technology.EntityFramework, Technology.Bcrypt, Technology.PostgreSQL, Technology.Jwt],
    repository: "https://github.com/fabianeboli/chatroom-netcore",
  },
  {
    id: 3,
    title: "Lights out",
    description: "An implementation of the electronic game in which player must toggle adjacent lights until all of them switched off",
    image: "/projectImages/lights_out.png",
    technologies: [Technology.TypeScript, Technology.React, Technology.Sass],
    repository: "https://github.com/fabianeboli/lights-out",
    demo: "https://mvb9f.csb.app/"
  },
  {
    id: 4,
    title: "HealthBlockchain",
    description: "Implementation for supporting healthcare by enhancing the protection of personal and sensitive patient data. Application supports daily doctor visits by providing functionality of adding new physical examinations and prescriptions, and checking them. Data is stored by using blockchain framework Hyperledger Fabric.",
    image: "",
    technologies: [Technology.HyperledgerFabric, Technology.Node, Technology.TypeScript, Technology.React, Technology.MaterialUi],
    repository: "https://github.com/fabianeboli/HealthBlockchain",
  },
  {
    id: 5,
    title: "Statistician's Blog",
    image: "/projectImages/stat_blog.png",
    description: "An application that enables users to chat chatrooms. Upon creating a new account, users can create a new chatroom or join an existing one. If the chatroom is owned by the user, it is possible also to edit it or delete it.",
    technologies: [Technology.TypeScript, Technology.React, Technology.Redux, Technology.Sass, Technology.Strapi, Technology.Axios],
    repository: "https://github.com/fabianeboli/stat_blog",
  },
  {
    id: 6,
    title: "Dietician's Page",
    description: "A template for a dietician featuring ability to add posts and showcasing available visits.",
    image: "/projectImages/dietician.png",
    technologies: [Technology.Vue, Technology.Pinia, Technology.Tailwind, Technology.Strapi, Technology.Sass],
    repository: "https://github.com/fabianeboli/vue-template-frontend",
  }
];

export const getProject = (id: number): IProject | undefined => {
  return projectsData.find(project => project.id === id);
}

