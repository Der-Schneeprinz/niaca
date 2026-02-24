import fs from "fs"
import matter from "gray-matter"
import path from "path"
import moment from "moment"
import { remark } from "remark"
import html from "remark-html"

import type { ArticleItem } from "../types"

const articleDirectory = path.join(process.cwd(), "articles")

export const getSortedArticles = (): ArticleItem => {
    const fileNames = fs.readdirSync(articleDirectory)

    const allArticlesData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md/, "")

        const fullPath = path.join(articleDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf-8")

        const matterResult = matter(fileContents)

        return {
            id,
            title: matterResult.data.title,
            time: matterResult.data.time,
        }
    })

    return allArticlesData.sort((a, b) => {
        const format = "DD-MM-YYYY"
        const dateOne = moment(a.time, format)
        const dateTwo = moment(a.time, format)
        if(dateOne.isBefore(dateTwo)) {
            return -1
        } else if (dateOne.isAfter(dateTwo)) {
            return 1
        } else {
            return 0
        }
    })
}

export const getArticleData = async (id: string) => {
    const fullPath = path.join(articleDirectory, `${id}.md`)

    const fileContents = fs.readFileSync(fullPath, "utf-8")

    const matterResult = matter(fileContents)

    const processContent = await remark().use(html).process(matterResult.content)

    const contentHTML = processContent.toString()

    return {
            id,
            contentHTML,
            title: matterResult.data.title,
            time: moment(matterResult.data.time, "DD-MM-YYYY").format("MMMM Do YYYY"),
        }
}