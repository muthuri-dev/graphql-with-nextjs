import {Context} from "@/pages/api/graphql";

export const resolvers = {
    Query: {
        novels: async (parent: any, args: any, context: Context) => {
            return await context.prisma.novel.findMany();
        },
        novel: async (parent: any, args: any, context: Context) => {
            return await context.prisma.novel.findUnique({where: {id: args.id}})
        }
    },
    Novel: {
        author: async (parent: any, args: any, context: Context) => {
            return await context.prisma.author.findMany({where: {novelId: parent.id}});
        }
    },
    Mutation: {
        addNovel: async (parent: any, args: any, context: Context) => {
            return await context.prisma.novel.create({data: {image: args.image, title: args.title}})
        },
        updateNovel: async (parent: any, args: any, context: Context) => {
            return await context.prisma.novel.update({where: {id: args.id}, data: {title: args.title, image: args.image}})
        },
        deleteNovel: async (parent: any, args: any, context: Context) => {
            return await context.prisma.novel.delete({where: {id: args.id}})
        },
        addAuthor: async (parent: any, args: any, context: Context) => {
            return await context.prisma.author.create({data: {novelId: args.novelId, name: args.name}})
        },
        deleteAuthor: async (parent: any, args: any, context: Context) => {
            return await context.prisma.author.delete({where: {id: args.id}})
        }
    }
};