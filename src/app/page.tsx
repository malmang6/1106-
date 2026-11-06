import Link from "next/link";
import { Sparkles, Calendar, Trophy, Users, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-blue-50/80 via-white to-transparent pt-12 pb-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            2026 AI Innovation Idea Contest
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            일상의 불편과 업무의 비효율, <br />
            <span className="text-blue-600">생성형 AI</span>로 해결하다
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            최신 생성형 AI 기술을 접목하여 실생활의 편의를 증진하거나 현업 업무 프로세스를 개선할 수 있는 창의적인 아이디어를 공모합니다.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:bg-blue-700 transition"
            >
              지금 응모하기
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/status"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-base hover:bg-slate-50 transition"
            >
              접수 현황 보기
            </Link>
          </div>
        </div>
      </section>

      {/* AI 심사 고지 배너 (필수 주의사항) */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl flex items-start gap-3 shadow-sm">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-sm text-amber-900 space-y-1">
            <p className="font-bold">AI 1차 자동 검토 시스템 안내</p>
            <p className="text-amber-800 leading-relaxed">
              본 공모전은 응모작 접수 시 최신 <strong>Gemini 3.8 Flash</strong> 모델을 활용해 즉시 1차 분야 분류 및 검토 초안(평점·심사평)을 생성합니다. 
              <strong> 화면 및 Airtable에 기록되는 평점과 심사평은 1차 참고용 AI 초안이며, 최종 수상작 심사는 전문 심사위원단(사람)이 직접 수행합니다.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 주요 요강 카드 그리드 */}
      <section className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">응모 자격</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            AI 기술 활용에 관심 있는 누구나 응모 가능 (개인 또는 팀 단위 참가)
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Calendar className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">접수 일정</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            <strong>2026.11.06</strong> ~ <strong>2026.12.06</strong> (23:59 접수 마감)
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Trophy className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">시상 내역</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            대상 1팀(200만 원), 최우수 2팀(각 100만 원), 우수 3팀(각 50만 원)
          </p>
        </div>
      </section>

      {/* 5대 공모 분야 */}
      <section className="max-w-4xl mx-auto px-4 space-y-6">
        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">
            공모 5대 지정 분야
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "업무 생산성 혁신", desc: "문서 자동화, 지식 검색, 반복 업무 개선" },
              { title: "교육 및 학습 지원", desc: "맞춤형 튜터링, 언어 학습, 코딩 교육 보조" },
              { title: "일상생활 및 라이프스타일", desc: "개인 일정/식단 관리, 여행/소비 최적화" },
              { title: "공공 및 사회 문제 해결", desc: "교통/환경 개선, 복지 지원, 공공 데이터" },
              { title: "문화·예술 및 엔터테인먼트", desc: "스토리텔링, 창작 보조, 게임/인터랙션" },
            ].map((cat, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-xs font-semibold text-blue-600">분야 {i + 1}</span>
                <h4 className="font-bold text-slate-900 mt-1">{cat.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 심사 기준 */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-blue-600" />
            심사 기준 안내 (1~5점 척도)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
            <div>
              <strong>1. 혁신성 및 독창성</strong>
              <p className="text-xs text-slate-500 mt-0.5">기존 솔루션 대비 새로운 접근 방식인가</p>
            </div>
            <div>
              <strong>2. 기술적 실현 가능성</strong>
              <p className="text-xs text-slate-500 mt-0.5">생성형 AI 기술로 구현 가능한 타당성이 있는가</p>
            </div>
            <div>
              <strong>3. 파급 효과 및 유용성</strong>
              <p className="text-xs text-slate-500 mt-0.5">실제 도입 시 사용자 가치와 효율성이 높은가</p>
            </div>
            <div>
              <strong>4. 완성도 및 구체성</strong>
              <p className="text-xs text-slate-500 mt-0.5">배경, 작동 방식, 기대 효과가 구체적으로 기술되었는가</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
