import Novels from "@/components/Novels";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center text-2xl font-extrabold">
            <h3 className="py-4"><u>Graphql apis</u></h3>
            <Novels/>
        </main>
    )
}
