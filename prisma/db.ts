import {PrismaClient} from "@prisma/client";

const globalForPrisma = global as unknown as { prism: PrismaClient }
export const prisma = globalForPrisma.prism || new PrismaClient({
    log: ["query"]
});
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prism = prisma;
}