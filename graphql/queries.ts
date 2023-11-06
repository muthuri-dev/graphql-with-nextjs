import {gql} from "@apollo/client";

export const GET_NOVELS= gql`
    query Novels{
        novels{
            updatedAt
            title
            image
            id
            createdAt
            author {
                name
                id
                novelId
            }
        }
    }
`