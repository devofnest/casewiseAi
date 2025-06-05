# frontend

React 19와 Vite 기반으로 구축된 프론트엔드 프로젝트입니다. 상태 관리는 [`Zustand`](https://github.com/pmndrs/zustand)를 사용하며, 컴포넌트 기반 구조로 검색 기능을 중심으로 구성되어 있습니다.

## 📁 프로젝트 구조

```
frontend/
├── public/ # 정적 파일
├── src/
│ ├── assets/ # 이미지 및 정적 자산 (e.g. react.svg)
│ ├── components/ # 재사용 가능한 컴포넌트 (SearchBar, ResultList 등)
│ ├── pages/ # 페이지 단위 컴포넌트 (Home.tsx)
│ ├── store/ # Zustand 상태 관리 파일 (searchStore.ts)
│ ├── App.tsx # 루트 컴포넌트
│ ├── main.tsx # 진입 파일
│ ├── index.css # 전역 스타일
│ └── vite-env.d.ts # 타입 지원 파일
├── index.html # 기본 HTML 템플릿
├── package.json # 프로젝트 메타 정보 및 스크립트
├── tsconfig*.json # TypeScript 설정
├── vite.config.ts # Vite 설정 파일
├── .gitignore # Git 무시 설정
└── README.md # 프로젝트 설명 파일
```

## 🛠️ 사용 기술

-   **React 19**
-   **Vite 6**
-   **TypeScript 5**
-   **Zustand** - 전역 상태 관리
-   **ESLint** - 코드 스타일 및 린팅

## 📦 설치 및 실행

```bash
# 패키지 설치
yarn install

# 개발 서버 실행
yarn dev

# 빌드
yarn build

# 린트 검사
yarn lint

# 빌드된 파일 미리보기
yarn preview

```

## ✅ 주요 기능

-   검색창을 통해 사용자 입력 처리
-   Zustand를 활용한 상태 관리
-   검색 결과 리스트 출력
-   컴포넌트 분리 및 모듈화

## 🔍 주요 디렉토리 설명

-   components/ SearchBar.tsx, ResultList.tsx 등 UI 컴포넌트들
-   pages/ 페이지 단위 컴포넌트 (현재는 Home.tsx)
-   store/ 상태 관리용 파일. searchStore.ts 에 Zustand store 정의
-   assets/ 정적 자산 파일 (SVG 등)

## 📝 라이센스

이 프로젝트의 별도 명시된 라이센스는 없습니다.
