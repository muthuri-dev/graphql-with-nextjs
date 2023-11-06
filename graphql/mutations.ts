import {gql} from "@apollo/client";

export const ADD_NOVEL = gql`
    mutation Mutation($image:String, $title:String){
        addNovel(image: $image,title: $title){
            id
            title
            image
            createdAt
            updatedAt
            author {
                id
                name
                novelId
            }
        }
    }
`
export const DELETE_NOVEL= gql`
    mutation Mutation($id:ID!){
        deleteNovel(id:$id){
            id
            title
            image
            createdAt
            updatedAt
            author {
                id
                name
                novelId
            }
        }
    }
    
`