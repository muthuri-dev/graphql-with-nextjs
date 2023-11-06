"use client"
import React, {FormEvent} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {GET_NOVELS} from "@/graphql/queries";
import {INovel} from "@/INovel";
import {ADD_NOVEL, DELETE_NOVEL} from "@/graphql/mutations";
import Novel from "@/components/Novel";

export default function Novels() {
    const [title, setTitle] = React.useState<string>();
    const [image, setImage] = React.useState<string>();
    const {data, loading, error} = useQuery(GET_NOVELS);
    const [addNovel] = useMutation(ADD_NOVEL, {
        variables: {title, image},
        refetchQueries: [{query: GET_NOVELS}]
    });
    const [deleteNovel] = useMutation(DELETE_NOVEL, {refetchQueries: [{query: GET_NOVELS}]});
    const novels: INovel[] = data?.novels;
    console.log(novels);
    if (loading) return <h3 className="text-center">Loading ...</h3>
    if (error) return <h3 className="text-center text-red-950">Ooops something went wrong</h3>
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (image === "" || title === "") return alert("Enter fields");
        addNovel({variables: {title, image}})
        setImage("");
        setTitle("");
    }
    return (
        <div className="h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col m-3 justify-center items-center w-screen">
                <input type="text" value={title} placeholder="Enter title"
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                       className="m-3 bg-transparent border border-gray-950 text-black px-6 py-3 rounded-2xl text-sm w-2/6"/>
                <input type="text" value={image}
                       placeholder="Enter image url "
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => setImage(event.target.value)}
                       className="bg-transparent border border-gray-950 text-black px-6 py-3 rounded-2xl text-sm w-2/6"/>
                <button className="bg-blue-600 rounded-2xl px-6 py-2 font-extralight m-3 w-1/6">ADD</button>
            </form>
            <div>
                {
                    novels.map((novel: INovel) => {
                        return (
                            <div className="flex justify-around">
                                <ul className="font-extralight text-sm ml-5">{novel.title}</ul>
                                <ul className="font-extralight text-sm ml-5">{novel.id}</ul>
                                <button className="text-white bg-red-950 px-6 py-2 rounded-2xl text-sm m-3"
                                        onClick={() => deleteNovel({variables: {id: novel.id}})}>Delete
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );

}