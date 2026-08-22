# khe0124.github.io

프론트엔드 개발자 **강하은**의 포트폴리오 사이트입니다.
[Next.js](https://nextjs.org/) App Router로 제작했으며 정적 내보내기 결과를 GitHub Pages로 배포합니다.

🔗 https://khe0124.github.io/

## 기술 스택

- Next.js 16 (App Router, `output: "export"`)
- React 19 / TypeScript 5
- Tailwind CSS 4
- next/font 셀프 호스팅 (Noto Sans KR 가변 폰트)

## 개발

```shell
# 의존성 설치
npm install

# 개발 서버 (http://localhost:3000)
npm run dev

# 프로덕션 빌드 (out/ 에 정적 파일 생성)
npm run build

# 타입 체크 / 린트
npm run typecheck
npm run lint
```

## 배포

```shell
# next build 후 out 폴더를 gh-pages 브랜치로 배포
npm run deploy
```

`out/.nojekyll`이 있어야 GitHub Pages가 `_next/` 디렉터리를 서빙합니다.
`public/.nojekyll`이 함께 복사되며, 배포 스크립트에서도 한 번 더 생성합니다.

## SEO / AEO

| 항목                        | 위치                                                                                |
| --------------------------- | ----------------------------------------------------------------------------------- |
| 페이지별 메타·OG·canonical  | `lib/seo.ts` + 각 `page.tsx`의 `metadata`                                           |
| 구조화 데이터 (JSON-LD)     | `app/layout.tsx`(WebSite·Person), 각 페이지(ProfilePage·CollectionPage·ContactPage) |
| sitemap.xml                 | `app/sitemap.ts`                                                                    |
| robots.txt                  | `app/robots.ts`                                                                     |
| PWA manifest                | `app/manifest.ts`                                                                   |
| llms.txt (AI 크롤러용 요약) | `app/llms.txt/route.ts` — 이력서 상수에서 자동 생성                                 |

## 디렉터리 구조

```
.
├── app                 # 라우트 (App Router)
│   ├── layout.tsx      # 전역 메타데이터·JSON-LD·폰트
│   ├── page.tsx        # 홈
│   ├── resume          # 이력서
│   ├── project         # 프로젝트
│   ├── contact         # 연락처
│   ├── sitemap.ts / robots.ts / manifest.ts / llms.txt
│   └── globals.css     # Tailwind 테마 토큰·전역 스타일·인쇄 스타일
├── components          # 공통 컴포넌트
├── contents            # 이력/프로젝트/연락처/사이트 메타 상수
├── lib/seo.ts          # 페이지 메타데이터 빌더
└── public              # 정적 에셋 (images, favicon, .nojekyll)
```

## 콘텐츠 수정

이력서 내용은 `contents/resume.constant.ts` 한 곳만 고치면
이력서 페이지와 `llms.txt`, 구조화 데이터에 모두 반영됩니다.

## 라이선스

0BSD
