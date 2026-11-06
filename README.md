# 2026 생성형 AI 일상·업무 혁신 아이디어 공모전 웹사이트

> 최신 생성형 AI(Gemini 3.8 Flash)를 활용하여 아이디어 공모전 접수를 처리하고, 응모 즉시 1차 검토 초안(분야 분류, 평점 1~5점, 5문장 심사평)을 Airtable에 기록하는 원스톱 접수 및 검토 플랫폼입니다.

---

## 🌟 주요 기능 및 페이지 구성

1. **공모 요강 안내 (`/`)**
   - 공모전 개요, 5대 공모 분야, 추진 일정, 시상 내역 및 심사 기준 상세 안내
   - **AI 심사 고지 배너**: "평점과 심사평은 AI 초안이며, 최종 심사는 사람이 진행한다"는 안내 필수 표기
2. **응모 폼 (`/apply`)**
   - 필수 5대 항목: `팀명`, `구성원`, `아이디어 제목`, `아이디어 요약`, `기대 효과`
   - 연락처 2개: `응모자 전화번호`, `응모자 이메일` (공개 화면 비노출, 본인 확인 및 회신용)
   - 제출 시 서버에서 Gemini AI 검토 후 Airtable에 실시간 1행 누적 저장
3. **접수 현황 (`/status`)**
   - 5대 분야별 접수 건수 요약 통계 카드
   - 접수 목록 테이블 (접수번호, 제목, 요약 발췌, 분류 분야, 접수일시)
   - **수동 새로고침 기반 조회**: 불필요한 API 호출 방지를 위해 [새로고침] 버튼 클릭 시에만 데이터 조회
   - **개인정보 보호**: 응모자 실명, 연락처, 이메일, 평점/심사평은 비공개

---

## 🛠 기술 스택

- **Frontend**: Next.js 15 (App Router, TypeScript), React 19
- **Styling**: Tailwind CSS, Lucide React Icons
- **Backend**: Next.js Route Handlers (`/api/submit`, `/api/status`)
- **AI Engine**: Google Gemini API (`@google/generative-ai`, Gemini 3.8 Flash)
- **Database**: Airtable REST API
- **Deployment & CI/CD**: GitHub + Vercel 연동 자동 배포

---

## 🔒 핵심 보안 및 운영 원칙

1. **열쇠는 서버에만 보관**:
   - `GEMINI_API_KEY`, `AIRTABLE_API_KEY` 등 모든 민감한 인증 키는 Next.js 서버 라우트 핸들러에서만 사용하며 클라이언트 코드에 절대 노출하지 않습니다 (`NEXT_PUBLIC_` 접두사 금지).
2. **무한 호출 및 자동 재시도 차단**:
   - API 호출 실패 시 브라우저 또는 서버에서 무한 루프 재시도를 돌리지 않으며 정형화된 에러 응답만 반환합니다.
3. **Airtable 평점 분리**:
   - AI가 산출한 1~5 정수 평점(`AIRATING`)과 담당자가 확정하는 평점(`OfficialRating`)을 별도 필드로 분리하여 초안과 사람 심사의 역할을 명확히 구분합니다.
4. **GAS 메일 자동화 연동 준비**:
   - `SentAt`(발송일시) 필드를 사전 구성하여 향후 Google Apps Script 연동 시 중복 메일 발송 사고를 원천 방지합니다.

---

## 🚀 로컬 개발 및 실행 방법

### 1. 패키지 설치
```bash
npm install
```

### 2. 환경변수 설정
`.env.example` 파일을 복사하여 `.env.local`을 생성하고 실제 키 값을 입력합니다:
```bash
cp .env.example .env.local
```

`.env.local` 내용:
```env
AIRTABLE_API_KEY=patXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TABLE_NAME=Submissions
GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXX
```

> ⚠️ `.env` 및 `.env.local` 파일은 `.gitignore`에 등록되어 있어 GitHub에 절대 업로드되지 않습니다.

### 3. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:3000`으로 접속합니다.

### 4. 프로덕션 빌드 테스트
```bash
npm run build
```

---

## 📂 프로젝트 구조

```
C:\Antigravity\Contest\
├── .env.example                # 환경변수 예시 파일
├── .gitignore                  # Git 제외 목록 (.env*.local 포함)
├── package.json                # 의존성 및 스크립트 정의
├── tsconfig.json               # TypeScript 설정
├── tailwind.config.ts          # Tailwind CSS 설정
├── next.config.mjs             # Next.js 설정
├── PROJECT_HANDOFF.md          # 프로젝트 진행 상황 및 인수인계 문서
├── README.md                   # 프로젝트 개요 및 사용 안내 (본 문서)
├── 작업기획서.md               # 초기 전체 작업 기획서
├── 공모요강_및_AI검토지시문.md   # 공모 요강, 분야, 심사기준, AI 프롬프트 명세
├── 환경설정_가이드.md          # GitHub, Vercel, Airtable, Gemini 세팅 매뉴얼
└── src/
    ├── app/
    │   ├── globals.css         # 전역 스타일
    │   ├── layout.tsx          # 루트 레이아웃 (Navbar, Footer 포함)
    │   └── page.tsx            # 공모 안내 메인 페이지
    ├── components/
    │   ├── Navbar.tsx          # 상단 글로벌 네비게이션
    │   └── Footer.tsx          # 하단 글로벌 푸터
    └── lib/
        └── utils.ts            # 스타일 유틸리티 함수 (cn)
```
