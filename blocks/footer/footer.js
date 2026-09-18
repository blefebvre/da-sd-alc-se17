import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  const sections = [...footer.querySelectorAll(':scope > .section')];
  const [subscribe, social, links, misc] = sections;

  if (subscribe) {
    subscribe.classList.add('footer-subscribe');
    const wrapper = subscribe.querySelector('.default-content-wrapper');
    const paragraphs = [...(wrapper?.querySelectorAll(':scope > p') || [])];
    if (paragraphs.length >= 3) {
      const form = document.createElement('form');
      form.className = 'footer-subscribe-form';
      const input = document.createElement('input');
      input.type = 'email';
      input.placeholder = paragraphs[1].textContent.trim();
      input.setAttribute('aria-label', paragraphs[1].textContent.trim());
      const button = document.createElement('button');
      button.type = 'submit';
      button.disabled = true;
      button.textContent = paragraphs[2].textContent.trim();
      paragraphs[1].classList.add('footer-source-label');
      paragraphs[2].classList.add('footer-source-label');
      form.append(input, button);
      wrapper.append(form);
    }
  }

  if (social) {
    social.classList.add('footer-social');
    const wrapper = social.querySelector('.default-content-wrapper');
    [...(wrapper?.children || [])].forEach((item) => item.classList.add('footer-social-item'));
  }

  if (links) {
    links.classList.add('footer-links');
    const wrapper = links.querySelector('.default-content-wrapper');
    if (wrapper) {
      const columns = [];
      let current;
      [...wrapper.children].forEach((child) => {
        if (child.matches('h2')) {
          current = document.createElement('div');
          current.className = 'footer-column';
          columns.push(current);
        }
        if (current) current.append(child);
      });
      wrapper.replaceChildren(...columns);
    }
  }

  if (misc) {
    misc.classList.add('footer-misc');
    const wrapper = misc.querySelector('.default-content-wrapper');
    if (wrapper) {
      const heading = wrapper.querySelector('h3');
      const paragraphs = [...wrapper.querySelectorAll(':scope > p')];
      const otherSites = document.createElement('div');
      otherSites.className = 'footer-other-sites';
      if (heading) otherSites.append(heading);
      if (paragraphs[0]) otherSites.append(paragraphs[0]);

      const legal = document.createElement('div');
      legal.className = 'footer-legal';
      const copy = document.createElement('div');
      copy.className = 'footer-legal-copy';
      [paragraphs[1], paragraphs[3], paragraphs[4]].filter(Boolean).forEach((p) => copy.append(p));
      const certifications = document.createElement('div');
      certifications.className = 'footer-certifications';
      if (paragraphs[2]) certifications.append(paragraphs[2]);
      legal.append(copy, certifications);
      wrapper.replaceChildren(otherSites, legal);
    }
  }

  block.append(footer);
}
