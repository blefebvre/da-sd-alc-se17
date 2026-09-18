/**
 * Home hero - captured campaign state.
 *
 * Schema: stardust/eds-schema/home.json
 * Rows: background image, h1, game logo, jackpot, body, primary CTA.
 */
export default async function decorate(block) {
  const rows = [...block.children];
  const pictures = [...block.querySelectorAll('picture')];
  const directImages = [...block.querySelectorAll(':scope img')];
  const picture = pictures[0] || directImages[0];
  const heading = block.querySelector('h1');
  const images = pictures.length ? pictures : directImages;
  const gameLogo = images.find((image) => image !== picture);
  const cta = block.querySelector('a.button, strong a, em a');
  const jackpot = rows[3]?.querySelector('strong, p');
  const body = rows[4]?.querySelector('p');

  const media = document.createElement('div');
  media.className = 'home-hero-media';
  if (picture) {
    const img = picture.matches('img') ? picture : picture.querySelector('img');
    if (img) {
      img.loading = 'eager';
      img.fetchPriority = 'high';
    }
    media.append(picture);
  }

  const content = document.createElement('div');
  content.className = 'home-hero-content';
  if (heading) {
    const wrap = document.createElement('div');
    wrap.className = 'home-hero-heading';
    wrap.append(heading);
    content.append(wrap);
  }
  if (gameLogo) {
    const wrap = document.createElement('div');
    wrap.className = 'home-hero-logo';
    wrap.append(gameLogo);
    content.append(wrap);
  }
  if (jackpot) {
    const wrap = document.createElement('div');
    wrap.className = 'home-hero-jackpot';
    wrap.append(jackpot);
    content.append(wrap);
  }
  if (body) {
    const wrap = document.createElement('div');
    wrap.className = 'home-hero-copy';
    wrap.append(body);
    content.append(wrap);
  }
  if (cta) {
    const actions = document.createElement('div');
    actions.className = 'home-hero-actions';
    actions.append(cta.closest('p') || cta);
    content.append(actions);
  }

  const inner = document.createElement('div');
  inner.className = 'home-hero-inner';
  inner.append(content);
  block.replaceChildren(media, inner);
}
