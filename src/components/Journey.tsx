import { useState } from "react";

const milestones = [
  {
    phase: "SEE 觉察",
    gradient: "from-rose-500 to-pink-500",
    items: [
      { name: "CONNECT", title: "连接", question: "你想探索什么？" },
      { name: "CONTRACT", title: "契约", question: "你期待什么转变？" },
      { name: "CLARIFY", title: "澄清", question: "这个模式如何影响你？" },
      { name: "CHALLENGE", title: "挑战", question: "是什么限制了你？" }
    ]
  },
  {
    phase: "SAY 承诺",
    gradient: "from-amber-500 to-rose-500",
    items: [
      { name: "CO-CREATE", title: "共创", question: "你想创造什么可能？" },
      { name: "COMMIT", title: "承诺", question: "你愿意付出什么？" }
    ]
  },
  {
    phase: "DO 行动",
    gradient: "from-pink-500 to-amber-500",
    items: [
      { name: "CHANGE", title: "改变", question: "你的第一步是什么？" },
      { name: "CONTINUE", title: "持续", question: "如何保持觉察？" },
      { name: "CHECK", title: "检视", question: "你看到了什么？" },
      { name: "CLOSE", title: "完成", question: "你最深的领悟是什么？" }
    ]
  }
];

export function Journey() {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-amber-50 via-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto -mt-16">
        {/* Section Label */}
        <div className="mb-20 text-center">
          <span className="text-sm tracking-[0.3em] text-rose-950/40 uppercase">Journey</span>
          <h2 className="mt-8 text-4xl md:text-5xl text-rose-950 text-[40px]">
            十个觉察里程碑
          </h2>
          <p className="mt-6 text-xl text-rose-950/60 max-w-3xl mx-auto">
            从命盘到意识的完整旅程
          </p>
        </div>

        {/* Interaction Hint */}
        <div className="mt-12 text-center text-sm text-rose-950/40">
          点击查看教练提问
        </div>

        
        {/* Journey Timeline */}
        <div className="space-y-16">
          {milestones.map((section, sectionIndex) => (
            <div key={section.phase}>
              {/* Phase Header */}
              <div className="mb-8">
                <div className={`inline-flex items-center gap-4 bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}>
                  <span className="text-6xl">{section.phase}</span>
                </div>
              </div>

              {/* Milestones Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {section.items.map((milestone, index) => {
                  const key = `${section.phase}-${index}`;
                  const isActive = activePhase === key;
                  
                  return (
                    <div
                      key={milestone.name}
                      onClick={() => setActivePhase(isActive ? null : key)}
                      className={`
                        relative group cursor-pointer
                        bg-white/60 backdrop-blur-sm border rounded-xl p-6
                        transition-all duration-300
                        ${isActive 
                          ? 'border-rose-400 shadow-xl scale-105 bg-white/90' 
                          : 'border-rose-200 hover:bg-white/80 hover:border-rose-300 hover:shadow-lg'
                        }
                      `}
                    >
                      {/* Number */}
                      <div className="mb-4 text-sm text-rose-950/40">
                        {String(sectionIndex * 4 + index + 1).padStart(2, '0')}
                      </div>

                      {/* Name */}
                      <h4 className="mb-2 text-xl text-rose-950">
                        {milestone.name}
                      </h4>
                      <p className="text-rose-950/60">
                        {milestone.title}
                      </p>

                      {/* Hover/Active Question */}
                      <div className={`
                        mt-4 pt-4 border-t border-rose-200
                        transition-all duration-300
                        ${isActive ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0 overflow-hidden'}
                      `}>
                        <p className="text-sm italic text-rose-950/80">
                          "{milestone.question}"
                        </p>
                      </div>

                      {/* Gradient Accent */}
                      <div className={`
                        absolute bottom-0 left-0 right-0 h-1 rounded-b-xl
                        bg-gradient-to-r ${section.gradient}
                        transition-opacity duration-300
                        ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}
                      `}></div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}