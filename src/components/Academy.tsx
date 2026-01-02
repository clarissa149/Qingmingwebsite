const modules = [
  {
    number: "01",
    title: "意识基础",
    focus: "从解读者到觉察者的身份转换",
    color: "from-rose-400 to-pink-400"
  },
  {
    number: "02",
    title: "映照技术",
    focus: "命盘作为意识镜子的使用方法",
    color: "from-pink-400 to-amber-400"
  },
  {
    number: "03",
    title: "觉察对话",
    focus: "引导式提问与深度倾听",
    color: "from-amber-400 to-rose-400"
  },
  {
    number: "04",
    title: "转化实践",
    focus: "从洞察到行动的整合",
    color: "from-rose-500 to-amber-500"
  }
];

export function Academy() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-rose-50 via-pink-50 to-amber-50" data-section="academy">
      <div className="max-w-7xl mx-auto -mt-16">
        {/* Section Label */}
        <div className="mb-20 text-center">
          <span className="text-sm tracking-[0.3em] text-rose-950/40 uppercase">Academy</span>
          <h2 className="mt-8 text-4xl md:text-5xl text-rose-950 text-[40px]">
            培养觉察型引导者
          </h2>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {modules.map((module) => (
            <div
              key={module.number}
              className="group relative bg-white/60 backdrop-blur-sm border border-rose-200 rounded-2xl p-12 hover:bg-white/80 hover:border-rose-300 hover:shadow-xl transition-all cursor-pointer overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

              <div className="relative">
                {/* Number */}
                <div className="mb-6 text-8xl font-light text-rose-950/5 group-hover:text-rose-950/10 transition-colors">
                  {module.number}
                </div>

                {/* Title */}
                <h3 className="mb-4 text-3xl text-rose-950">
                  {module.title}
                </h3>

                {/* Focus */}
                <p className="text-lg text-rose-950/60 leading-relaxed">
                  {module.focus}
                </p>

                {/* Accent Line */}
                <div className={`
                  mt-8 h-1 bg-gradient-to-r ${module.color} rounded-full
                  transform scale-x-0 group-hover:scale-x-100
                  transition-transform duration-500 origin-left
                `}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Growth Path */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent hidden lg:block"></div>

          {/* Stages */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stage: "观察者", desc: "学会看见模式" },
              { stage: "觉察者", desc: "理解模式背后" },
              { stage: "引导者", desc: "带领他人觉察" },
              { stage: "转化者", desc: "整合与实践" }
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                {/* Circle */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-amber-100 border-2 border-rose-300 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                    <span className="text-rose-950/80">{index + 1}</span>
                  </div>
                  <div className="absolute inset-0 w-16 h-16 bg-rose-200/30 rounded-full blur-xl"></div>
                </div>

                {/* Stage */}
                <h4 className="mb-2 text-xl text-rose-950">
                  {item.stage}
                </h4>
                <p className="text-rose-950/60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-32 text-center">
          <p className="text-2xl md:text-3xl text-rose-950/60 max-w-4xl mx-auto leading-relaxed">
            "不是教你<span className="bg-gradient-to-r from-rose-600 via-amber-600 to-pink-600 bg-clip-text text-transparent">解读命盘</span>，而是训练你<span className="bg-gradient-to-r from-amber-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">唤醒意识</span>"
          </p>
        </div>
      </div>
    </section>
  );
}