// ملف JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== التنقل المتنقل ==========
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.t('active');
            this.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // ========== التمرير السلس ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========== إضافة فئة نشطة لروابط التنقل ==========
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 150)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
        
        // زر العودة للأعلى
        const backToTop = document.getElementById('backToTop');
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // ========== زر العودة للأعلى ==========
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ========== علامات التبويب للفئات ==========
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // إزالة النشط من جميع الأزرار
                tabButtons.forEach(btn => btn.classList.remove('active'));
                // إضافة النشط للزر المحدد
                this.classList.add('active');
                
                // إخفاء جميع المحتويات
                tabPanes.forEach(pane => pane.classList.remove('active'));
                // إظهار المحتوى المحدد
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // ========== قائمة تدقيق البورتفوليو ==========
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.querySelector('.progress-text');
    const checklistReset = document.getElementById('checklistReset');
    
    if (checkboxes.length > 0) {
        // تحديث شريط التقدم
        function updateProgress() {
            const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
            const totalCount = checkboxes.length;
            const percentage = (checkedCount / totalCount) * 100;
            
            if (progressFill) {
                progressFill.style.width = `${percentage}%`;
            }
            
            if (progressText) {
                progressText.textContent = `${checkedCount}/${totalCount} مكتمل`;
            }
        }
        
        // إضافة مستمع لكل خانة اختيار
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateProgress);
        });
        
        // زر إعادة تعيين القائمة
        if (checklistReset) {
            checklistReset.addEventListener('click', function() {
                checkboxes.forEach(checkbox => {
                    checkbox.checked = false;
                });
                updateProgress();
            });
        }
        
        // تحديث التقدم في البداية
        updateProgress();
    }
    
    // ========== تأثيرات للبطاقات عند التمرير ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // مراقبة العناصر لإضافة تأثيرات
    document.querySelectorAll('.importance-card, .type-card, .other-card').forEach(card => {
        observer.observe(card);
    });
    
    // ========== تأثيرات للخط الزمني ==========
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.2 });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(50px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        timelineObserver.observe(item);
    });
    
    // ========== تأثيرات للبطاقات العائمة ==========
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.5}s`;
    });
    
    // ========== تأثير الكتابة للهيرو ==========
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // بدء الكتابة بعد تأخير بسيط
        setTimeout(typeWriter, 500);
    }
    
    // ========== تأثير التمرير للنافذة ==========
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                // تأثير الشفافية للهيدر
                const header = document.querySelector('header');
                if (window.pageYOffset > 100) {
                    header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
                    header.style.backdropFilter = 'blur(10px)';
                } else {
                    header.style.backgroundColor = '';
                    header.style.backdropFilter = '';
                }
                
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // ========== نماذج الاشتراك ==========
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && validateEmail(email)) {
                // هنا يمكنك إرسال البريد الإلكتروني إلى الخادم
                alert('شكراً لاشتراكك! ستتلقى نصائحنا قريباً.');
                emailInput.value = '';
            } else {
                alert('يرجى إدخال بريد إلكتروني صحيح.');
            }
        });
    }
    
    // دالة التحقق من صحة البريد الإلكتروني
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // ========== تأثيرات إضافية للبطاقات ==========
    const cards = document.querySelectorAll('.importance-card, .type-card, .other-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ========== تهيئة تأثيرات AOS بديلة ==========
    function initScrollAnimations() {
        const elements = document.querySelectorAll('.importance-card, .type-card, .other-card, .category-card, .resource, .step');
        
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        });
        
        const scrollObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(el => scrollObserver.observe(el));
    }
    
    // استدعاء دالة تأثيرات التمرير
    initScrollAnimations();
    
    // ========== رسائل الترحيب في الكونسول ==========
    console.log('%c🎨 مرحباً بك في موقع بورتفوليو PRO!', 'color: #3498db; font-size: 18px; font-weight: bold;');
    console.log('%c💼 هذا الموقع يقدم دليلاً شاملاً لأهمية البورتفوليو في 2025', 'color: #2c3e50; font-size: 14px;');
    
    // ========== تحديث التاريخ في الفوتر ==========
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.copyright p');
    if (yearElement) {
        yearElement.textContent = yearElement.textContent.replace('2025', currentYear);
    }
});