# khe0124.github.io

프론트엔드 개발자 **강하은**의 포트폴리오 사이트입니다.
[Gatsby](https://www.gatsbyjs.com/)로 제작했으며 GitHub Pages로 배포합니다.

🔗 https://khe0124.github.io/

## 기술 스택

- Gatsby 5 / React 18
- styled-components 6
- GraphQL (Markdown 콘텐츠 소싱)

## 개발

```shell
# 의존성 설치
npm install

# 개발 서버 (http://localhost:8000)
npm run develop

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run serve
```

## 배포

```shell
# gatsby build 후 public 폴더를 gh-pages 브랜치로 배포
npm run deploy
```

## 디렉터리 구조

```
.
├── content/blog        # 마크다운 블로그 글
├── src
│   ├── components      # 공통 컴포넌트 (layout, nav, seo 등)
│   ├── contents        # 이력/프로젝트/연락처 등 콘텐츠 상수
│   ├── images          # 이미지·SVG 에셋
│   ├── pages           # 라우트 페이지 (index, resume, project, contact)
│   └── templates       # 블로그 글 템플릿
├── static              # robots.txt, favicon 등 정적 파일
├── gatsby-config.js    # 사이트 메타데이터·플러그인 설정
└── gatsby-node.js      # 빌드 시 페이지 생성 로직
```

## 라이선스

0BSD
