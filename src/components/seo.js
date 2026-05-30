/**
 * SEO / AEO component.
 * 메타 태그 + schema.org JSON-LD 구조화 데이터를 렌더링합니다.
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import defaultImage from "../images/thumb.png"

// <title> 및 og:site_name 에 쓰이는 브랜드 접미사
const BRAND = "강하은 포트폴리오"

const Seo = ({ description, lang, title, pathname }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const meta = site.siteMetadata
  const siteUrl = (meta.siteUrl || "").replace(/\/$/, "")
  const metaDescription = description || meta.description
  const fullTitle = title ? `${title} | ${BRAND}` : BRAND
  const canonical = pathname ? `${siteUrl}${pathname}` : `${siteUrl}/`
  // og:image / twitter:image 는 절대 URL 이어야 소셜·AI 크롤러가 인식합니다.
  const imageUrl = `${siteUrl}${defaultImage}`

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "강하은",
    alternateName: "Kang Haeun",
    jobTitle: "프론트엔드 개발자",
    description: meta.description,
    url: `${siteUrl}/`,
    image: imageUrl,
    email: "khe0124@gmail.com",
    sameAs: [
      "https://github.com/khe0124",
      "https://www.linkedin.com/in/khe0124",
      "https://seaweedisland.tistory.com/",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Greenery",
    },
    knowsAbout: [
      "Frontend Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "React Native",
      "Vue.js",
      "B2B SaaS",
      "Admin Console",
      "LCA/LCCI",
      "Carbon Credit",
      "Web3",
      "Data Visualization",
      "UI/UX Design",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "국민대학교",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND,
    url: `${siteUrl}/`,
    inLanguage: "ko-KR",
    author: {
      "@type": "Person",
      name: "강하은",
    },
  }

  return (
    <Helmet htmlAttributes={{ lang }} title={fullTitle}>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:locale" content="ko_KR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content={meta.social?.twitter || ``} />

      {/* 구조화 데이터 (SEO/AEO) */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `ko`,
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string,
  pathname: PropTypes.string,
}

export default Seo
