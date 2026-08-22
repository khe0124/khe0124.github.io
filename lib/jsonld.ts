import { SITE, SITE_URL } from "@/contents/site.constant"

/**
 * 사이트가 마지막으로 갱신된 시각.
 * 빌드 시점으로 고정해 dateModified 가 정적 산출물 안에서 흔들리지 않게 합니다.
 */
export const LAST_MODIFIED = new Date().toISOString()

type Crumb = { name: string; path: string }

/**
 * 빵부스러기 구조화 데이터.
 * 검색 결과에 계층이 노출되고, 생성형 엔진이 페이지의 위치를 파악하는 데 쓰입니다.
 */
export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${crumbs[crumbs.length - 1].path}#breadcrumb`,
    itemListElement: [{ name: "홈", path: "/" }, ...crumbs].map(
      (crumb, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: crumb.name,
        item: `${SITE_URL}${crumb.path}`,
      }),
    ),
  }
}

/** 모든 페이지 JSON-LD 가 공유하는 기본 속성 */
export function pageBase(path: string, name: string, description: string) {
  return {
    url: `${SITE_URL}${path}`,
    name,
    description,
    inLanguage: "ko-KR",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    dateModified: LAST_MODIFIED,
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
    primaryImageOfPage: `${SITE_URL}${SITE.ogImage}`,
  }
}
