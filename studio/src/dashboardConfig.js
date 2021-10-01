export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61570dbd593bdd00ba222f03",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-2wy3jwx6",
                  apiId: "90c8468c-4bfc-42ee-ad90-ff2c0cf2df55",
                },
                {
                  buildHookId: "61570dbde5a12d00b3ffb369",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-tm47jrzx",
                  apiId: "98d1ba49-95de-4b27-8e6a-18b010f35cd6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/AngelaGeary/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-tm47jrzx.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
