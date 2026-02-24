import Link from "next/link";
import { getArticleData } from "../lib/article";

const Article = async ({params}: {params: {slug: string}}) => {
    const articleData = await getArticleData(params.slug)

    return <section className="mx=auto flex flex-col">
        <div>
            <Link href={"/articles"} className="flex flex-row">Back to articles</Link>
        </div>
        <p>
            {articleData.time.toString()}
        </p>
        <article dangerouslySetInnerHTML={{__html: articleData.contentHTML}}>

        </article>
    </section>
}

export default Article