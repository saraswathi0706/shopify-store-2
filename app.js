// 5 Demo Products Data (Cropped from user collage)
const PRODUCTS = [
  {
    id: 0,
    title: "Pure Face Serum",
    vendor: "Pure Organics",
    price: "$45.00",
    compare: "$60.00",
    badge: "Best Seller",
    image: "assets/pure_face_serum.png",
    desc: "Advanced face serum formulated with pure Vitamin C and organic botanical extracts to restore natural radiance, reduce fine lines, and deeply hydrate skin."
  },
  {
    id: 1,
    title: "The Five Minute Journal",
    vendor: "Intelligent Change",
    price: "$29.00",
    compare: "$35.00",
    badge: "Trending",
    image: "assets/five_minute_journal.png",
    desc: "The original Five Minute Journal designed to cultivate daily gratitude, improve focus, and reduce stress in just minutes a day."
  },
  {
    id: 2,
    title: "Rosefield Gold Watch",
    vendor: "Rosefield",
    price: "$129.00",
    compare: "$159.00",
    badge: "Elegant",
    image: "assets/rosefield_watch.png",
    desc: "Elegant Rosefield gold-toned watch featuring a minimalist white dial, quartz movement, and premium nude leather strap."
  },
  {
    id: 3,
    title: "Canon EOS DSLR Camera",
    vendor: "Canon",
    price: "$599.00",
    compare: "$699.00",
    badge: "Sale",
    image: "assets/canon_eos_camera.png",
    desc: "Premium Canon EOS mirrorless digital camera bundle featuring a versatile zoom lens, high-resolution sensor, and wireless sharing capabilities."
  },
  {
    id: 4,
    title: "Sandalwood Scented Candle",
    vendor: "Aroma Co.",
    price: "$32.00",
    compare: "$40.00",
    badge: "Handmade",
    image: "assets/sandalwood_candle.png",
    desc: "Hand-poured sandalwood scented candle made with natural soy wax and lead-free cotton wick. Promotes a calming and relaxing environment."
  }
];

// Cart State Management
let CART = [
  { ...PRODUCTS[0], quantity: 1 } // Pre-load 1 item initially
];

// Showcase Section Settings State
const state = {
  eyebrow: "Designed with intention",
  heading: "Sensory design.<br>Refined living.",
  headingSize: "h1",
  text: "A collection of thoughtful goods made to elevate the everyday rituals that shape your day.",
  image: "assets/pure_face_serum.png",
  layout: "image_first",
  colorBg: "#F5F4F0",
  colorText: "#181817",
  colorBtn: "#181817",
  colorBtnText: "#FFFFFF",
  radius: 20,
  paddingTop: 96,
  paddingBottom: 96,
  buttonLabel: "Explore the collection",
  buttonLink: "#catalog-anchor",
  
  // 4 Benefit Card Blocks
  cards: [
    {
      icon: "stars",
      title: "Premium Craftsmanship",
      desc: "Made from exceptional materials selected for enduring beauty."
    },
    {
      icon: "leaf",
      title: "Organic & Sustainable",
      desc: "100% natural ingredients, plant wax, and ethical manufacturing."
    },
    {
      icon: "shield",
      title: "Made for Real Life",
      desc: "Durability, without compromising on luxury or daily refinement."
    },
    {
      icon: "truck",
      title: "Delivered with Care",
      desc: "Considered delivery service from our design studio to your door."
    }
  ],

  // Empty state modifiers
  emptyEyebrow: false,
  emptyHeading: false,
  emptyText: false,
  emptyCta: false,
  emptyImage: false,
  emptyCards: false
};

