"use client"
import React from "react";
import {useQuery} from "@apollo/client";
import {GET_NOVEL} from "@/graphql/queries";


type  Props = {
    params: {
        id: string
    }
}
export default function Novel({params: {id}}: Props) {
    const {data, loading, error} = useQuery(GET_NOVEL, {variables: {id}});
    // console.log(data);
    return (
        <div>
            <div>Novel</div>
            <form className="flex flex-col m-3 justify-center items-center w-screen">
                <input type="text" placeholder="Enter title"
                       className="m-3 bg-transparent border border-gray-950 text-black px-6 py-3 rounded-2xl text-sm w-2/6"/>
                <input type="text"
                       placeholder="Enter image url"
                       className="bg-transparent border border-gray-950 text-black px-6 py-3 rounded-2xl text-sm w-2/6"/>
                <button className="bg-blue-600 rounded-2xl px-6 py-2 font-extralight m-3 w-1/6">Update</button>
            </form>
        </div>
    )
}