const siteConfig = {
  brandName: "by Anna Milena",
  logo: {
    src: "assets/logo-black-cropped.png",
    alt: "BY ANNA MILENA"
  },
  paths: {
    home: "index.html",
    collection: "collection.html",
    product: "product.html",
    imprint: "impressum.html",
    privacy: "datenschutz.html"
  },
  navigation: [
    { page: "collection", label: "KOLLEKTION", href: "collection.html" },
    { page: "about", label: "ABOUT ME", href: "index.html#about-me" }
  ],
  products: [
    {
      id: "hanni",
      name: "Hanni",
      gallery: [
        "assets/products/hanni/01.jpg",
        "assets/products/hanni/02.jpg",
        "assets/products/hanni/03.jpg",
        "assets/products/hanni/04.jpg"
      ],
      description: "Jacquard skirt with an oversized floral pattern in red and cream. Designed to sit at the waist and fall to mid-calf, featuring side pockets and a back closure with a zipper and button.",
      detail: "Outer fabric: 100% polyester, lining: 100% viscose. Dry clean only."
    },
    {
      id: "amara",
      name: "Amara",
      gallery: [
        "assets/products/amara/01.jpg",
        "assets/products/amara/02.jpg",
        "assets/products/amara/03.jpg",
        "assets/products/amara/04.jpg",
        "assets/products/amara/05.jpg"
      ],
      description: "Jacquard skirt in soft champagne with a subtle textured gold pattern. Designed to sit at the waist and fall to mid-calf, featuring side pockets and a back closure with a zipper and button.",
      detail: "Outer fabric: 100% polyester, lining: 100% viscose. Dry clean only."
    },
    {
      id: "elli",
      name: "Elli",
      gallery: [
        "assets/products/elli/01.jpg",
        "assets/products/elli/02.jpg"
      ],
      description: "Jacquard skirt with a light blue and cream floral pattern. Designed to sit at the waist and fall to mid-calf, featuring side pockets and a back closure with a zipper and button.",
      detail: "Outer fabric: 100% polyester, lining: 100% viscose. Dry clean only."
    },
    {
      id: "liv",
      name: "Liv",
      gallery: [
        "assets/products/liv/01.jpg",
        "assets/products/liv/02.jpg",
        "assets/products/liv/03.jpg",
        "assets/products/liv/04.jpg",
        "assets/products/liv/05.jpg",
        "assets/products/liv/06.jpg"
      ],
      description: "Jacquard skirt with a delicate floral pattern in soft blue and ivory. Designed to sit at the waist and fall to mid-calf, featuring side pockets and a back closure with a zipper and button.",
      detail: "Outer fabric: 100% polyester, lining: 100% viscose. Dry clean only."
    },
    {
      id: "malou",
      name: "Malou",
      gallery: [
        "assets/products/malou/01.jpg",
        "assets/products/malou/02.jpg",
        "assets/products/malou/03.jpg",
        "assets/products/malou/04.jpg",
        "assets/products/malou/05.jpg"
      ],
      description: "Jacquard skirt with an ornamental pattern in emerald green and gold. Designed to sit at the waist and fall to mid-calf, featuring side pockets and a back closure with a zipper and button.",
      detail: "Outer fabric: 100% polyester, lining: 100% viscose. Dry clean only."
    },
    {
      id: "nola",
      name: "Nola",
      gallery: [
        "assets/products/nola/01.jpg",
        "assets/products/nola/02.jpg",
        "assets/products/nola/03.jpg",
        "assets/products/nola/04.jpg",
        "assets/products/nola/05.jpg"
      ],
      description: "Jacquard skirt in soft ivory with a subtle textured floral pattern in silver. Designed to sit at the waist and fall to mid-calf, featuring side pockets and a back closure with a zipper and button.",
      detail: "Outer fabric: 100% polyester, lining: 100% viscose. Dry clean only."
    },
    {
      id: "juna",
      name: "Juna",
      gallery: [
        "assets/products/juna/01.jpg",
        "assets/products/juna/02.jpg",
        "assets/products/juna/03.jpg",
        "assets/products/juna/04.jpg"
      ],
      description: "Jacquard skirt in deep navy with an abstract gold pattern. Designed to sit at the waist and fall to mid-calf, featuring side pockets and a back closure with a zipper and button.",
      detail: "Outer fabric: 100% polyester, lining: 100% viscose. Dry clean only."
    }
  ],
  footerLinks: [
    { page: "imprint", label: "Impressum", href: "impressum.html" },
    { page: "privacy", label: "Datenschutz", href: "datenschutz.html" }
  ]
};

