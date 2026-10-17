/**
 * 2M SleepCare Mattress - Main JavaScript
 * Handles navigation, interactive components, modals, filters, and FAQs
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initFaqAccordion();
  initQuickViewModal();
  initSpineHotspots();
  initContactForm();
});

/* -------------------------------------------------------------------------
 * 1. Sticky Header
 * ------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* -------------------------------------------------------------------------
 * 2. Mobile Navigation Drawer
 * ------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const closeBtn = document.getElementById('mobileMenuClose');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('drawerBackdrop');

  if (!toggleBtn || !drawer || !backdrop) return;

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
}

/* -------------------------------------------------------------------------
 * 3. FAQ Accordion
 * ------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-button');
    const content = item.querySelector('.faq-content');
    if (!btn || !content) return;

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close other accordions in the same group
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const otherContent = other.querySelector('.faq-content');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        content.style.maxHeight = null;
      }
    });
  });
}

/* -------------------------------------------------------------------------
 * 4. Quick View Modal
 * ------------------------------------------------------------------------- */
function initQuickViewModal() {
  const backdrop = document.getElementById('quickViewModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!backdrop) return;

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeModal();
    }
  });

  // Attach listener to any trigger button
  document.body.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-quick-view]');
    if (!trigger) return;

    const productId = trigger.getAttribute('data-quick-view');
    openProductQuickView(productId);
  });
}

