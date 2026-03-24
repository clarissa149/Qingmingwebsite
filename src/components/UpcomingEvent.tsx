import { Calendar, Clock, Flame } from "lucide-react";
import { Button } from "./ui/button";
import eventImage from "figma:asset/a23fe0e3222c36cc93797c3326d4d70d4db1362c.png";

export function UpcomingEvent() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-rose-50 via-amber-50 to-rose-100">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial from-orange-200/20 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-radial from-rose-200/20 via-transparent to-transparent blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-rose-500/10 rounded-full mb-6">
            <Flame className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-medium text-orange-900">即将到来</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-amber-600 bg-clip-text text-transparent">
              2026 丙午年
            </span>
          </h2>
          <p className="text-xl text-rose-950/60">
            九运火运的大时代
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-rose-500/20 rounded-3xl blur-2xl"></div>
            <img 
              src={eventImage} 
              alt="2026 丙午年活动" 
              className="relative w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            {/* Key Question */}
            <div className="p-6 bg-gradient-to-br from-orange-50 to-rose-50 rounded-xl border border-orange-200/50">
              <p className="text-base text-rose-950/70 mb-4">
                在火运时代里，机会来得快，风险也来得快。
              </p>
              <p className="text-lg text-rose-900 font-medium mb-6">
                👉 你的 2026 目标是什么？
              </p>
                <p className="text-base text-rose-950/70">
                  2026，不只是努力。<br />
                  而是<span className="text-orange-600 font-medium">让努力在对的能量上</span>。
                </p>
                <p className="text-base text-rose-950/60">
                  把年度目标放第一，风水为辅助的工具，协助我们达到目标。
                </p>
            </div>

            {/* Fire Amplification */}
            <div className="p-6 bg-white/60 rounded-xl border border-rose-200/50">
              <p className="text-base text-rose-950/70 mb-4">
                在九运火时代，丙午年又再加一层"火"的能量。
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  '行动力会被放大',
                  '情绪波动会被放大',
                  '竞争会被放大',
                  '机会也会被放大'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-orange-500 text-lg">🔥</span>
                    <span className="text-sm text-rose-950/80">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-base text-rose-900 font-medium mt-4">
                关键是 —— 你有没有准备好承载这股火？
              </p>
            </div>

            {/* Event Details */}
            <div className="space-y-4 p-6 bg-white/60 rounded-xl border border-rose-200/50">
              <h4 className="text-xl font-medium text-rose-900 mb-4">
                免费线上 Preview
              </h4>
              
              <div className="flex items-center gap-3 text-rose-950/70">
                <Calendar className="w-5 h-5 text-orange-600" />
                <span className="text-lg">2026 年 3 月 18 日</span>
              </div>
              
              <div className="flex items-center gap-3 text-rose-950/70">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="text-lg">8:15pm – 10:15pm（2 小时）</span>
              </div>

              <div className="mt-6 space-y-2">
                <p className="text-sm text-rose-950/60">分享内容：</p>
                <ul className="space-y-2 text-rose-950/80">
                  {[
                    '九运火运的大趋势',
                    '2026 丙午年的关键能量变化',
                    '哪些行业与方向会被推动',
                    '哪些风险需要提前避开',
                    '如何让环境支持你达成年度目标'
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">▪</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-4">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white hover:from-orange-600 hover:to-rose-600 py-6 text-lg rounded-full shadow-xl"
                onClick={() => {
                  window.open('https://wa.me/+60192144916', '_blank');
                }}
              >
                立即报名参加
              </Button>
              <p className="text-center text-sm text-rose-950/50">
                这不是迷信讲座，而是关于"时代判断 + 环境布局"的分享
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}