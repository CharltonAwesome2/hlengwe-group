import Section from "@components/holdings/Section";
import mekgareng from "@assets/holdings/mekgareng.jpg";
import smartCity from "@assets/holdings/smart-city.jpg";
import agriculture from "@assets/holdings/agriculture.jpg";
import map from "@assets/holdings/map.jpg";
import grids from "@styles/grids.module.css";
import cards from "@styles/holdings/cards.module.css";

export const galleryItems = [
  { src: mekgareng, caption: "Smart City Development – Hartebeespoort Dam: Mekgareng Oberon" },
  { src: smartCity, caption: "Urban Mega City Development – Conceptual Render" },
  { src: agriculture, caption: "Sustainable Agricultural Solutions" },
  { src: map, caption: "Land Use & Development Planning" },
];

export default function Gallery() {
  return (
    <>
      <Section title="Projects & Developments">
        <div className={grids.galleryGrid}>
          {galleryItems.map((item, i) => (
            <div className={cards.galleryItem} key={i}>
              <img src={item.src} alt={item.caption} className={cards.galleryItemImg} />
              <div className={cards.galleryItemCaption}>{item.caption}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}