function openProductQuickView(productId) {
  if (typeof PRODUCTS_DATA === 'undefined') return;

  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const backdrop = document.getElementById('quickViewModal');
  const imgEl = document.getElementById('modalImg');
  const titleEl = document.getElementById('modalTitle');
  const seriesEl = document.getElementById('modalSeries');
  const badgeEl = document.getElementById('modalBadge');
  const priceEl = document.getElementById('modalPrice');
  const origPriceEl = document.getElementById('modalOrigPrice');
  const descEl = document.getElementById('modalDesc');
  const insideFactEl = document.getElementById('modalInsideFact');
  const featuresEl = document.getElementById('modalFeatures');
  const sizeSelectorEl = document.getElementById('modalSizes');
  const waBtnEl = document.getElementById('modalWaBtn');
  const callBtnEl = document.getElementById('modalCallBtn');

  if (imgEl) imgEl.src = product.image;
  if (titleEl) titleEl.textContent = product.name;
  if (seriesEl) seriesEl.textContent = `${product.series} • ${product.thickness}`;
  if (badgeEl) badgeEl.textContent = product.badge || product.warranty;
  if (priceEl) priceEl.textContent = `₹${product.price.toLocaleString('en-IN')}`;
  if (origPriceEl) origPriceEl.textContent = `₹${product.originalPrice.toLocaleString('en-IN')}`;
  if (descEl) descEl.textContent = product.description;

  // Render Inside Facts
  if (insideFactEl && product.insideFact) {
    insideFactEl.innerHTML = product.insideFact.map((fact, idx) => `
      <li class="flex items-start gap-2 text-sm text-slate-700 py-1">
        <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex-shrink-0 mt-0.5">${idx + 1}</span>
        <span>${fact}</span>
      </li>
    `).join('');
  }

  // Render Key Features
  if (featuresEl && product.features) {
    featuresEl.innerHTML = product.features.map(f => `
      <li class="flex items-center gap-2 text-sm text-slate-600">
        <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span>${f}</span>
      </li>
    `).join('');
  }

  // Size Options
  if (sizeSelectorEl && product.sizes) {
    sizeSelectorEl.innerHTML = product.sizes.map((sz, i) => `
      <label class="flex items-center justify-center px-3 py-2 border rounded-lg text-xs font-semibold cursor-pointer transition ${i === 1 ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 hover:border-slate-300'}">
        <input type="radio" name="modal_size" value="${sz}" ${i === 1 ? 'checked' : ''} class="sr-only">
        <span>${sz}</span>
      </label>
    `).join('');

    sizeSelectorEl.querySelectorAll('label').forEach(label => {
      label.addEventListener('click', () => {
        sizeSelectorEl.querySelectorAll('label').forEach(l => {
          l.className = 'flex items-center justify-center px-3 py-2 border rounded-lg text-xs font-semibold cursor-pointer transition border-slate-200 hover:border-slate-300';
        });
        label.className = 'flex items-center justify-center px-3 py-2 border rounded-lg text-xs font-semibold cursor-pointer transition border-blue-600 bg-blue-50 text-blue-700';
      });
    });
  }

  // WhatsApp Button
  if (waBtnEl) {
    const waText = encodeURIComponent(`Hi Nishanth, I am interested in *${product.name}* (${product.thickness}) from 2M SleepCare Mattress website. Please share latest factory price and delivery schedule.`);
    waBtnEl.href = `https://wa.me/919513226668?text=${waText}`;
  }

  if (callBtnEl) {
    callBtnEl.href = "tel:+919513226668";
  }

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* -------------------------------------------------------------------------
 * 5. Interactive Spine Diagram Hotspots
 * ------------------------------------------------------------------------- */
function initSpineHotspots() {
  const hotspots = document.querySelectorAll('[data-hotspot]');
  const infoTitle = document.getElementById('spineInfoTitle');
  const infoDesc = document.getElementById('spineInfoDesc');

  if (!hotspots.length || !infoTitle || !infoDesc) return;

  const data = {
    1: {
      title: "Climate & Air Circulation",
      desc: "2M air channels and self-quilted breathable fabrics maintain optimal body temperature throughout the night without heat traps."
    },
    2: {
      title: "Cervical Spine & Shoulder Zone",
      desc: "Low pillow elevation and pressure-relieving shoulder sinking zone keep the cervical vertebrae in continuous linear alignment."
    },
    3: {
      title: "Lumbar Spine Active Support",
      desc: "Pelvic base contour support (4th and 5th lumbar vertebrae) prevents unnatural sagging and cures lower back stiffness."
    },
    4: {
      title: "Full Body Point Elasticity",
      desc: "Independent pocket springs and resilient latex respond directly to your body's pressure spots without disturbing adjacent areas."
    },
    5: {
      title: "Unrestricted Blood Circulation",
      desc: "Evenly distributed weight relief minimizes pressure on veins and capillaries, preventing numbness, tossing, and turning."
    }
  };

  hotspots.forEach(spot => {
    spot.addEventListener('mouseenter', () => {
      const id = spot.getAttribute('data-hotspot');
      if (data[id]) {
        infoTitle.textContent = data[id].title;
        infoDesc.textContent = data[id].desc;
      }
    });
  });
}

/* -------------------------------------------------------------------------
 * 6. Contact Form Handler
 * ------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]')?.value || '';
    const phone = form.querySelector('[name="phone"]')?.value || '';
    const email = form.querySelector('[name="email"]')?.value || '';
    const mattress = form.querySelector('[name="mattress_type"]')?.value || 'General Enquiry';
    const message = form.querySelector('[name="message"]')?.value || '';

    // Show nice confirmation
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.innerHTML = `<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg> Sending Enquiry...`;
      btn.disabled = true;
    }

    setTimeout(() => {
      // Build WhatsApp URL to Nishanth (+91 95132 26668)
      const waMsg = encodeURIComponent(
        `*New Website Enquiry for 2M SleepCare Mattress*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📱 *Phone:* ${phone}\n` +
        `📧 *Email:* ${email}\n` +
        `🛏️ *Mattress Interest:* ${mattress}\n` +
        `📝 *Requirement:* ${message}\n\n` +
        `Please connect with factory showroom.`
      );

      // Show alert box
      const successBox = document.getElementById('formSuccessMessage');
      if (successBox) {
        successBox.classList.remove('hidden');
      }

      // Open WhatsApp chat directly
      window.open(`https://wa.me/919513226668?text=${waMsg}`, '_blank');

      if (btn) {
        btn.innerHTML = `✓ Message Sent Successfully!`;
        btn.classList.remove('btn-primary');
        btn.classList.add('bg-emerald-600', 'text-white');
      }
      form.reset();
    }, 800);
  });
}
