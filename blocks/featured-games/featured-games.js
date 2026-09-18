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
      const media = mediaCell?.querySelector('picture, img');
      if (link) promos.append(link);
      else if (media) promos.append(media);
      return;
    }

    const card = document.createElement('article');
    card.className = 'featured-game-card';
    const media = document.createElement('div');
    media.className = 'featured-game-media';
    const picture = mediaCell?.querySelector('picture');
    if (picture) media.append(picture);
    const body = document.createElement('div');
    body.className = 'featured-game-body';
    if (contentCell) body.append(...contentCell.childNodes);
    card.append(media, body);
    games.append(card);
  });

  const layout = document.createElement('div');
  layout.className = 'featured-games-layout';
  layout.append(games, promos);
  block.replaceChildren(layout);
}
