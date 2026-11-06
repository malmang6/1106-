# [PROJECT HANDOFF] AI 공모전 접수 및 1차 검토 웹사이트 인수인계 문서

> **문서 상태**: 최신 상태 유지 (Always up to date)  
> **최종 갱신일**: 2026-11-06 16:13 (KST)  
> **저장 위치**: `C:\Antigravity\Contest\PROJECT_HANDOFF.md`  
> **저장소**: [https://github.com/malmang6/1106-](https://github.com/malmang6/1106-)  

---

## 1. 프로젝트 개요 및 목표

- **목표**: 아이디어 공모전 응모를 접수받고, 응모 즉시 Google Gemini API(Gemini 3.8 Flash)가 1차 검토 초안(분야 분류, 평점 1~5점, 심사평 초안)을 생성하여 Airtable에 1행으로 누적 저장하는 반응형 웹 플랫폼 구축.
- **향후 확장**: 추후 Google Apps Script(GAS) 웹훅을 연동하여 담당자 알림 및 응모자 회신 메일 자동 발송 지원.
- **공모전 주제**: **2026 생성형 AI 일상·업무 혁신 아이디어 공모전**
  - 슬로건: "일상의 불편과 업무의 비효율, 생성형 AI로 해결하다"
  - 자격: AI 활용에 관심 있는 누구나 (개인 또는 팀)
  - 5대 분야: `업무 생산성 혁신`, `교육 및 학습 지원`, `일상생활 및 라이프스타일`, `공공 및 사회 문제 해결`, `문화·예술 및 엔터테인먼트`

---

## 2. 현재까지 완료된 작업 (Completed Tasks)

| 단계 | 항목 | 상태 | 상세 내용 |
|---|---|:---:|---|
| **Step 1** | 작업 기획서 수립 | ✅ 완료 | `작업기획서.md` 작성 완료 (주의사항 문서 2종 분석 및 반영) |
| **Step 2** | 공모 요강 및 AI 지시문 확정 | ✅ 완료 | `공모요강_및_AI검토지시문.md` 작성 (안내 문구, 5대 분야, 1~5점 심사 기준, JSON Schema 확정) |
| **Step 3-1**| 프론트엔드 프로젝트 초기화 | ✅ 완료 | Next.js 15 (App Router, TypeScript, Tailwind CSS, Lucide React) 세팅 |
| **Step 3-2**| 초기 화면 및 레이아웃 구현 | ✅ 완료 | `Navbar`, `Footer`, `HomePage` (공모 요강, 5대 분야, 심사기준, AI 고지 배너) 구현 |
| **Step 3-3**| 로컬 프로덕션 빌드 검증 | ✅ 완료 | `npm run build` 오류 0건 통과 (정적 빌드 완료) |
| **Step 3-4**| GitHub 저장소 연결 및 푸시 | ✅ 완료 | `main` 브랜치에 초기 코드 및 가이드 문서 푸시 완료 ([github.com/malmang6/1106-](https://github.com/malmang6/1106-)) |
| **Step 3-5**| 환경변수 예시 및 가이드 작성 | ✅ 완료 | `.env.example`, `.gitignore`, `환경설정_가이드.md`, `README.md` 작성 |

---

## 3. 앞으로 해야 할 일 (Upcoming Tasks)

### 📌 Step 3 후속: 배포 및 외부 서비스 연동 (대기 중)
- [ ] **Vercel 프로젝트 연결 및 1차 배포 확인**:
  - [Vercel](https://vercel.com/)에서 `malmang6/1106-` 저장소 Import 및 배포.
  - 배포 URL 접속 테스트 (공모 요강 메인 화면 확인).
- [ ] **Airtable 베이스 및 필드(14개) 구성**:
  - Base 생성: `2026 AI Contest` / Table: `Submissions`
  - 14개 필드(영문명) 생성 (Title, TeamName, Members, Summary, ExpectedEffect, Phone, Email, SubmittedAt, AICategory, AIRating, AIRatingReason, AIReviewDraft, OfficialRating, SentAt).
  - Personal Access Token 발급 (`data.records:read`, `data.records:write`).
- [ ] **Gemini API 키 발급**:
  - [Google AI Studio](https://aistudio.google.com/app/apikey)에서 API 키 발급.
- [ ] **환경변수 동기화 등록**:
  - 로컬 컴퓨터: `C:\Antigravity\Contest\.env.local` 파일 생성 및 키 기입.
  - Vercel 대시보드: **Settings → Environment Variables**에 4개 환경변수 등록 후 Redeploy.

### 📌 Step 4: 단위 기능 개발 및 단계별 검증 (예정)
- [ ] **4-1. 응모 폼 UI 개발 (`src/app/apply/page.tsx`)**:
  - 5대 접수 항목 + 연락처 2개 입력 폼 구현.
  - 개인정보 수집/이용 동의 체크박스.
  - 제출 중 버튼 비활성화 및 로딩 스피너 (중복 제출 방지).
- [ ] **4-2. 서버 API 라우트 구축 (`src/app/api/submit/route.ts`)**:
  - 서버 사이드에서 Gemini 3.8 Flash API 호출 (JSON Structured Outputs).
  - Airtable REST API 호출하여 응모작 및 AI 검토 결과를 1행으로 저장.
  - 자동 재시도 방지 및 명확한 에러 핸들링.
- [ ] **4-3. 직접 응모 테스트 및 Airtable 검증**:
  - 가상 응모 1건을 브라우저에서 제출하여 Airtable에 한 줄로 저장되고, AI 분야·평점(1~5)·근거·심사평이 채워지는지 확인.
- [ ] **4-4. 접수 현황 화면 개발 (`src/app/status/page.tsx`, `/api/status`)**:
  - 5대 분야별 건수 통계 요약 카드.
  - 접수 목록 테이블 (공개 가능한 항목만 노출, 이름/연락처 비노출).
  - **[새로고침] 버튼 클릭 시에만 수동 조회** (화면 진입 시 무한/자동 호출 차단).

### 📌 Step 5: 최종 점검 및 배포 마무리 (예정)
- [ ] 가상 응모 3~5건 다각도 제출 테스트 (다양한 점수대 및 분야 분류 정확도 확인).
- [ ] 클라이언트 브라우저 소스맵 및 네트워크 탭 키 노출 여부 최종 보안 감사.
- [ ] Vercel 최종 배포 주소 및 Airtable 베이스 링크를 기획서 및 본 문서에 기록.
- [ ] GAS 웹훅 연동을 위한 규격 점검 및 최종 인계.

---

## 4. Airtable 필드 스키마 명세 (총 14개)

| 필드명 (Field Name) | 타입 | 생성/입력 주체 | 설명 및 규칙 |
|---|---|---|---|
| `Title` | Single line text | 응모자 | 아이디어 제목 (Primary Field) |
| `TeamName` | Single line text | 응모자 | 팀명 |
| `Members` | Single line text | 응모자 | 참가자 이름 (쉼표 구분) |
| `Summary` | Long text | 응모자 | 아이디어 요약 (AI 심사 주 재료) |
| `ExpectedEffect` | Long text | 응모자 | 기대 효과 |
| `Phone` | Single line text | 응모자 | 연락용 전화번호 (**공개 화면 절대 비노출**) |
| `Email` | Email | 응모자 | 회신용 이메일 (**공개 화면 절대 비노출**, GAS 메일 대상) |
| `SubmittedAt` | Date (Time 포함) | 서버 자동 | 접수 일시 (ISO 형식) |
| `AICategory` | Single select | Gemini AI | 5대 분야 중 택1 |
| `AIRating` | Rating (1~5) | Gemini AI | **정수 1~5만 허용** (0점 또는 소수점 저장 금지) |
| `AIRatingReason` | Single line text | Gemini AI | 평점 핵심 근거 1문장 (50자 내외) |
| `AIReviewDraft` | Long text | Gemini AI | 강점 2개 + 보완점 2개 (5문장 이내) |
| `OfficialRating` | Rating (1~5) | 담당자 (사람) | **최종 사람 심사용 분리 필드** (초기 빈값) |
| `SentAt` | Date (Time 포함) | GAS | 안내 메일 발송 완료 일시 (중복 발송 방지용 안전 장치) |

---

## 5. Gemini 3.8 Flash AI 평가 지시문 규격

- **모델**: Gemini 3.8 Flash (`gemini-2.5-flash` / `gemini-1.5-flash`)
- **응답 모드**: `application/json` (Structured Outputs)
- **JSON 응답 구조**:
  ```json
  {
    "category": "업무 생산성 혁신" | "교육 및 학습 지원" | "일상생활 및 라이프스타일" | "공공 및 사회 문제 해결" | "문화·예술 및 엔터테인먼트",
    "rating": 1 | 2 | 3 | 4 | 5,
    "rating_reason": "평점 부여 근거 1줄 (50자 내외)",
    "review_draft": "강점 2가지와 보완점 2가지를 균형 있게 담은 5문장 이내의 심사평 초안"
  }
  ```

---

## 6. 주의사항 및 운영 가이드라인 (체크포인트)

1. **키 보안**:
   - `GEMINI_API_KEY`, `AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID`는 서버 환경변수에서만 사용.
   - `.env` 및 `.env.local` 파일은 절대 Git에 커밋/푸시하지 않음 (`.gitignore` 확인 완료).
2. **AI 역할 한계 고지**:
   - 모든 화면 및 심사 결과 안내 시 "AI 평점과 심사평은 1차 검토 초안이며, 최종 심사는 사람이 진행한다"는 점을 명시.
3. **Airtable 평점 0점 에러 방지**:
   - Airtable Rating 필드는 1~5 사이의 정수만 허용되므로, AI 평가 결과의 rating 값을 1~5로 검증/클램핑 처리.
4. **API 호출량 및 비용 통제**:
   - 현황 화면 조회는 페이지 진입 시가 아닌 사용자가 [새로고침] 버튼을 눌렀을 때만 실행.
   - API 호출 실패 시 무한 자동 재시도를 금지하여 한도 초과(Rate Limit) 방지.
5. **개인정보 보호**:
   - 접수 현황 화면(`GET /api/status`) API 응답에서는 Phone, Email, Members 필드를 원천 제거하고 반환.
