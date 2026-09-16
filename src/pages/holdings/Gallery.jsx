import Section from '@components/holdings/Section';
import mekgareng from '@assets/holdings/mekgareng.jpg';
import smartCity from '@assets/holdings/smart-city.jpg';
import agriculture from '@assets/holdings/agriculture.jpg';
import map from '@assets/holdings/map.jpg';

export const galleryItems = [
  { src: mekgareng, caption: 'Smart City Development – Hartebeespoort Dam: Mekgareng Oberon' },
  { src: smartCity, caption: 'Urban Mega City Development – Conceptual Render' },
  { src: agriculture, caption: 'Sustainable Agricultural Solutions' },
  { src: map, caption: 'Land Use & Development Planning' },
];

export default function Gallery() {
  return (
    <>
      {/* <div className="page-hero">
        <h1>Our Gallery</h1>
        <p>Visualising transformative development across urban and rural landscapes.</p>
      </div> */}

      <Section title="Projects & Developments">
        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <div className="gallery-item" key={i}>
              <img src={item.src} alt={item.caption} />
              <div className="gallery-item-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}