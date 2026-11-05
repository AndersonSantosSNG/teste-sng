(() => {
  document
    .querySelectorAll(
      'a[href^="https://www.linkedin.com/company/sngtecnologia"]',
    )
    .forEach((link) => {
      link.href =
        "https://www.linkedin.com/company/sngtecnologia/posts/?feedView=all";
    });

  document
    .querySelectorAll('a[href^="https://www.instagram.com/sngtecnologia"]')
    .forEach((link) => {
      link.href = "https://www.instagram.com/sngtecnologia/";
    });

  const addFooterIcon = (selector, icon) => {
    const link = document.querySelector(`.foot-contact-box ${selector}`);
    if (link && !link.querySelector("svg")) {
      link.insertAdjacentHTML("afterbegin", icon);
    }
  };

  addFooterIcon(
    'a[href^="tel:"]',
    '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"></path></svg>',
  );
  addFooterIcon(
    'a[href^="https://wa.me/"]',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.55 0 8.24 3.69 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.206 8.206 0 0 1-5.82 2.42c-1.45 0-2.88-.38-4.14-1.11l-.3-.17-3.08.81.82-2.99-.19-.31c-.8-1.28-1.23-2.77-1.23-4.3 0-4.55 3.69-8.24 8.24-8.24zm4.52 10.97c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.66.81-.81.98-.15.17-.31.19-.56.06-.25-.12-1.05-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.29z"></path></svg>',
  );
  addFooterIcon(
    'a[href^="mailto:"]',
    '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',
  );
  addFooterIcon(
    'a[href^="https://maps.google.com/"]',
    '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  );

  const linkedinLink = document.querySelector(
    '.foot-contact-box a[href^="https://www.linkedin.com/company/sngtecnologia"]',
  );
  if (linkedinLink && !linkedinLink.querySelector("svg")) {
    linkedinLink.insertAdjacentHTML(
      "afterbegin",
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>',
    );
  }

  const instagramLink = document.querySelector(
    '.foot-contact-box a[href^="https://www.instagram.com/sngtecnologia"]',
  );
  if (instagramLink && !instagramLink.querySelector("svg")) {
    instagramLink.insertAdjacentHTML(
      "afterbegin",
      '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><path d="M17.5 6.5h.01"></path></svg>',
    );
  }

  const footerCertifications = document.querySelector(".footer-certifications");
  const footerBrand = document.querySelector(".footer-brand");
  if (footerCertifications && footerBrand) {
    footerBrand.append(footerCertifications);
  }

  const clientCarousel = document.querySelector(".client-logos");
  if (clientCarousel && !clientCarousel.dataset.carouselReady) {
    const clientNames = {
      "01_abbott.webp": "Abbott",
      "03_air_products.webp": "Air Products",
      "04_avon.webp": "Avon",
      "05_bacardi.webp": "Bacardi",
      "06_baxter.webp": "Baxter",
      "07_bic.webp": "BIC",
      "08_o_boticario.webp": "O Boticário",
      "09_c_and_a.webp": "C&A",
      "11_chemtura.webp": "Chemtura",
      "12_continental.webp": "Continental",
      "14_embraer.webp": "Embraer",
      "16_ferrero.webp": "Ferrero",
      "17_gates.webp": "Gates",
      "18_honda.webp": "Honda",
      "19_igesp.webp": "Hospital IGESP",
      "20_intelli.webp": "Intelli",
      "21_iscar.webp": "ISCAR",
      "22_kspg_automotive.webp": "KSPG Automotive",
      "23_lanxess.webp": "Lanxess",
      "25_leaseplan.webp": "LeasePlan",
      "26_makita.webp": "Makita",
      "30a_organon.webp": "Organon",
      "30b_schering_plough.webp": "Schering-Plough",
      "32_sandvik.webp": "Sandvik",
      "35_sulzer.webp": "Sulzer",
      "36_taegutec.webp": "TaeguTec",
      "37_titan.webp": "Titan",
      "38_toyota.webp": "Toyota",
      "39_unimed.webp": "Unimed",
      "40_yazaki.webp": "Yazaki",
      "41_zambon.webp": "Zambon",
    };
    [...clientCarousel.querySelectorAll("img")].forEach((logo) => {
      const fileName = new URL(logo.src, window.location.href).pathname
        .split("/")
        .pop()
        .toLowerCase();
      const clientName = clientNames[fileName];
      if (!clientName) return;
      logo.alt = clientName;
      logo.title = clientName;
      logo.setAttribute("aria-label", clientName);
    });

    const carouselWindow = document.createElement("div");
    carouselWindow.className = "client-carousel-window";
    clientCarousel.parentNode.insertBefore(carouselWindow, clientCarousel);
    carouselWindow.append(clientCarousel);
    const originalLogos = [...clientCarousel.children];
    originalLogos.forEach((logo) => {
      const clone = logo.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.alt = "";
      clientCarousel.append(clone);
    });
    clientCarousel.dataset.carouselReady = "true";
  }

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const menuButton = document.querySelector(".menu-button");
  const mainNav = document.querySelector(".main-nav");
  if (menuButton && mainNav) {
    const menuIcon =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>';
    const closeIcon =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>';
    const setMenu = (open) => {
      mainNav.classList.toggle("open", open);
      menuButton.setAttribute(
        "aria-label",
        open ? "Fechar menu" : "Abrir menu",
      );
      menuButton.innerHTML = open ? closeIcon : menuIcon;
    };

    menuButton.addEventListener("click", () =>
      setMenu(!mainNav.classList.contains("open")),
    );
    mainNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });
  }

  const flowSteps = [...document.querySelectorAll(".flow-step")];
  if (flowSteps.length > 0 && !reducedMotion) {
    let activeFlowStep = 0;
    window.setInterval(() => {
      flowSteps[activeFlowStep].classList.remove("active");
      flowSteps[activeFlowStep].removeAttribute("aria-current");
      flowSteps[activeFlowStep].lastElementChild.textContent =
        flowSteps[activeFlowStep].dataset.status || "";
      activeFlowStep = (activeFlowStep + 1) % flowSteps.length;
      flowSteps[activeFlowStep].classList.add("active");
      flowSteps[activeFlowStep].setAttribute("aria-current", "step");
      flowSteps[activeFlowStep].lastElementChild.textContent = "processando";
    }, 4500);

    flowSteps.forEach((step) => {
      step.dataset.status = step.lastElementChild.textContent;
    });
  }

  const tabs = [
    ...document.querySelectorAll(".product-screen-tabs [role=tab]"),
  ];
  const screenImages = [
    ...document.querySelectorAll(".product-screen-stage img"),
  ];
  if (tabs.length && screenImages.length) {
    const titles = ["Dashboard", "Políticas", "Usuários", "Processos"];
    const descriptions = [
      "Acompanhe materiais, movimentações, estoques e eventos em uma visão rastreável.",
      "Organize políticas comerciais, prioridades e tipos de processamento em uma visão centralizada.",
      "Administre usuários e acessos da operação com pesquisa e ações reunidas no mesmo ambiente.",
      "Conecte indicadores, alertas, previsões e responsáveis ao longo da operação.",
    ];
    const alts = [
      "Visão SNG para rastreabilidade de materiais e movimentações",
      "Inteligência operacional conectada pelo IE360",
      "Operação logística rastreada da origem ao destino",
      "Histórico de garantias e decisões em um único fluxo",
    ];
    const panel = document.querySelector("#product-screen-panel");
    const gallery = panel?.closest(".product-gallery");
    const screenTitle = panel?.querySelector(".product-screen-bar small");
    const screenLabel = document.querySelector(".product-screen-label");
    const screenDescription = document.querySelector(
      ".product-screen-label + .lead",
    );

    const selectScreen = (index) => {
      tabs.forEach((tab, tabIndex) => {
        const selected = tabIndex === index;
        tab.classList.toggle("active", selected);
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });
      screenImages.forEach((image, imageIndex) => {
        const selected = imageIndex === index;
        image.classList.toggle("active", selected);
        image.setAttribute("aria-hidden", String(!selected));
        image.alt = selected ? alts[index] : "";
      });
      if (panel) panel.setAttribute("aria-labelledby", `product-tab-${index}`);
      if (screenTitle) screenTitle.textContent = `${titles[index]} · SNG`;
      if (screenLabel) screenLabel.textContent = titles[index];
      if (screenDescription)
        screenDescription.textContent = descriptions[index];
    };

    const imagesReady = screenImages.map(
      (image) =>
        new Promise((resolve) => {
          if (image.complete) {
            resolve();
            return;
          }
          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", resolve, { once: true });
        }),
    );
    Promise.all(imagesReady).then(() => {
      gallery?.classList.add("ready");
      tabs.forEach((tab) => {
        tab.disabled = false;
      });
      panel?.setAttribute("aria-busy", "false");
    });
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => selectScreen(index));
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
          return;
        event.preventDefault();
        const nextIndex =
          event.key === "Home"
            ? 0
            : event.key === "End"
              ? tabs.length - 1
              : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) %
                tabs.length;
        selectScreen(nextIndex);
        tabs[nextIndex].focus();
      });
    });
  }

  const contactForm = document.querySelector(".contact-form-full");
  if (contactForm) {
    const phoneInput = contactForm.querySelector('[name="telefone"]');
    const formatPhone = (value) => {
      const digits = value.replace(/\D/g, "").slice(0, 11);
      if (digits.length <= 2) return digits;
      if (digits.length <= 6)
        return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      if (digits.length <= 10)
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    };
    const clearError = (field) => {
      field.setAttribute("aria-invalid", "false");
      field.closest("label")?.querySelector(".field-error")?.remove();
    };
    const showError = (field, message) => {
      field.setAttribute("aria-invalid", "true");
      const label = field.closest("label");
      if (!label) return;
      let error = label.querySelector(".field-error");
      if (!error) {
        error = document.createElement("span");
        error.className = "field-error";
        label.append(error);
      }
      error.textContent = message;
    };

    phoneInput?.addEventListener("input", () => {
      phoneInput.value = formatPhone(phoneInput.value);
      clearError(phoneInput);
    });
    contactForm.querySelectorAll("input, select, textarea").forEach((field) => {
      field.addEventListener("input", () => clearError(field));
      field.addEventListener("change", () => clearError(field));
    });

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = (name) =>
        String(new FormData(contactForm).get(name) || "").trim();
      const fields = {
        nome: contactForm.elements.namedItem("nome"),
        empresa: contactForm.elements.namedItem("empresa"),
        email: contactForm.elements.namedItem("email"),
        telefone: contactForm.elements.namedItem("telefone"),
        interesse: contactForm.elements.namedItem("interesse"),
        desafio: contactForm.elements.namedItem("desafio"),
      };
      const errors = {
        nome: value("nome").length < 2 && "Informe um nome válido.",
        empresa: value("empresa").length < 2 && "Informe o nome da empresa.",
        email:
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value("email")) &&
          "Informe um e-mail válido.",
        telefone:
          ![10, 11].includes(value("telefone").replace(/\D/g, "").length) &&
          "Informe um telefone com DDD.",
        interesse: !value("interesse") && "Selecione uma opção.",
        desafio:
          value("desafio").length < 5 &&
          "Descreva o desafio em pelo menos 5 caracteres.",
      };
      let firstInvalid;
      Object.entries(errors).forEach(([name, message]) => {
        const field = fields[name];
        if (message) {
          showError(field, message);
          firstInvalid ||= field;
        } else {
          clearError(field);
        }
      });
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      const message = `Olá, equipe SNG!\n\nTenho interesse em: *${value("interesse")}*.\n\n*Dados do contato:*\n• Nome: ${value("nome")}\n• Empresa: ${value("empresa")}\n• E-mail: ${value("email")}\n• Telefone: ${value("telefone")}\n\n*Desafio:*\n${value("desafio")}`;
      window.open(
        `https://wa.me/5511973332785?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );
      const submitButton = contactForm.querySelector('[type="submit"]');
      submitButton.disabled = true;
      submitButton.textContent = "Dados enviados ✓";
      let status = contactForm.querySelector(".form-success");
      if (!status) {
        status = document.createElement("p");
        status.className = "form-success";
        contactForm.append(status);
      }
      status.textContent =
        "Dados preparados. O WhatsApp foi aberto em uma nova aba.";
    });
  }

  if (!reducedMotion && "IntersectionObserver" in window) {
    const selector = [
      "main section",
      ".inner-page .eyebrow",
      ".inner-page h1",
      ".page-lead",
      ".detail-section",
      ".contact-image-panel",
      ".contact-form-content",
    ].join(",");
    const elements = [...new Set(document.querySelectorAll(selector))];
    elements.forEach((element, index) => {
      element.classList.add("motion-item");
      element.style.setProperty(
        "--motion-delay",
        `${Math.min(index % 6, 5) * 70}ms`,
      );
    });
    const observer = new IntersectionObserver(
      (entries, activeObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("motion-visible");
            activeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -7% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
  }
})();