function renderHeader() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;

  const currentPage = document.body.dataset.page;
  const navLinks = siteConfig.navigation
    .map((item) => {
      const current = item.page === currentPage ? ' aria-current="page"' : "";
      return `<a class="site-nav__link" href="${item.href}"${current}>${item.label}</a>`;
    })
    .join("");

  header.innerHTML = `
    <button class="icon-button menu-toggle" type="button" aria-label="Navigation oeffnen" aria-expanded="false" aria-controls="site-menu">
      <span class="menu-toggle__line"></span>
      <span class="menu-toggle__line"></span>
      <span class="menu-toggle__line"></span>
    </button>
    <nav class="site-nav site-nav--desktop" aria-label="Hauptnavigation">${navLinks}</nav>
    <a class="brand-link" href="${siteConfig.paths.home}" aria-label="${siteConfig.brandName}">
      <img class="brand-logo" src="${siteConfig.logo.src}" alt="${siteConfig.logo.alt}">
    </a>
    <div class="header-spacer" aria-hidden="true"></div>
    <nav class="site-nav site-nav--mobile" id="site-menu" aria-label="Hauptnavigation">${navLinks}</nav>
  `;
}

function renderFooter() {
  const footer = document.querySelector("[data-site-footer]");
  if (!footer) return;

  const currentPage = document.body.dataset.page;
  footer.innerHTML = siteConfig.footerLinks
    .map((item) => {
      const current = item.page === currentPage ? ' aria-current="page"' : "";
      return `<a class="site-footer__link" href="${item.href}"${current}>${item.label}</a>`;
    })
    .join("");
}

function renderCollection() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;

  grid.innerHTML = siteConfig.products
    .map((product) => {
      const href = `${siteConfig.paths.product}?product=${product.id}`;
      const coverImage = getProductCover(product);
      return `
        <article class="product-card">
          <a class="product-card__link" href="${href}" aria-label="${product.name} ansehen">
            <span class="product-card__media">
              <img class="product-card__image" src="${coverImage}" alt="${product.name}" loading="lazy" decoding="async">
            </span>
            <span class="product-card__name">${product.name}</span>
          </a>
        </article>
      `;
    })
    .join("");
}

function getProductCover(product) {
  return product.gallery[0];
}

function getCurrentProduct() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("product");
  return siteConfig.products.find((product) => product.id === productId) || siteConfig.products[0];
}

function renderProductDetail() {
  const detailRoot = document.querySelector("[data-product-detail]");
  if (!detailRoot) return;

  const product = getCurrentProduct();
  const activeImage = getProductCover(product);
  const thumbnails = product.gallery
    .map((image, index) => {
      const active = index === 0 ? ' aria-current="true"' : "";
      return `
        <button class="product-gallery__thumb" type="button" data-gallery-thumb="${image}" aria-label="Bild ${index + 1} von ${product.name} anzeigen"${active}>
          <img src="${image}" alt="" loading="lazy" decoding="async">
        </button>
      `;
    })
    .join("");

  detailRoot.innerHTML = `
    <article class="product-detail">
      <div class="product-gallery" data-product-gallery>
        <div class="product-detail__media">
          <img class="product-detail__image" src="${activeImage}" alt="${product.name}" decoding="async" data-gallery-main>
        </div>
        <div class="product-gallery__thumbs" aria-label="Produktbilder">
          ${thumbnails}
        </div>
      </div>
      <section class="product-detail__content" aria-labelledby="product-title">
        <p class="product-detail__eyebrow">Skirt</p>
        <h1 class="product-detail__title" id="product-title">${product.name}</h1>
        <p class="product-detail__description">${product.description}</p>
        <p class="product-detail__meta">${product.detail}</p>
        <div class="product-detail__signup" data-brevo-slot></div>
        <a class="text-link" href="${siteConfig.paths.collection}">Zurück zur Kollektion</a>
      </section>
    </article>
  `;

  const brevoTemplate = document.querySelector("#brevo-form-template");
  const brevoSlot = detailRoot.querySelector("[data-brevo-slot]");
  if (brevoTemplate && brevoSlot) {
    brevoSlot.append(brevoTemplate.content.cloneNode(true));
  }

  initProductGallery(detailRoot);
  document.title = `${product.name} | by Anna Milena`;
}

function initProductGallery(root) {
  const mainImage = root.querySelector("[data-gallery-main]");
  const thumbnails = root.querySelectorAll("[data-gallery-thumb]");
  if (!mainImage || thumbnails.length === 0) return;

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const nextImage = thumbnail.dataset.galleryThumb;
      if (!nextImage) return;

      mainImage.src = nextImage;
      thumbnails.forEach((item) => item.removeAttribute("aria-current"));
      thumbnail.setAttribute("aria-current", "true");
    });
  });
}

function initAboutLanguageToggle() {
  const toggle = document.querySelector("[data-language-toggle]");
  const texts = document.querySelectorAll("[data-about-text]");
  if (!toggle || texts.length === 0) return;

  toggle.addEventListener("click", () => {
    const currentLanguage = toggle.dataset.currentLanguage || "en";
    const nextLanguage = currentLanguage === "en" ? "de" : "en";

    texts.forEach((text) => {
      const isActive = text.dataset.aboutText === nextLanguage;
      text.hidden = !isActive;
      text.classList.toggle("is-active", isActive);
    });

    toggle.dataset.currentLanguage = nextLanguage;
    toggle.textContent = nextLanguage === "en" ? "Deutsch" : "English";
  });
}

renderHeader();
renderFooter();
renderCollection();
renderProductDetail();
initAboutLanguageToggle();

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav--mobile");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLAnchorElement)) return;
    menuToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    menuToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  });
}
