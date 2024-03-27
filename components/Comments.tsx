'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import Giscus from '@giscus/react'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)
  return (
    <>
      <Giscus
      id="comments"
      repo="ckrb63/blog"
      repoId="R_kgDOLg0n_A"
      category="Announcements"
      categoryId="DIC_kwDOLg0n_M4CeRLK"
      mapping="title"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="ko"
      loading="lazy"
    />
    </>
  )
}
