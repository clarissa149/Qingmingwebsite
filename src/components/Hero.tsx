import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import logo from "figma:asset/0d2b4f68b78fdb12ebba35daf563f01a388d5472.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-amber-50 to-pink-100">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-200/30 via-amber-100/20 to-pink-200/30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Logo at Top Left */}
      <div className="absolute top-6 left-6 z-20">
        <img 
          src={logo} 
          alt="晴明命理风水" 
          className="w-28"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-12">
        {/* Main Title - Large and Bold */}
        <div className="relative space-y-8 mb-16 text-center">
          {/* Large Ping Animation Behind Title - Soft Awakening Glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-[32rem] h-[32rem] bg-rose-400/15 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <h1 className="relative text-7xl md:text-9xl tracking-tight mt-32">
            <span className="block text-rose-950/30 mb-4">从看见</span>
            <span className="block bg-gradient-to-r from-rose-600 via-amber-600 to-pink-600 bg-clip-text text-transparent">
              到觉醒
            </span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-rose-950/50 mb-4 max-w-3xl mx-auto leading-relaxed text-center">
          不是预测命运的工具
        </p>
        <p className="text-xl md:text-2xl text-rose-950 mb-16 max-w-3xl mx-auto leading-relaxed text-center">
          而是映照意识的镜子
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-rose-500 to-amber-500 text-white hover:from-rose-600 hover:to-amber-600 px-12 py-8 text-lg rounded-full group shadow-xl w-52"
            onClick={() => {
              const philosophySection = document.querySelector('[data-section="philosophy"]');
              if (philosophySection) {
                philosophySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            开始觉察
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="ghost"
            className="text-rose-950 border-2 border-rose-300 hover:bg-rose-100/50 px-12 py-8 text-lg rounded-full"
            onClick={() => {
              const academySection = document.querySelector('[data-section="academy"]');
              if (academySection) {
                academySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            探索学院
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        </div>
      </div>
    </section>
  );
}