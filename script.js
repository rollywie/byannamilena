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
    { page: "collection", label: "Kollektion", href: "collection.html" }
  ],
  products: [
    {
      id: "structured-gold-skirt",
      name: "Structured gold skirt",
      image: "assets/products/product-01.jpg",
      description: "Ein ruhiger Entwurf mit klarer Silhouette und feinem Volumen.",
      detail: "Limitierte Fertigung. Weitere Details folgen."
    },
    {
      id: "silver-embroidered-skirt",
      name: "Silver embroidered skirt",
      image: "assets/products/product-02.jpg",
      description: "Leicht, strukturiert und fuer besondere Momente gedacht.",
      detail: "Limitierte Fertigung. Weitere Details folgen."
    },
    {
      id: "floral-couture-skirt",
      name: "Floral couture skirt",
      image: "assets/products/product-03.jpg",
      description: "Ein femininer Rock mit praesenter Form und feiner Textur.",
      detail: "Limitierte Fertigung. Weitere Details folgen."
    },
    {
      id: "emerald-jacquard-skirt",
      name: "Emerald jacquard skirt",
      image: "assets/products/product-04.jpg",
      description: "Zeitloses Volumen, reduziert inszeniert.",
      detail: "Limitierte Fertigung. Weitere Details folgen."
    },
    {
      id: "rose-volume-skirt",
      name: "Rose volume skirt",
      image: "assets/products/product-05.jpg",
      description: "Ein markantes Einzelstueck mit weicher Bewegung.",
      detail: "Limitierte Fertigung. Weitere Details folgen."
    },
    {
      id: "black-evening-skirt",
      name: "Black evening skirt",
      image: "assets/products/product-06.jpg",
      description: "Schlicht im Aufbau, praezise in der Wirkung.",
      detail: "Limitierte Fertigung. Weitere Details folgen."
    },
    {
      id: "cream-atelier-skirt",
      name: "Cream atelier skirt",
      image: "assets/products/product-07.jpg",
      description: "Ein klares Statement mit ruhiger Oberflaeche.",
      detail: "Limitierte Fertigung. Weitere Details folgen."
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
      return `
        <article class="product-card">
          <a class="product-card__link" href="${href}" aria-label="${product.name} ansehen">
            <span class="product-card__media">
              <img class="product-card__image" src="${product.image}" alt="${product.name}" loading="lazy" decoding="async">
            </span>
            <span class="product-card__name">${product.name}</span>
          </a>
        </article>
      `;
    })
    .join("");
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

  detailRoot.innerHTML = `
    <article class="product-detail">
      <a class="back-link" href="${siteConfig.paths.collection}">Kollektion</a>
      <div class="product-detail__media">
        <img class="product-detail__image" src="${product.image}" alt="${product.name}" decoding="async">
      </div>
      <section class="product-detail__content" aria-labelledby="product-title">
        <p class="product-detail__eyebrow">Skirt</p>
        <h1 class="product-detail__title" id="product-title">${product.name}</h1>
        <p class="product-detail__description">${product.description}</p>
        <p class="product-detail__meta">${product.detail}</p>
        <div class="product-detail__signup" data-brevo-slot></div>
        <a class="text-link" href="${siteConfig.paths.collection}">Zurueck zur Kollektion</a>
      </section>
    </article>
  `;

  const brevoTemplate = document.querySelector("#brevo-form-template");
  const brevoSlot = detailRoot.querySelector("[data-brevo-slot]");
  if (brevoTemplate && brevoSlot) {
    brevoSlot.append(brevoTemplate.content.cloneNode(true));
  }

  document.title = `${product.name} | by Anna Milena`;
}

renderHeader();
renderFooter();
renderCollection();
renderProductDetail();

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
