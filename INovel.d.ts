import {Novel} from ".prisma/client";

interface INovel extends Novel{
    author:Author[]
}