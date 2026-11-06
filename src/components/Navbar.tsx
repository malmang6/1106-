import Link from "next/link";
import { Sparkles, FileText, BarChart3 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-slate-900 text-lg tracking-tight block leading-tight">
              AI 혁신 아이디어 공모전
            </span>
            <span className="text-xs text-slate-500 block">2026 Contest Platform</span>
          </div>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition"
          >
            공모 안내
          </Link>
          <Link
            href="/status"
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition"
          >
            <BarChart3 className="w-4 h-4" />
            접수 현황
          </Link>
          <Link
            href="/apply"
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow transition ml-2"
          >
            <FileText className="w-4 h-4" />
            응모하기
          </Link>
        </nav>
      </div>
    </header>
  );
}
