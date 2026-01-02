import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Awakening() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-amber-50 via-rose-100 to-pink-100">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-radial from-rose-200/30 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-5xl mx-auto -mt-16">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <h2 className="mb-8 text-5xl md:text-7xl leading-tight">
            <span className="text-rose-950/40">准备好</span>
            <br />
            <span className="bg-gradient-to-r from-rose-600 via-amber-600 to-pink-600 bg-clip-text text-transparent">
              觉醒了吗？
            </span>
          </h2>

          <p className="mb-12 text-xl text-rose-950/60 max-w-2xl mx-auto">
            从命盘的洞察，到意识的觉醒
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-amber-500 text-white hover:from-rose-600 hover:to-amber-600 px-32 py-8 text-lg rounded-full group shadow-xl"
            >
              预约觉察会谈
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <p className="mb-4 text-rose-950/60">联系我们</p>
          <a 
            href="mailto:hello@qingming.academy" 
            className="text-lg text-rose-950 hover:text-rose-800 transition-colors"
          >
            hello@qingming.academy
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-rose-300/50 text-center text-sm text-rose-950/40">
          <p>© 2025 意识觉醒的旅程</p>
        </div>
      </div>
    </section>
  );
}