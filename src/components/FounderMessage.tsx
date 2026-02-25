import { Sprout } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import founderPortrait from "figma:asset/988fa14e56481ce23120b5dde57fe2a5a18f3a2c.png";

export function FounderMessage() {
  return (
    <section className="relative min-h-screen pt-32 pb-12 px-6 bg-gradient-to-b from-pink-100 via-rose-50 to-amber-50 flex items-center">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-amber-100/40 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-4xl mx-auto -mt-16">
        {/* Section Label */}
        <div className="mb-20 text-center">
          <span className="text-sm tracking-[0.3em] text-rose-950/40 uppercase">Founder's Voice</span>
          <h2 className="mt-8 text-4xl md:text-5xl text-rose-950">
            创办人心声
          </h2>
        </div>

        {/* Portrait and Quote Side by Side */}
        <div className="mb-16 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Founder Portrait - Left (Raw) */}
          <div className="flex-shrink-0">
            <img 
              src={founderPortrait}
              alt="创办人"
              className="w-72 h-auto object-cover"
            />
          </div>

          {/* Quote - Right (Special Styling) */}
          <div className="flex-1 flex items-center">
            <div className="relative">
              {/* Decorative quote mark */}
              <div className="absolute -top-6 -left-4 text-8xl text-rose-300/30 leading-none">"</div>
              
              <div className="relative pl-8">
                <p className="text-3xl md:text-4xl text-rose-950/70 leading-relaxed mb-6">
                  内在力量的蜕变，<br />从一颗<span className="bg-gradient-to-r from-rose-600 via-amber-600 to-pink-600 bg-clip-text text-transparent">种子</span>开始
                </p>
                
                {/* Signature */}
                <div className="flex items-center gap-3 mt-8">
                  <div className="h-px w-12 bg-gradient-to-r from-rose-400 to-transparent"></div>
                  <p className="text-lg text-rose-950/60">
                    <span className="bg-gradient-to-r from-rose-600 via-amber-600 to-pink-600 bg-clip-text text-transparent">John 欧阳</span>
                    <span className="text-sm text-rose-950/40 ml-2">创办人 · 导师</span>
                  </p>
                </div>
              </div>
              
              {/* Decorative bottom quote mark */}
              <div className="absolute -bottom-6 right-0 text-8xl text-rose-300/30 leading-none">"</div>
            </div>
          </div>
        </div>

        {/* Why Create Qingming */}
        <div className="mb-16 space-y-6 text-center">
          <h3 className="text-2xl text-rose-950">我为什么创立晴明？</h3>
          <p className="text-xl text-rose-950/60 leading-relaxed">
            不是为了预测未来。<br />
            也不是为了诉你人生会走向哪里。
          </p>
          <p className="text-xl text-rose-950/70 leading-relaxed">
            我始终相信：<br />
            真正能改变人生的，是你内在那股准备发芽的力量。
          </p>
          <p className="text-xl text-rose-950/70 leading-relaxed">
            因此无论是紫微斗数、风水布局、能量管理，<br />
            晴明做的一切，都围绕一个核心使命：
          </p>
          {/* Key Insight */}
          <div className="mt-10 text-center">
            <p className="text-2xl md:text-3xl text-rose-950/60 max-w-4xl mx-auto leading-relaxed">"把这颗种子放回你的心中，让它<span className="bg-gradient-to-r from-rose-600 via-amber-600 to-pink-600 bg-clip-text text-transparent">滋润、萌芽</span><span className="bg-gradient-to-r from-amber-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">、成长</span>"</p>
          </div>
        </div>
      </div>
    </section>
  );
}