// SVG Icon Helpers mapping Vercel icons
const ICON_SVGS = {
  stars: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 4C11 4 5 8.8 5 15c0 2.8 1.8 5 4.5 5C15.7 20 20 13.1 20 4Z"/><path d="M4 20c2.8-4.1 6.2-7.2 11-10"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3 20 6v5c0 5.2-3.4 8.7-8 10-4.6-1.3-8-4.8-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-4.8"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6h11v10H3zM14 10h3.5l3 3V16H14z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>`
};

// Initialize Icons
lucide.createIcons();

// DOM elements mapping
const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

const inputEyebrow = document.getElementById('input-eyebrow');
const inputHeading = document.getElementById('input-heading');
const inputHeadingSize = document.getElementById('input-heading-size');
const inputText = document.getElementById('input-text');
const inputImage = document.getElementById('input-image');
const inputLayoutRadios = document.getElementsByName('layout');

const colorBg = document.getElementById('color-bg');
const colorText = document.getElementById('color-text');
const colorBtn = document.getElementById('color-btn');
const colorBtnText = document.getElementById('color-btn-text');

const inputRadius = document.getElementById('input-radius');
const valRadius = document.getElementById('val-radius');
const inputPaddingTop = document.getElementById('input-padding-top');
const valPaddingTop = document.getElementById('val-padding-top');
const inputPaddingBottom = document.getElementById('input-padding-bottom');
const valPaddingBottom = document.getElementById('val-padding-bottom');

const inputButtonLabel = document.getElementById('input-button-label');
const inputButtonLink = document.getElementById('input-button-link');

const viewport = document.getElementById('theme-viewport');
const btnDesktop = document.getElementById('btn-desktop');
const btnMobile = document.getElementById('btn-mobile');

const codeDisplay = document.getElementById('liquid-code-display');
const copyCodeBtn = document.getElementById('copy-code-btn');

const productsGrid = document.getElementById('product-grid-container');
const demoProductsGrid = document.getElementById('demo-products-grid');

const modal = document.getElementById('store-password-modal');
const viewStoreBtn = document.getElementById('view-store-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');

// Accordion headers
document.querySelectorAll('.card-acc-header').forEach(header => {
  header.addEventListener('click', () => {
    const parent = header.parentElement;
    const isOpen = parent.classList.contains('open');
    document.querySelectorAll('.card-acc-item').forEach(item => item.classList.remove('open'));
    if (!isOpen) {
      parent.classList.add('open');
    }
  });
});

// Tab Switcher
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    
    tab.classList.add('active');
    const tabId = `tab-${tab.getAttribute('data-tab')}`;
    document.getElementById(tabId).classList.add('active');
  });
});

// Viewport controls
btnDesktop.addEventListener('click', () => {
  btnDesktop.classList.add('active');
  btnMobile.classList.remove('active');
  viewport.className = 'viewport desktop';
});

btnMobile.addEventListener('click', () => {
  btnMobile.classList.add('active');
  btnDesktop.classList.remove('active');
  viewport.className = 'viewport mobile';
});

// Modal Actions
viewStoreBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.remove('active');
  });
});

// Close modal if clicked outside content
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});

// Bind Input Event Listeners
function bindInputListeners() {
  const inputs = [
    inputEyebrow, inputHeading, inputHeadingSize, inputText, inputImage,
    colorBg, colorText, colorBtn, colorBtnText,
    inputRadius, inputPaddingTop, inputPaddingBottom,
    inputButtonLabel, inputButtonLink
  ];

  inputs.forEach(el => {
    if (el) el.addEventListener('input', updateStateFromControls);
  });

  inputLayoutRadios.forEach(radio => {
    radio.addEventListener('change', updateStateFromControls);
  });

  // Bind Card inputs
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`card${i}-icon`).addEventListener('change', updateStateFromControls);
    document.getElementById(`card${i}-title`).addEventListener('input', updateStateFromControls);
    document.getElementById(`card${i}-desc`).addEventListener('input', updateStateFromControls);
  }
}

// Update State from Form Controls
function updateStateFromControls() {
  state.eyebrow = inputEyebrow.value;
  state.heading = inputHeading.value;
  state.headingSize = inputHeadingSize.value;
  state.text = inputText.value;
  state.image = inputImage.value;
  
  inputLayoutRadios.forEach(radio => {
    if (radio.checked) state.layout = radio.value;
  });

  state.colorBg = colorBg.value;
  state.colorText = colorText.value;
  state.colorBtn = colorBtn.value;
  state.colorBtnText = colorBtnText.value;

  state.radius = parseInt(inputRadius.value);
  valRadius.textContent = `${state.radius}px`;
  state.paddingTop = parseInt(inputPaddingTop.value);
  valPaddingTop.textContent = `${state.paddingTop}px`;
  state.paddingBottom = parseInt(inputPaddingBottom.value);
  valPaddingBottom.textContent = `${state.paddingBottom}px`;

  state.buttonLabel = inputButtonLabel.value;
  state.buttonLink = inputButtonLink.value;

  // Sync Cards
  for (let i = 0; i < 4; i++) {
    state.cards[i].icon = document.getElementById(`card${i+1}-icon`).value;
    state.cards[i].title = document.getElementById(`card${i+1}-title`).value;
    state.cards[i].desc = document.getElementById(`card${i+1}-desc`).value;
  }

  renderShowcasePreview();
  renderLiquidCode();
}

// Synchronize state values back to control values
function syncStateToControls() {
  inputEyebrow.value = state.emptyEyebrow ? "" : state.eyebrow;
  inputHeading.value = state.emptyHeading ? "" : state.heading;
  inputHeadingSize.value = state.headingSize;
  inputText.value = state.emptyText ? "" : state.text;
  inputImage.value = state.emptyImage ? "" : state.image;

  inputLayoutRadios.forEach(radio => {
    radio.checked = radio.value === state.layout;
  });

  colorBg.value = state.colorBg;
  colorText.value = state.colorText;
  colorBtn.value = state.colorBtn;
  colorBtnText.value = state.colorBtnText;

  inputRadius.value = state.radius;
  valRadius.textContent = `${state.radius}px`;
  inputPaddingTop.value = state.paddingTop;
  valPaddingTop.textContent = `${state.paddingTop}px`;
  inputPaddingBottom.value = state.paddingBottom;
  valPaddingBottom.textContent = `${state.paddingBottom}px`;

  inputButtonLabel.value = state.emptyCta ? "" : state.buttonLabel;
  inputButtonLink.value = state.buttonLink;

  // Cards
  for (let i = 0; i < 4; i++) {
    document.getElementById(`card${i+1}-icon`).value = state.cards[i].icon;
    document.getElementById(`card${i+1}-title`).value = state.cards[i].title;
    document.getElementById(`card${i+1}-desc`).value = state.cards[i].desc;
  }
}

// Render Showcase section inside the theme viewport (graceful degradation demo)
function renderShowcasePreview() {
  const anchor = document.getElementById('feature-showcase-anchor');
  if (!anchor) return;

  const showEyebrow = !state.emptyEyebrow && state.eyebrow;
  const showHeading = !state.emptyHeading && state.heading;
  const showText = !state.emptyText && state.text;
  const showCta = !state.emptyCta && state.buttonLabel;
  const showImage = !state.emptyImage && state.image;
  const showCards = !state.emptyCards;

  // Image block
  let mediaHTML = "";
  if (showImage) {
    const isRight = state.layout === "text_first" ? "premium-feature-showcase__media--right" : "premium-feature-showcase__media--left";
    mediaHTML = `
      <div class="premium-feature-showcase__media ${isRight}" data-feature-reveal>
        <img src="${state.image}" class="premium-feature-showcase__image" alt="${state.heading}">
      </div>
    `;
  }

  // Copy blocks
  let eyebrowHTML = showEyebrow ? `<p class="premium-feature-showcase__eyebrow">${escapeHTML(state.eyebrow)}</p>` : "";
  let headingHTML = showHeading ? `<h2 class="premium-feature-showcase__heading ${state.headingSize}">${state.heading}</h2>` : "";
  let textHTML = showText ? `<div class="premium-feature-showcase__description rte"><p>${escapeHTML(state.text).replace(/\n/g, '<br>')}</p></div>` : "";
  
  let buttonHTML = "";
  if (showCta) {
    buttonHTML = `
      <a class="premium-feature-showcase__button" href="${state.buttonLink || '#'}">
        <span>${escapeHTML(state.buttonLabel)}</span>
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M2 8h11M9 3l5 5-5 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"/></svg>
      </a>
    `;
  }

  const contentClass = `premium-feature-showcase__content ${state.layout === 'text_first' ? 'premium-feature-showcase__content--left' : ''}`;
  const innerClass = `premium-feature-showcase__inner ${!showImage ? 'premium-feature-showcase__inner--no-media' : ''} ${(!showEyebrow && !showHeading && !showText && !showCta) ? 'premium-feature-showcase__inner--no-content' : ''}`;

  // 4 Cards block
  let cardsHTML = "";
  if (showCards) {
    const cardsListHTML = state.cards.map(card => {
      const iconSVG = ICON_SVGS[card.icon] || "";
      return `
        <article class="premium-feature-showcase__card" data-feature-reveal>
          <div class="premium-feature-showcase__icon">${iconSVG}</div>
          <h3 class="premium-feature-showcase__card-title">${escapeHTML(card.title)}</h3>
          <div class="premium-feature-showcase__card-description rte">
            <p>${escapeHTML(card.desc)}</p>
          </div>
        </article>
      `;
    }).join("");

    cardsHTML = `
      <div class="premium-feature-showcase__features" aria-label="Product benefits">
        ${cardsListHTML}
      </div>
    `;
  }

  // Compose CSS styles based on custom colors and custom spacing settings
  const containerStyle = `
    --pfs-background: ${state.colorBg};
    --pfs-text: ${state.colorText};
    --pfs-button: ${state.colorBtn};
    --pfs-button-text: ${state.colorBtnText};
    --pfs-radius: ${state.radius}px;
    --pfs-padding-top: ${state.paddingTop}px;
    --pfs-padding-bottom: ${state.paddingBottom}px;
  `;

  anchor.innerHTML = `
    <section class="premium-feature-showcase" data-feature-showcase style="${containerStyle}">
      <div class="premium-feature-showcase__container">
        <div class="${innerClass}">
          ${mediaHTML}
          <div class="${contentClass}" data-feature-reveal>
            ${eyebrowHTML}
            ${headingHTML}
            ${textHTML}
            ${buttonHTML}
          </div>
        </div>
        ${cardsHTML}
      </div>
    </section>
  `;

  // Re-observe scroll reveal if reveal class works
  document.querySelectorAll('[data-feature-reveal]').forEach(item => item.classList.add('is-visible'));
}

// Render dynamic liquid file format matching customizer inputs
function renderLiquidCode() {
  const blocksJSON = state.cards.map((c, i) => {
    return `        {
          "type": "feature_card",
          "settings": {
            "icon": "${c.icon}",
            "title": "${c.title}",
            "desc": "${c.desc}"
          }
        }`;
  }).join(",\n");

  const template = `{% comment %}
  Premium Feature Showcase Section
  Replicating ng-shopify.vercel.app aesthetics
{% endcomment %}

<section
  id="PremiumFeatureShowcase-{{ section.id }}"
  class="premium-feature-showcase"
  data-feature-showcase
  data-animate="true"
  style="
    --pfs-background: {{ section.settings.color_bg }};
    --pfs-text: {{ section.settings.color_text }};
    --pfs-button: {{ section.settings.color_button }};
    --pfs-button-text: {{ section.settings.color_button_text }};
    --pfs-radius: {{ section.settings.border_radius }}px;
    --pfs-padding-top: {{ section.settings.padding_top }}px;
    --pfs-padding-bottom: {{ section.settings.padding_bottom }}px;
  "
>
  <div class="premium-feature-showcase__container">
    <div class="premium-feature-showcase__inner {% if section.settings.image == blank %}premium-feature-showcase__inner--no-media{% endif %}">
      
      {%- if section.settings.image != blank -%}
        <div class="premium-feature-showcase__media {% if section.settings.layout == 'text_first' %}premium-feature-showcase__media--right{% else %}premium-feature-showcase__media--left{% endif %}" data-feature-reveal>
          <img
            src="{{ section.settings.image | image_url: width: 1200 }}"
            alt="{{ section.settings.image.alt | default: section.settings.heading | escape }}"
            loading="lazy"
            class="premium-feature-showcase__image"
          >
        </div>
      {%- endif -%}

      <div class="premium-feature-showcase__content {% if section.settings.layout == 'text_first' %}premium-feature-showcase__content--left{% endif %}" data-feature-reveal>
        {%- if section.settings.eyebrow != blank -%}
          <p class="premium-feature-showcase__eyebrow">{{ section.settings.eyebrow | escape }}</p>
        {%- endif -%}
        
        {%- if section.settings.heading != blank -%}
          <h2 class="premium-feature-showcase__heading {{ section.settings.heading_size }}">
            {{ section.settings.heading }}
          </h2>
        {%- endif -%}

        {%- if section.settings.text != blank -%}
          <div class="premium-feature-showcase__description rte">
            {{ section.settings.text }}
          </div>
        {%- endif -%}

        {%- if section.settings.button_label != blank -%}
          <a class="premium-feature-showcase__button" href="{{ section.settings.button_link | default: '#' }}">
            <span>{{ section.settings.button_label | escape }}</span>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M2 8h11M9 3l5 5-5 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"/></svg>
          </a>
        {%- endif -%}
      </div>
    </div>

    {%- if section.blocks.size > 0 -%}
      <div class="premium-feature-showcase__features" aria-label="Product benefits">
        {%- for block in section.blocks -%}
          <article class="premium-feature-showcase__card" {{ block.shopify_attributes }} data-feature-reveal>
            <div class="premium-feature-showcase__icon">
              {%- case block.settings.icon -%}
                {%- when 'stars' -%}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z"/></svg>
                {%- when 'leaf' -%}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 4C11 4 5 8.8 5 15c0 2.8 1.8 5 4.5 5C15.7 20 20 13.1 20 4Z"/><path d="M4 20c2.8-4.1 6.2-7.2 11-10"/></svg>
                {%- when 'shield' -%}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3 20 6v5c0 5.2-3.4 8.7-8 10-4.6-1.3-8-4.8-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-4.8"/></svg>
                {%- when 'truck' -%}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6h11v10H3zM14 10h3.5l3 3V16H14z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>
              {%- endcase -%}
            </div>
            <h3 class="premium-feature-showcase__card-title">{{ block.settings.title | escape }}</h3>
            <div class="premium-feature-showcase__card-description rte">
              {{ block.settings.desc }}
            </div>
          </article>
        {%- endfor -%}
      </div>
    {%- endif -%}
  </div>
</section>

{% schema %}
{
  "name": "Feature Showcase",
  "tag": "section",
  "class": "section",
  "settings": [
    {
      "type": "image_picker",
      "id": "image",
      "label": "Showcase Image"
    },
    {
      "type": "select",
      "id": "layout",
      "label": "Image alignment (Desktop)",
      "options": [
        { "value": "image_first", "label": "Left" },
        { "value": "text_first", "label": "Right" }
      ],
      "default": "${state.layout}"
    },
    {
      "type": "text",
      "id": "eyebrow",
      "label": "Eyebrow text",
      "default": "${state.eyebrow}"
    },
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "${state.heading.replace(/<br>/g, ' ')}"
    },
    {
      "type": "select",
      "id": "heading_size",
      "label": "Heading size",
      "options": [
        { "value": "h2", "label": "Small" },
        { "value": "h1", "label": "Medium" },
        { "value": "h0", "label": "Large" }
      ],
      "default": "${state.headingSize}"
    },
    {
      "type": "richtext",
      "id": "text",
      "label": "Description",
      "default": "<p>${state.text}</p>"
    },
    {
      "type": "text",
      "id": "button_label",
      "label": "Button label",
      "default": "${state.buttonLabel}"
    },
    {
      "type": "url",
      "id": "button_link",
      "label": "Button link"
    },
    {
      "type": "header",
      "content": "Aesthetics Settings"
    },
    {
      "type": "color",
      "id": "color_bg",
      "label": "Background",
      "default": "${state.colorBg}"
    },
    {
      "type": "color",
      "id": "color_text",
      "label": "Text color",
      "default": "${state.colorText}"
    },
    {
      "type": "color",
      "id": "color_button",
      "label": "Button background",
      "default": "${state.colorBtn}"
    },
    {
      "type": "color",
      "id": "color_button_text",
      "label": "Button text",
      "default": "${state.colorBtnText}"
    },
    {
      "type": "range",
      "id": "border_radius",
      "min": 0,
      "max": 40,
      "step": 2,
      "unit": "px",
      "label": "Border Radius",
      "default": ${state.radius}
    },
    {
      "type": "range",
      "id": "padding_top",
      "min": 20,
      "max": 140,
      "step": 4,
      "unit": "px",
      "label": "Padding Top",
      "default": ${state.paddingTop}
    },
    {
      "type": "range",
      "id": "padding_bottom",
      "min": 20,
      "max": 140,
      "step": 4,
      "unit": "px",
      "label": "Padding Bottom",
      "default": ${state.paddingBottom}
    }
  ],
  "blocks": [
    {
      "type": "feature_card",
      "name": "Benefit Block Card",
      "limit": 4,
      "settings": [
        {
          "type": "select",
          "id": "icon",
          "label": "Icon Type",
          "options": [
            { "value": "stars", "label": "Stars" },
            { "value": "leaf", "label": "Leaf" },
            { "value": "shield", "label": "Shield" },
            { "value": "truck", "label": "Truck" }
          ],
          "default": "stars"
        },
        {
          "type": "text",
          "id": "title",
          "label": "Title"
        },
        {
          "type": "richtext",
          "id": "desc",
          "label": "Description"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Premium Feature Showcase",
      "blocks": [
${blocksJSON}
      ]
    }
  ]
}
{% endschema %}`;

  codeDisplay.textContent = template;
}

// Copy Code Button
copyCodeBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(codeDisplay.textContent).then(() => {
    const originalHTML = copyCodeBtn.innerHTML;
    copyCodeBtn.innerHTML = '<i data-lucide="check"></i> Copied!';
    lucide.createIcons();
    setTimeout(() => {
      copyCodeBtn.innerHTML = originalHTML;
      lucide.createIcons();
    }, 2000);
  });
});

// Render simulated storefront products catalog (from PRODUCTS array)
function renderStorefrontProducts() {
  if (!productsGrid) return;
  productsGrid.innerHTML = PRODUCTS.map(p => `
    <article class="product-card">
      <div class="product-card__image-wrapper">
        <img src="${p.image}" alt="${p.title}" class="product-card__image" loading="lazy">
        ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ''}
      </div>
      <div class="product-card__content">
        <span class="product-card__vendor">${p.vendor}</span>
        <h3 class="product-card__title">${p.title}</h3>
        <div class="product-card__price-row">
          <span class="product-card__price">${p.price}</span>
          ${p.compare ? `<span class="product-card__compare">${p.compare}</span>` : ''}
        </div>
        <div class="product-card-actions">
          <button class="btn-secondary" onclick="openProductModal(${p.id})">Quick View</button>
          <button class="btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    </article>
  `).join('');
}

// Render Products list inside tab 2 (Demo Products Catalog details)
function renderDemoProductsTab() {
  if (!demoProductsGrid) return;
  demoProductsGrid.innerHTML = PRODUCTS.map(p => {
    return `
      <div class="product-card">
        <div class="product-img-holder" style="height: 240px; overflow:hidden;">
          <img src="${p.image}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <div class="product-info">
          <span class="p-collection">${p.vendor}</span>
          <h3 class="p-title">${p.title}</h3>
          <p class="p-desc">${p.desc}</p>
          <div class="product-tags">
            <span class="p-tag">${p.badge || "Essentials"}</span>
            <span class="p-tag">${p.compare ? 'On Sale' : 'Regular'}</span>
          </div>
          <div class="product-meta-row">
            <span class="p-price">${p.price}</span>
            <button class="btn btn-secondary btn-sm feature-product-action" data-img="${p.image}" data-title="${p.title}" data-desc="${p.desc}">
              Feature in Showcase
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Handle select featured product
  document.querySelectorAll('.feature-product-action').forEach(btn => {
    btn.addEventListener('click', () => {
      state.image = btn.getAttribute('data-img');
      state.heading = btn.getAttribute('data-title');
      state.text = btn.getAttribute('data-desc');
      
      state.emptyImage = false;
      state.emptyHeading = false;
      state.emptyText = false;
      
      syncStateToControls();
      renderShowcasePreview();
      renderLiquidCode();
      
      // Go back to Customizer tab
      tabs[0].click();
      document.querySelector('.preview-area').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// CART DRAWER STATE & ACTIONS
window.openCartDrawer = function() {
  document.getElementById('CartDrawerModal').removeAttribute('hidden');
};

window.closeCartDrawer = function() {
  document.getElementById('CartDrawerModal').setAttribute('hidden', '');
};

window.addToCart = function(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;
  const existing = CART.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    CART.push({ ...p, quantity: 1 });
  }
  updateCartUI();
  openCartDrawer();
};

window.changeQty = function(productId, delta) {
  const item = CART.find(prod => prod.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    updateCartUI();
  }
};

window.removeFromCart = function(productId) {
  CART = CART.filter(item => item.id !== productId);
  updateCartUI();
};

function updateCartUI() {
  const badges = document.querySelectorAll('.cart-count');
  const totalCount = CART.reduce((sum, item) => sum + item.quantity, 0);
  badges.forEach(b => b.textContent = totalCount);

  const container = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-subtotal-val');

  if (CART.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px;">
        <i data-lucide="shopping-cart" style="width: 48px; height: 48px; margin-inline: auto; margin-bottom: 12px; color: var(--text-muted);"></i>
        <p style="font-size: 1.5rem; font-weight: 700; margin: 0 0 6px;">Your cart is empty</p>
        <p style="font-size: 1.3rem; opacity: 0.7; margin: 0 0 16px;">Add items to your cart to see them here.</p>
        <button class="cart-checkout-btn" onclick="closeCartDrawer()" style="padding: 12px 20px;">Explore Products</button>
      </div>
    `;
    lucide.createIcons();
    if (subtotalEl) subtotalEl.textContent = "$0.00";
    return;
  }

  let total = 0;
  container.innerHTML = CART.map(item => {
    const numericPrice = parseFloat(item.price.replace('$', '')) || 0;
    total += numericPrice * item.quantity;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.title}</h4>
          <div class="cart-item-price">${item.price}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove item">
          <i data-lucide="trash-2" style="width:16px; height:16px;"></i>
        </button>
      </div>
    `;
  }).join('');
  
  lucide.createIcons();
  if (subtotalEl) subtotalEl.textContent = `$${total.toFixed(2)}`;
}

// QUICK VIEW MODAL
window.openProductModal = function(index) {
  const p = PRODUCTS.find(prod => prod.id === index);
  if (!p) return;
  document.getElementById('qv-img').src = p.image;
  document.getElementById('qv-vendor').textContent = p.vendor;
  document.getElementById('qv-title').textContent = p.title;
  document.getElementById('qv-price').textContent = p.price;
  document.getElementById('qv-compare').textContent = p.compare;
  document.getElementById('qv-desc').textContent = p.desc;

  const addBtn = document.getElementById('qv-add-btn');
  addBtn.onclick = function() {
    addToCart(p.id);
    closeProductModal();
  };

  document.getElementById('QuickViewModal').removeAttribute('hidden');
  lucide.createIcons();
};

window.closeProductModal = function() {
  document.getElementById('QuickViewModal').setAttribute('hidden', '');
};

// SIZE FIT GUIDE MODAL
const SIZE_DATA = {
  inches: [
    { size: 'S', chest: '34-36"', waist: '28-30"', hips: '35-37"' },
    { size: 'M', chest: '38-40"', waist: '32-34"', hips: '39-41"' },
    { size: 'L', chest: '42-44"', waist: '36-38"', hips: '43-45"' },
    { size: 'XL', chest: '46-48"', waist: '40-42"', hips: '47-49"' }
  ],
  cm: [
    { size: 'S', chest: '86-91 cm', waist: '71-76 cm', hips: '89-94 cm' },
    { size: 'M', chest: '96-101 cm', waist: '81-86 cm', hips: '99-104 cm' },
    { size: 'L', chest: '106-111 cm', waist: '91-96 cm', hips: '109-114 cm' },
    { size: 'XL', chest: '116-121 cm', waist: '101-106 cm', hips: '119-124 cm' }
  ]
};

window.openSizeGuideModal = function() {
  document.getElementById('SizeGuideModal').removeAttribute('hidden');
  renderSizeTable('inches');
};

window.closeSizeGuideModal = function() {
  document.getElementById('SizeGuideModal').setAttribute('hidden', '');
};

window.switchSizeUnit = function(unit) {
  document.getElementById('unit-inches').classList.toggle('active', unit === 'inches');
  document.getElementById('unit-cm').classList.toggle('active', unit === 'cm');
  renderSizeTable(unit);
};

function renderSizeTable(unit) {
  const tbody = document.getElementById('size-chart-body');
  if (!tbody) return;
  tbody.innerHTML = SIZE_DATA[unit].map(row => `
    <tr>
      <td><strong>${row.size}</strong></td>
      <td>${row.chest}</td>
      <td>${row.waist}</td>
      <td>${row.hips}</td>
    </tr>
  `).join('');
}

// ESTIMATOR & COUNTDOWN TIMERS
function initDeliveryEstimator() {
  const now = new Date();
  const minDate = new Date();
  minDate.setDate(now.getDate() + 3);
  const maxDate = new Date();
  maxDate.setDate(now.getDate() + 5);
  const options = { month: 'short', day: 'numeric', weekday: 'short' };
  const dateStr = `${minDate.toLocaleDateString('en-US', options)} – ${maxDate.toLocaleDateString('en-US', options)}`;
  const rangeEl = document.getElementById('delivery-date-range');
  if (rangeEl) rangeEl.textContent = dateStr;

  function updateCountdown() {
    const cutoff = new Date();
    cutoff.setHours(17, 0, 0, 0);
    const curr = new Date();
    let diff = cutoff - curr;
    if (diff <= 0) {
      cutoff.setDate(cutoff.getDate() + 1);
      diff = cutoff - curr;
    }
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const timerEl = document.getElementById('delivery-timer');
    if (timerEl) timerEl.textContent = `${hours}h ${mins}m`;
  }
  updateCountdown();
  setInterval(updateCountdown, 60000);
}

// Graceful Degradation Testing Controls
document.getElementById('toggle-empty-eyebrow').addEventListener('click', function() {
  this.classList.toggle('active');
  state.emptyEyebrow = this.classList.contains('active');
  syncStateToControls();
  renderShowcasePreview();
  renderLiquidCode();
});

document.getElementById('toggle-empty-heading').addEventListener('click', function() {
  this.classList.toggle('active');
  state.emptyHeading = this.classList.contains('active');
  syncStateToControls();
  renderShowcasePreview();
  renderLiquidCode();
});

document.getElementById('toggle-empty-text').addEventListener('click', function() {
  this.classList.toggle('active');
  state.emptyText = this.classList.contains('active');
  syncStateToControls();
  renderShowcasePreview();
  renderLiquidCode();
});

document.getElementById('toggle-empty-cta').addEventListener('click', function() {
  this.classList.toggle('active');
  state.emptyCta = this.classList.contains('active');
  syncStateToControls();
  renderShowcasePreview();
  renderLiquidCode();
});

document.getElementById('toggle-empty-image').addEventListener('click', function() {
  this.classList.toggle('active');
  state.emptyImage = this.classList.contains('active');
  syncStateToControls();
  renderShowcasePreview();
  renderLiquidCode();
});

document.getElementById('toggle-empty-cards').addEventListener('click', function() {
  this.classList.toggle('active');
  state.emptyCards = this.classList.contains('active');
  syncStateToControls();
  renderShowcasePreview();
  renderLiquidCode();
});

document.getElementById('reset-customizer').addEventListener('click', () => {
  state.eyebrow = "Designed with intention";
  state.heading = "Sensory design.<br>Refined living.";
  state.headingSize = "h1";
  state.text = "A collection of thoughtful goods made to elevate the everyday rituals that shape your day.";
  state.image = "assets/pure_face_serum.png";
  state.layout = "image_first";
  state.colorBg = "#F5F4F0";
  state.colorText = "#181817";
  state.colorBtn = "#181817";
  state.colorBtnText = "#FFFFFF";
  state.radius = 20;
  state.paddingTop = 96;
  state.paddingBottom = 96;
  state.buttonLabel = "Explore the collection";
  state.buttonLink = "#catalog-anchor";
  
  state.emptyEyebrow = false;
  state.emptyHeading = false;
  state.emptyText = false;
  state.emptyCta = false;
  state.emptyImage = false;
  state.emptyCards = false;

  state.cards = [
    { icon: "stars", title: "Premium Craftsmanship", desc: "Made from exceptional materials selected for enduring beauty." },
    { icon: "leaf", title: "Organic & Sustainable", desc: "100% natural ingredients, plant wax, and ethical manufacturing." },
    { icon: "shield", title: "Made for Real Life", desc: "Durability, without compromising on luxury or daily refinement." },
    { icon: "truck", title: "Delivered with Care", desc: "Considered delivery service from our design studio to your door." }
  ];

  document.querySelectorAll('.btn-toggle').forEach(btn => btn.classList.remove('active'));
  
  syncStateToControls();
  renderShowcasePreview();
  renderLiquidCode();
});

// HTML escaping helper
function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Initial Bootstrap
bindInputListeners();
syncStateToControls();
renderShowcasePreview();
renderLiquidCode();
renderStorefrontProducts();
renderDemoProductsTab();
updateCartUI();
initDeliveryEstimator();
