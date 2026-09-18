/**
 * Winner carousel - featured winner card.
 *
 * Schema: stardust/eds-schema/home.json
 * Container row cells: winner image | winner copy and CTA | game and prize.
 */
export default async function decorate(block) {
  const row = block.firstElementChild;
  if (!row) return;
  const [photoCell, infoCell, prizeCell] = [...row.children];

  const content = document.createElement('div');
  content.className = 'winner-content';

  const visual = document.createElement('div');
  visual.className = 'winner-visual';
  const map = document.createElement('div');
  map.className = 'winner-map';
  const picture = photoCell?.querySelector('picture');
  if (picture) {
    const photo = document.createElement('div');
    photo.className = 'winner-photo';
    photo.append(picture);
    visual.append(map, photo);
  }

  const info = document.createElement('div');
  info.className = 'winner-info';
  if (infoCell) info.append(...infoCell.childNodes);

  const prize = document.createElement('div');
  prize.className = 'winner-prize';
  if (prizeCell) {
    const amount = prizeCell.querySelector('strong');
    const amountNode = amount?.closest('p') || amount;
    [...prizeCell.childNodes].forEach((node) => {
      if (node !== amountNode) prize.append(node);
    });
    if (amountNode) {
      const wrap = document.createElement('div');
      wrap.className = 'winner-amount';
      wrap.append(amountNode);
      prize.append(wrap);
    }
  }

  content.append(visual, info, prize);
  block.replaceChildren(content);
}
