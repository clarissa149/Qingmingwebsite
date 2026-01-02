export function Philosophy() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-pink-50 via-rose-50 to-amber-50" data-section="philosophy">
      <div className="max-w-7xl mx-auto -mt-16">
        {/* Section Label */}
        <div className="mb-20 text-center">
          <span className="text-sm tracking-[0.3em] text-rose-950/40 uppercase">Philosophy</span>
          <h2 className="mt-8 text-4xl md:text-5xl text-rose-950 text-[40px]">
            晴明理念
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div className="space-y-12 px-[50px] py-[0px]">
            <h2 className="text-5xl md:text-6xl leading-tight">
              <span className="text-rose-950/30">传统命理</span>
              <br />
              <span className="text-rose-950">告诉你</span>
              <br />
              <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                会发生什么
              </span>
            </h2>

            <div className="w-20 h-px bg-gradient-to-r from-rose-300 to-transparent"></div>

            <h2 className="text-5xl md:text-6xl leading-tight">
              <span className="text-rose-950/30">觉察教练</span>
              <br />
              <span className="text-rose-950">引导你看见</span>
              <br />
              <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                为什么发生
              </span>
            </h2>
          </div>

          {/* Right: SEE → SAY → DO */}
          <div className="space-y-8">
            {[
              {
                id: "SEE",
                title: "SEE",
                desc: "观察模式",
                detail: "命盘不是命运，而是你内在模式的投射"
              },
              {
                id: "SAY",
                title: "SAY",
                desc: "表达真相",
                detail: "从无意识的反应，到有意识的选择"
              },
              {
                id: "DO",
                title: "DO",
                desc: "活出转变",
                detail: "能量跟随意识，意识创造实相"
              }
            ].map((phase, index) => (
              <div 
                key={phase.id}
                className="group relative bg-white/60 backdrop-blur-sm border border-rose-200 rounded-2xl p-8 hover:bg-white/80 hover:border-rose-300 hover:shadow-xl transition-all cursor-pointer mt-[0px] mr-[50px] mb-[32px] ml-[0px]"
              >
                {/* Number */}
                <div className="absolute top-8 right-8 text-6xl font-light text-rose-950/5 group-hover:text-rose-950/10 transition-colors">
                  0{index + 1}
                </div>

                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl tracking-wider text-rose-950">
                      {phase.title}
                    </div>
                    <div className="text-rose-950/50">
                      {phase.desc}
                    </div>
                  </div>
                  <p className="text-rose-950/70 text-lg leading-relaxed">
                    {phase.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-32 text-center">
          <p className="text-2xl md:text-3xl text-rose-950/60 max-w-4xl mx-auto leading-relaxed">
            "命盘不是个限制，<span className="bg-gradient-to-r from-rose-600 via-amber-600 to-pink-600 bg-clip-text text-transparent"></span>，是告诉我们可以<span className="bg-gradient-to-r from-amber-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">有多少选择</span>"
          </p>
        </div>
      </div>
    </section>
  );
}