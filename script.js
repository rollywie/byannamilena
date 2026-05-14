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
    imprint: "impressum.html"
  },
  navigation: [
    { page: "home", label: "Start", href: "index.html" },
    { page: "collection", label: "Kollektion", href: "collection.html" },
    { page: "product", label: "Produkt", href: "product.html" },
    { page: "imprint", label: "Impressum", href: "impressum.html" }
  ],
  products: [
    {
      id: "structured-gold-skirt",
      name: "Structured gold skirt",
      image: "assets/products/product-01.jpg"
    },
    {
      id: "silver-embroidered-skirt",
      name: "Silver embroidered skirt",
      image: "assets/products/product-02.jpg"
    },
    {
      id: "floral-couture-skirt",
      name: "Floral couture skirt",
      image: "assets/products/product-03.jpg"
    },
    {
      id: "emerald-jacquard-skirt",
      name: "Emerald jacquard skirt",
      image: "assets/products/product-04.jpg"
    },
    {
      id: "rose-volume-skirt",
      name: "Rose volume skirt",
      image: "assets/products/product-05.jpg"
    },
    {
      id: "black-evening-skirt",
      name: "Black evening skirt",
      image: "assets/products/product-06.jpg"
    },
    {
      id: "cream-atelier-skirt",
      name: "Cream atelier skirt",
      image: "assets/products/product-07.jpg"
    }
  ],
  footerLinks: [
    { page: "imprint", label: "Impressum", href: "impressum.html" }
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
    <a class="brand-link" href="${siteConfig.paths.home}" aria-label="${siteConfig.brandName}">
      <img class="brand-logo" src="${siteConfig.logo.src}" alt="${siteConfig.logo.alt}">
    </a>
    <div class="header-spacer" aria-hidden="true"></div>
    <nav class="site-nav" id="site-menu" aria-label="Hauptnavigation">${navLinks}</nav>
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

renderHeader();
renderFooter();
renderCollection();

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

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
