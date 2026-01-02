import { Sprout } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import redLogo from "figma:asset/febf67881220c11dd4658bbca2a3c895e41daded.png";
import founderPortrait from "figma:asset/988fa14e56481ce23120b5dde57fe2a5a18f3a2c.png";

export function FounderMessage() {
  return (
    <section className="relative min-h-screen py-32 px-6 bg-gradient-to-b from-pink-100 via-rose-50 to-amber-50 flex items-center">
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


        {/* Opening Narrative */}


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
        
        {/* Why Create Qingming */}
        <div className="mb-16 space-y-6">
          <h3 className="text-2xl text-rose-950">我为什么创立晴明？</h3>
          <p className="text-xl text-rose-950/60 leading-relaxed pl-8">
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
          <div className="bg-gradient-to-br from-rose-100 to-amber-100 border border-rose-300 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <p className="text-xl text-rose-950/80 leading-relaxed text-center">
              ✨ 把这颗种子放回你的心中，让它滋润、萌芽、成长。
            </p>
          </div>
        </div>

        {/* Qingming's Role */}
        <div className="mb-16 space-y-6">
          <h3 className="text-2xl text-rose-950">晴明的角色</h3>
          <p className="text-xl text-rose-950/60 leading-relaxed pl-8">
            不是预言者，<br />
            而是让你看见未来的可能性
          </p>
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