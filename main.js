// OneLink - UI interactions
document.addEventListener('DOMContentLoaded', function () {
  // ====== زر القائمة الرئيسية ======
  const menuBtn = document.getElementById('menuToggle');
  const menu    = document.getElementById('mainMenu');
  if (menuBtn && menu) {
    // اخفِ المنسدلة داخلياً في البداية
    menu.classList.remove('is-open');

    menuBtn.addEventListener('click', function () {
      menu.classList.toggle('is-open');
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // ====== منسدلة "الخدمات" ======
  const dropBtn = document.querySelector('.dropdown-toggle');
  const drop    = document.getElementById('servicesDropdown');
  if (dropBtn && drop) {
    drop.classList.remove('is-open');

    dropBtn.addEventListener('click', function () {
      drop.classList.toggle('is-open');
      const expanded = dropBtn.getAttribute('aria-expanded') === 'true';
      dropBtn.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // ====== زر الرجوع ======
  const back = document.getElementById('backBtn');
  if (back) {
    back.addEventListener('click', function () {
      if (history.length > 1) history.back();
      else location.href = 'index.html';
    });
  }

  // ====== حركة الاهتزاز العامة ======
  // أي عنصر عليه data-shake="onClick" يهتز ضغطة سريعة
  function shakeElement(el) {
    el.classList.remove('shake'); // لو كانت شغالة قبل
    // إعادة تشغيل الأنيميشن
    void el.offsetWidth;
    el.classList.add('shake');
    setTimeout(() => el.classList.remove('shake'), 500);
  }

  document.querySelectorAll('[data-shake="onClick"]').forEach(el => {
    el.addEventListener('click', () => shakeElement(el));
  });
});
// إظهار السهم عند النزول
window.addEventListener("scroll", function() {
  const backToTop = document.querySelector(".back-to-top");
  if (window.scrollY > 200) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});
// إظهار/إخفاء السهم
window.addEventListener("scroll", function() {
  const backToTop = document.querySelector(".back-to-top");
  if (window.scrollY > 200) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// سلاسة العودة للأعلى
document.querySelector(".back-to-top").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// إظهار/إخفاء زر الرجوع للأعلى
window.addEventListener('scroll', () => {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  if (window.scrollY > 200) btn.classList.add('show');
  else btn.classList.remove('show');
});

// سلوك الضغط: صعود سلس
document.addEventListener('click', (e) => {
  const a = e.target.closest('.back-to-top');
  if (!a) return;
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// إظهار/إخفاء زر الرجوع للأعلى
window.addEventListener('scroll', () => {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  if (window.scrollY > 200) btn.classList.add('show');
  else btn.classList.remove('show');
});

// سلوك الضغط: صعود سلس
document.addEventListener('click', (e) => {
  const a = e.target.closest('.back-to-top');
  if (!a) return;
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// إظهار/إخفاء السهم عند التمرير
window.addEventListener("scroll", function () {
  const el = document.querySelector(".back-to-top");
  if (!el) return;
  if (window.scrollY > 200) el.classList.add("show");
  else el.classList.remove("show");
});

// سحب ناعم للأعلى
document.addEventListener("click", function (e) {
  const el = e.target.closest(".back-to-top");
  if (!el) return;
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// إظهار/إخفاء زر الرجوع لأعلى
window.addEventListener('scroll', () => {
  const btt = document.querySelector('.back-to-top');
  if (!btt) return;
  if (window.scrollY > 200) btt.classList.add('show');
  else btt.classList.remove('show');
});

// سحب ناعم للأعلى
document.addEventListener('click', (e) => {
  const el = e.target.closest('.back-to-top');
  if (!el) return;
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// إظهار/إخفاء السهم حسب التمرير
window.addEventListener("scroll", () => {
  const el = document.querySelector(".back-to-top");
  if (!el) return;
  if (window.scrollY > 200) el.classList.add("show");
  else el.classList.remove("show");
});

// تمرير ناعم للأعلى عند الضغط
document.addEventListener("click", (e) => {
  const el = e.target.closest(".back-to-top");
  if (!el) return;
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// ====================
// فلترة الخدمات (البحث)
// ====================
(function () {
  const input = document.getElementById('service-search');
  const clearBtn = document.getElementById('clear-search');
  const cards = document.querySelectorAll('.card.service-card');
  const counter = document.getElementById('result-count');

  function applyFilter() {
    let shown = 0;
    cards.forEach(card => {
      const match = card.textContent.toLowerCase().includes(input.value.toLowerCase());
      if (match) {
        card.style.display = '';
        shown++;
      } else {
        card.style.display = 'none';
      }
    });
    if (counter) counter.textContent = shown;
  }

  if (input) input.addEventListener('input', applyFilter);
  if (clearBtn) clearBtn.addEventListener('click', () => {
    input.value = '';
    applyFilter();
    input.focus();
  });

  // أول تحميل يظهر العدد الصحيح
  applyFilter();
})();

// ======================
// تفعيل أزرار الكروت
// ======================
document.querySelectorAll('.card.service-card').forEach(card => {
  const btn = card.querySelector('.btn-go');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const link = card.getAttribute('data-link');
    if (link) window.open(link, '_blank');
  });
});

// ======================
// زر الرجوع لأعلى (🔼)
// ======================
document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.querySelector('.scroll-top-btn');
  if (!scrollBtn) return;

  // إعدادات الشكل
  scrollBtn.style.position = 'fixed';
  scrollBtn.style.bottom = '20px';
  scrollBtn.style.right = '20px';
  scrollBtn.style.fontSize = '28px';
  scrollBtn.style.color = 'rgba(128,128,128,0.7)';
  scrollBtn.style.textDecoration = 'none';
  scrollBtn.style.opacity = '0';
  scrollBtn.style.pointerEvents = 'none';
  scrollBtn.style.transition = 'opacity .4s ease, transform .3s ease';
  scrollBtn.style.zIndex = '9999';

  const toggleBtn = () => {
    if (window.scrollY > 100) {
      scrollBtn.style.opacity = '1';
      scrollBtn.style.pointerEvents = 'auto';
    } else {
      scrollBtn.style.opacity = '0';
      scrollBtn.style.pointerEvents = 'none';
    }
  };

  window.addEventListener('scroll', toggleBtn, { passive: true });
  toggleBtn();

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
// الأكواد السابقة في main.js ...

// ======================
// زر الرجوع لأعلى (🔼)
// ======================
document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.querySelector('.scroll-top-btn');
  if (!scrollBtn) return;

  // (احتياطي) لو الـ CSS ما تحمّل
  Object.assign(scrollBtn.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    fontSize: '28px',
    color: 'rgba(128,128,128,0.7)',
    textDecoration: 'none',
    opacity: '0',
    pointerEvents: 'none',
    transition: 'opacity .4s ease, transform .3s ease',
    zIndex: '100000'
  });

  const toggleBtn = () => {
    const y = window.pageYOffset || document.documentElement.scrollTop || 0;
    if (y > 50) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  };

  window.addEventListener('scroll', toggleBtn, { passive: true });
  toggleBtn(); // تشغيل مبدئي

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
const btn = document.getElementById('scrollTopBtn');
function toggleTopBtn(){ window.scrollY > 200 ? btn.classList.add('show') : btn.classList.remove('show'); }
toggleTopBtn(); window.addEventListener('scroll', toggleTopBtn);
btn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
// زر المساعد الذكي
const aiButton = document.getElementById('aiButton');
const aiPopup = document.getElementById('aiPopup');

aiButton.addEventListener('click', () => {
  aiPopup.style.display = aiPopup.style.display === 'block' ? 'none' : 'block';
});
document.addEventListener('DOMContentLoaded', () => {
  // ===== زر الرجوع للأعلى =====
  const backToTopBtn = document.getElementById('backToTop');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===== المساعد الذكي =====
  const aiButton = document.getElementById('aiButton');
  const aiPopup  = document.getElementById('aiPopup');

  if (aiButton && aiPopup) {
    aiButton.addEventListener('click', (e) => {
      e.stopPropagation(); // عشان ما يقفل مباشرة
      const isHidden = aiPopup.hasAttribute('hidden');
      if (isHidden) {
        aiPopup.removeAttribute('hidden');
      } else {
        aiPopup.setAttribute('hidden', '');
      }
    });

    // إغلاق النافذة عند الضغط خارجها
    document.addEventListener('click', (e) => {
      if (!aiPopup.hasAttribute('hidden')) {
        const clickedInside = aiPopup.contains(e.target) || aiButton.contains(e.target);
        if (!clickedInside) {
          aiPopup.setAttribute('hidden', '');
        }
      }
    });
  }
});
