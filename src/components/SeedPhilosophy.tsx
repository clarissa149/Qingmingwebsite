import redLogo from "figma:asset/febf67881220c11dd4658bbca2a3c895e41daded.png";
import leafBackground from "figma:asset/5eb1cf3a55e8b7484565984ff25f8acf7de943ea.png";

export function SeedPhilosophy() {
  return (
    <section className="relative min-h-screen py-32 pb-32 px-6 flex items-center" data-section="seed-philosophy">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${leafBackground})` }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/60 via-amber-50/60 to-pink-50/60"></div>

      <div className="relative max-w-5xl mx-auto -mt-16">
        {/* Section Label */}
        <div className="mb-12 text-center">
          <span className="text-sm tracking-[0.3em] text-rose-950/40 uppercase">The Seed</span>
          <h2 className="mt-8 text-4xl md:text-5xl text-rose-950">
            心中的种子
          </h2>
        </div>

        {/* Logo Explanation */}
        <div className="mb-16 py-[20px] px-[50px] max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src={redLogo}
              alt="晴明红色种子logo"
              className="w-12 h-12 object-contain"
            />
            <h3 className="text-2xl text-rose-950">晴明的 logo，正是这颗"心中的种子"</h3>
          </div>
          <p className="text-xl text-rose-950/70 leading-relaxed mb-4 text-center">
            三瓣的线条像一株即将破土的嫩芽 — 微微张开，向光生长。
          </p>
          <p className="text-xl text-rose-950/60 leading-relaxed text-center">
            象征着：觉醒 · 清明 · 开始。
          </p>
        </div>

        {/* Three Forces */}
        <div className="mb-16">
          <h3 className="text-2xl text-rose-950 mb-8 text-center">种子的三瓣，代表人生的三股力量</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/60 backdrop-blur-sm border border-rose-200 rounded-2xl p-6 text-center">
              <div className="text-3xl text-rose-950 mb-3">命</div>
              <p className="text-rose-950/70">天生的天赋与本质</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-rose-200 rounded-2xl p-6 text-center">
              <div className="text-3xl text-amber-700 mb-3">运</div>
              <p className="text-rose-950/70">生命流动的时机与机缘</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-rose-200 rounded-2xl p-6 text-center">
              <div className="text-3xl text-pink-700 mb-3">势</div>
              <p className="text-rose-950/70">环境、方向与能量场</p>
            </div>
          </div>
          <p className="text-xl text-rose-950/70 leading-relaxed text-center">
            当命、运、势同时萌芽、对齐，<br />
            人生开始向上生长。<br />
            稳、清明、有力量。
          </p>
        </div>

        {/* Qingming's Role */}
        <div className="mb-16 space-y-6 text-center">
          <h3 className="text-2xl text-rose-950">晴明的角色</h3>
          <p className="text-xl text-rose-950/70 leading-relaxed">
            帮助你唤醒内在力量的蜕变，<br />
            让你重新看见生命最真实的样子。
          </p>
          <p className="text-xl text-rose-950/70 leading-relaxed">
            我们不替你决定未来。<br />
            我们陪你<span className="bg-gradient-to-r from-rose-600 via-amber-600 to-pink-600 bg-clip-text text-transparent font-bold">一起设计未来</span>。
          </p>
        </div>

        {/* Final Message */}
        <div className="text-center">
          <p className="text-2xl md:text-3xl text-rose-950/60 max-w-4xl mx-auto leading-relaxed">
            "每一颗被唤醒的<span className="bg-gradient-to-r from-rose-600 via-amber-600 to-pink-600 bg-clip-text text-transparent">种子</span>，<br />
            最终都会长成独一无二的<span className="bg-gradient-to-r from-amber-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">生命之树</span>。"
          </p>
          <p className="mt-8 text-xl text-rose-950/50 italic">
            那，就是晴明存在的意义。
          </p>
          <p className="mt-4 text-lg text-rose-950/50 text-right max-w-4xl mx-auto">
            -John欧阳导师
          </p>
        </div>
      </div>
    </section>
  );
}