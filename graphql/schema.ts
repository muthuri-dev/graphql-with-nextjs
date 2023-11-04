export const typeDefs = `#graphql
type Novel{
    id:ID!
    title:String
    image:String
    createdAt:String
    updatedAt:String
    author:[Author]
}
type Author{
    id:ID!
    name :String
    novelId:String
}
type Query {
    novels:[Novel]
    authors:[Author]
    novel(id:ID!):Novel
}
type Mutation{
    addNovel(image:String, title:String):Novel
    updateNovel(id:ID!,title:String, image:String):Novel
    deleteNovel(id:ID!):Novel
    addAuthor(novelId:ID!,name:String):Author
    deleteAuthor(id:ID!):Author
}
`;