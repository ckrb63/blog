import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 5

export default function Home({ posts }: { posts: CoreContent<Blog>[] }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, readingTime } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, 'kr')}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap items-center">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                            <time className="text-xs leading-6 text-gray-500 dark:text-gray-400">
                              {Math.max(Math.floor(readingTime.minutes / 2 + 2), 2)} min read
                            </time>
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="mb-28 flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="flex text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            <p className="mr-1 mt-[.125rem]">전체 포스팅</p> &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
