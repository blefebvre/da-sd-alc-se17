/**
 * Featured games and promotions.
 *
 * Schema: stardust/eds-schema/home.json
 * Container rows: kind | editorial media | authored card content.
 * @ew-exempt metadata kind marker (cell 1) - configuration, never displayed
 */
export default async function decorate(block) {
  const games = document.createElement('div');
  games.className = 'featured-games-grid';
  const promos = document.createElement('aside');
  promos.className = 'featured-games-promos';

  [...block.children].forEach((row) => {
    const [kindCell, mediaCell, contentCell] = [...row.children];
    const kind = kindCell?.textContent.trim().toLowerCase();
    if (kind === 'promo') {
      const link = mediaCell?.querySelector('a');
      const desktopMedia = mediaCell?.querySelector('picture, img');
      const mobileMedia = contentCell?.querySelector('picture, img');
      const promo = link || document.createElement('div');
      promo.classList.add('featured-promo');
      if (desktopMedia) desktopMedia.classList.add('featured-promo-desktop');
      if (mobileMedia) {
        mobileMedia.classList.add('featured-promo-mobile');
        promo.append(mobileMedia);
      }
      if (link) promos.append(link);
      else if (desktopMedia || mobileMedia) {
        if (desktopMedia) promo.prepend(desktopMedia);
        promos.append(promo);
      }
      return;
    }

    const card = document.createElement('article');
    card.className = 'featured-game-card';
    const media = document.createElement('div');
    media.className = 'featured-game-media';
    const picture = mediaCell?.querySelector('picture, img');
    if (picture) media.append(picture);
    const jackpot = [...(contentCell?.querySelectorAll('p') || [])]
      .find((p) => p.textContent.includes('|'));
    if (jackpot) {
      jackpot.classList.add('featured-game-jackpot');
      media.append(jackpot);
    }
    const body = document.createElement('div');
    body.className = 'featured-game-body';
    if (contentCell) {
      contentCell.querySelectorAll('strong a').forEach((link) => {
        link.classList.add('button', 'primary');
        const p = link.closest('p');
        if (p) p.classList.add('button-wrapper');
      });
      body.append(...contentCell.childNodes);
    }
    card.append(media, body);
    games.append(card);
  });

  const layout = document.createElement('div');
  layout.className = 'featured-games-layout';
  const controls = document.createElement('div');
  controls.className = 'featured-games-controls';
  controls.innerHTML = '<button type="button" aria-label="Previous game">&#8249;</button><button type="button" aria-label="Next game">&#8250;</button><span class="active"></span><span></span><span></span><span></span><span></span><span></span><span></span>';
  layout.append(games, controls, promos);
  block.replaceChildren(layout);
}
