
// --- COLOR DATA ---
const colorData = {
  '1': {
    sakuraText: `Ein Hauch Kirschblüte. Für Momente, die dir gehören.<br>Inspiriert von der japanischen Sakura-Tradition vereint diese Kollektion <strong>natürliche Baumwolle und Duft</strong> zu einem einzigen, bewussten Moment. Der feine Aroma von Reismilch und Kirschblüte umhüllt dich sanft – und erinnert dich mit jedem Atemzug daran, <strong>weiterzumachen</strong>. Durchatmen. Neu starten.`,
    mosaicCaption: `Damit dein Ritual auch nach der Wäsche weiterlebt: Jeder Lieferung liegen exklusive Proben der Sakura-Wäschepflege bei – feine Duftperlen und sanfte Tabs, die die Fasern deines Tuches nach jedem Training neu beleben. Der zarte Hauch von Kirschblüte und Reismilch bleibt. Immer wieder.`,
    images: {
      story: 'Bilder/Rosa_Produkt.png',
      fabric: 'Bilder/Rosa_Naht.png',
      banner: 'Bilder/Rituals_sakura_produkte.png',
      mosaicMain: 'Bilder/Rosa_Verpackung.png',
      mosaicTop: 'Bilder/Rosa_Duftperlen.png',
      mosaicBottom: 'Bilder/Rosa_Wäschetabs.png',
      final: 'Bilder/Final_Hero.png'
    }
  },
  '2': {
    sakuraText: `Ein Hauch süßer Orange. Wärme, die bleibt.<br>Inspiriert von der Sonne als Kraft des Lebens vereint diese Kollektion <strong>Textil und Duft</strong> zu einem einzigen, leuchtenden Ritual. Das warme Aroma von süßer Orange und Zedernholz umhüllt dich sanft – und erinnert dich mit jedem Atemzug daran, <strong>das Leben in vollen Zügen zu feiern</strong>. Licht finden. Strahlen.`,
    mosaicCaption: `Damit dein Ritual auch nach der Wäsche weiterlebt: Jeder Lieferung liegen exklusive Proben der Sakura-Wäschepflege bei – feine Duftperlen und sanfte Tabs, die die Fasern deines Tuches nach jedem Training neu beleben. Die warme Note von Orange und Zedernholz bleibt. Immer wieder.`,
    images: {
      story: 'Bilder/Orange_Produkt.png',
      fabric: 'Bilder/Orange_Naht.png',
      banner: 'Bilder/Orange_Kollektion.png',
      mosaicMain: 'Bilder/Orange_Verpackung.png',
      mosaicTop: 'Bilder/Orange_Durftperlen_Jersey.png',
      mosaicBottom: 'Bilder/Orange_Wäsche_Jersey.png',
      final: 'Bilder/Final_Hero.png'
    }
  }
};

// --- DOT CLICK HANDLER ---
document.querySelectorAll('.dot').forEach(dot => {
  dot.addEventListener('click', () => {
    document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
    dot.classList.add('active');

    const colorKey = dot.dataset.color;
    const data = colorData[colorKey];

    if (data) {
      document.getElementById('sakura-text').innerHTML = data.sakuraText;
      document.getElementById('mosaic-caption-text').textContent = data.mosaicCaption;

      document.getElementById('story-img').src = data.images.story;
      document.getElementById('fabric-img').src = data.images.fabric;
      document.getElementById('banner-img').src = data.images.banner;
      document.getElementById('mosaic-main-img').src = data.images.mosaicMain;
      document.getElementById('mosaic-top-img').src = data.images.mosaicTop;
      document.getElementById('mosaic-bottom-img').src = data.images.mosaicBottom;
      document.getElementById('final-img').src = data.images.final;
    }
  });
});

// --- FADE-IN OBSERVER ---
const fadeElements = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => observer.observe(el));

// --- FOOTER ACCORDION ---
document.querySelectorAll('.accordion-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const col = btn.closest('.footer-col.accordion');
    const isOpen = col.classList.contains('open');
    document.querySelectorAll('.footer-col.accordion').forEach(c => {
      c.classList.remove('open');
      if (c.querySelector('.accordion-toggle')) {
        c.querySelector('.accordion-toggle').setAttribute('aria-expanded', 'false');
      }
    });
    if (!isOpen) {
      col.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
