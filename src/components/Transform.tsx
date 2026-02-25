import wellChainsImage from "figma:asset/6d8c3fadc06a6053d15e105de30a137a2b9cc9dc.png";
import mountainVictoryImage from "figma:asset/e0f9d17db45c45e888d61144b19d546da092b007.png";

export function Transform() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-pink-50 via-amber-50 to-rose-50 overflow-hidden">
      {/* Ambient Light */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-rose-300/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto -mt-16">
        {/* Section Label */}
        <div className="mb-20 text-center">
          <span className="text-sm tracking-[0.3em] text-rose-950/40 uppercase">Transformation</span>
          <h2 className="mt-8 text-4xl md:text-5xl text-rose-950 text-[40px]">
            内在力量的蜕变
          </h2>
        </div>

        {/* Case Story */}
        <div className="space-y-20">
          {/* Before */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/60 border border-rose-200 rounded-full text-sm text-rose-950/60">
                案例：事业停滞
              </div>
              <h3 className="text-4xl text-rose-950/40">
                "我的命盘显示武曲贪狼，<br />流年冲迁移宫..."
              </h3>
              <p className="text-xl text-rose-950/60 leading-relaxed">
                传统解读：今年不宜变动，容易破财，建议保守行事。
              </p>
            </div>

            <div className="relative h-64 bg-white/40 border border-rose-200 rounded-2xl overflow-hidden backdrop-blur-sm">
              <img 
                src={wellChainsImage}
                alt="封闭的命运观 - 从束缚中仰望光明"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-medium drop-shadow-lg bg-gradient-to-r text-rose-950/40 bg-clip-text text-transparent text-[#f3dbf6]">封闭的命运观</div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-px h-32 bg-gradient-to-b from-rose-400 via-amber-400 to-pink-400"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-amber-400 rounded-full"></div>
            </div>
          </div>

          {/* After */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-64 bg-white/40 border border-rose-200 rounded-2xl overflow-hidden backdrop-blur-sm">
              <img 
                src={mountainVictoryImage}
                alt="觉醒的意识选择 - 站在山顶拥抱自由"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-medium drop-shadow-lg bg-gradient-to-r from-rose-200 via-amber-200 to-pink-200 bg-clip-text text-transparent text-[#cf4f4f4d]">觉醒的意识选择</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-rose-100 to-amber-100 border border-rose-300 rounded-full text-sm text-rose-950">
                教练式觉察
              </div>
              <h3 className="text-4xl text-rose-950">
                "如果这不是阻碍，<br />而是邀请呢？"
              </h3>
              <p className="text-xl text-rose-950/80 leading-relaxed">
                觉察引导：看见内在恐惧模式 → 选择突破舒适圈 → 启动独立创业 → 活出真实渴望
              </p>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-32 text-center">
          <p className="text-2xl md:text-3xl text-rose-950/60 max-w-4xl mx-auto leading-relaxed">
            "命盘不变，但<span className="bg-gradient-to-r from-rose-600 via-amber-600 to-pink-600 bg-clip-text text-transparent">你的意识</span>可以<span className="bg-gradient-to-r from-amber-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">转变</span>"
          </p>
        </div>
      </div>
    </section>
  );
}