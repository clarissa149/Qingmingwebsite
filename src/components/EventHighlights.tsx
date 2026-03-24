import eventPhoto1 from "figma:asset/3e3ce99da757a036e6d256e06f846d77631ed7c4.png";
import eventPhoto2 from "figma:asset/d752ee1c8aa5abc6209dff0fc82cd34c22070e5b.png";
import eventPhoto3 from "figma:asset/2549b6936318abb14e7f998c3d567566adc2724d.png";
import eventPhoto4 from "figma:asset/2a7795553d687a843c0b8f6082fa113641bd3160.png";
import eventPhoto5 from "figma:asset/5d534131bc01864d3ef3189e72264007fe832398.png";
import eventPhoto6 from "figma:asset/8695ef5e36d56e685aabe483d3ded24f4e32b9eb.png";
import eventPhoto7 from "figma:asset/379f4ee51c761a854d4ff1b9705687262bc722c3.png";
import eventPhoto8 from "figma:asset/a05dcb57bc3a66bed28140121dcb514118e2d267.png";
import eventPhoto9 from "figma:asset/d5639b2d080cfe3aa385c7b791ce99912377a0cc.png";
import eventPhoto10 from "figma:asset/be3d653347b1757b47a29a4e9b20dea4844b3910.png";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState } from "react";

interface EventPhoto {
  id: number;
  image: string;
  category: "classroom" | "fieldStudy" | "community";
  description: string;
  size?: "large" | "medium" | "small";
}

export function EventHighlights() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Event photos categorized
  const eventPhotos: EventPhoto[] = [
    { 
      id: 1, 
      image: eventPhoto2, 
      category: "classroom",
      description: "John导师通过投影仪讲解专业图表，与学员近距离互动交流",
      size: "medium"
    },
    { 
      id: 3, 
      image: eventPhoto3, 
      category: "classroom",
      description: "学员们专注做笔记，吸收知识精华",
      size: "medium"
    },
    { 
      id: 4, 
      image: eventPhoto4, 
      category: "classroom",
      description: "课堂全景：专业讲解，学员认真聆听",
      size: "medium"
    },
    { 
      id: 5, 
      image: eventPhoto5, 
      category: "fieldStudy",
      description: "使用平板电脑查看图纸，结合实境分析风水布局",
      size: "medium"
    },
    { 
      id: 6, 
      image: eventPhoto6, 
      category: "fieldStudy",
      description: "在住宅内进行实地测量，小组共同探讨空间结构",
      size: "medium"
    },
    { 
      id: 7, 
      image: eventPhoto7, 
      category: "fieldStudy",
      description: "户外实战考察：观察房屋外围结构与环境风水",
      size: "medium"
    },
    { 
      id: 8, 
      image: eventPhoto8, 
      category: "community",
      description: "室内大合照：同频者的温暖相聚",
      size: "medium"
    },
    { 
      id: 9, 
      image: eventPhoto9, 
      category: "community",
      description: "休息时间学员们的热烈讨论与互动",
      size: "medium"
    },
    { 
      id: 10, 
      image: eventPhoto10, 
      category: "community",
      description: "课程圆满结束：学员与John导师的温馨合影",
      size: "medium"
    },
  ];

  const categories = [
    {
      key: "classroom",
      icon: "🎓",
      title: "理论课堂",
      subtitle: "The Classroom Sessions",
      description: "深入浅出的专业解析，奠定坚实的知识基础。",
      color: "from-rose-500 to-pink-500"
    },
    {
      key: "fieldStudy",
      icon: "🏡",
      title: "实战考察",
      subtitle: "Site Practical / Field Study",
      description: "走出课室，在真实的建筑空间中探寻逻辑与美学。",
      color: "from-amber-500 to-orange-500"
    },
    {
      key: "community",
      icon: "🤝",
      title: "团队凝聚",
      subtitle: "Community & Connection",
      description: "不仅是一场课程，更是一场同频者的聚会。",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const getPhotosByCategory = (categoryKey: string) => {
    return eventPhotos.filter(photo => photo.category === categoryKey);
  };

  return (
    <section id="event-highlights" className="relative min-h-screen py-32 px-6 bg-gradient-to-b from-amber-50 via-rose-50 to-pink-100 flex items-center">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-rose-100/40 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full -mt-16">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="text-sm tracking-[0.3em] text-rose-950/40 uppercase">Event Highlights</span>
          <h2 className="mt-8 text-4xl md:text-5xl text-rose-950 mb-6">
            理论与实战的碰撞
          </h2>
          <p className="text-xl text-rose-950/60 max-w-3xl mx-auto">
            精彩回顾：探索玄学智慧与现代觉察的融合之旅
          </p>
        </div>

        {/* Categories and Photos */}
        <div className="space-y-20">
          {categories.map((category) => {
            const photos = getPhotosByCategory(category.key);
            const placeholderCount = category.key === "classroom" ? 3 : category.key === "fieldStudy" ? 4 : 4;
            
            return (
              <div key={category.key} className="space-y-8">
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-4 mb-4">
                  </div>
                  <h3 className={`text-3xl md:text-4xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                    {category.title}
                  </h3>
                  <p className="text-sm tracking-wider text-rose-950/40 uppercase mb-4">{category.subtitle}</p>
                  <p className="text-lg text-rose-950/60 italic max-w-2xl mx-auto">"{category.description}"</p>
                </div>

                {/* Masonry Photo Grid */}
                {photos.length > 0 && (
                  <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry gutter="1.5rem">
                      {photos.map((photo) => (
                        <div
                          key={photo.id}
                          className="group relative overflow-hidden bg-white/40 backdrop-blur-sm border border-rose-200/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                          onClick={() => setLightboxImage(photo.image)}
                        >
                          <div className={`${photo.size === 'large' ? 'aspect-[16/9]' : 'aspect-[4/3]'} overflow-hidden`}>
                            <img
                              src={photo.image}
                              alt={photo.description}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>

                          {/* Hover Overlay with Description */}
                          <div className="absolute inset-0 bg-gradient-to-t from-rose-950/90 via-rose-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-6">
                              <p className="text-white text-lg">{photo.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Masonry>
                  </ResponsiveMasonry>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="mt-24 text-center">
          <p className="text-2xl md:text-3xl text-rose-950/60 max-w-4xl mx-auto leading-relaxed">
            "每一次学习，都是一次<span className="bg-gradient-to-r from-rose-600 via-amber-600 to-pink-600 bg-clip-text text-transparent">蜕变</span>的开始。<br />
            感谢所有<span className="bg-gradient-to-r from-amber-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">同行者</span>的信任与支持。"
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <img
              src={lightboxImage}
              alt="放大查看"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}