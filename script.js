// ملف JavaScript للثيم العربي الفني
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== التحكم في القائمة المتنقلة ==========
    const mobileToggle = document.getElementById('mobileToggle');
    const arabicNav = document.querySelector('.arabic-nav');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            arabicNav.classList.toggle('active');
        });
    }
    
    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            arabicNav.classList.remove('active');
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
    
    // ========== إضافة فئة نشطة للروابط عند التمرير ==========
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navItems = document.querySelectorAll('.nav-item');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 150)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
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
    
    // ========== تأثيرات للبطاقات عند التمرير ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // إضافة تأثيرات للبطاقات
    document.querySelectorAll('.arabic-card, .profession-category').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // ========== تأثيرات للعناصر الفنية ==========
    const artElements = document.querySelectorAll('.art-element');
    artElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.3}s`;
    });
    
    // ========== تحديث السنة الهجرية في الفوتر ==========
    function getHijriYear() {
        // حساب تقريبي للسنة الهجرية (يمكن استبداله بحساب دقيق)
        const currentYear = new Date().getFullYear();
        const hijriYear = Math.floor((currentYear - 622) * (33/32));
        return hijriYear.toString().replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
    }
    
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = getHijriYear();
    }
    
    // ========== تأثير الكتابة للعنوان الرئيسي ==========
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // بدء تأثير الكتابة بعد تأخير
        setTimeout(typeWriter, 800);
    }
    
    // ========== تأثيرات لعناصر الخط الزمني ==========
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
        item.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
        timelineObserver.observe(item);
    });
    
    // ========== نموذج النشرة البريدية ==========
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && validateEmail(email)) {
                // هنا يمكنك إرسال البريد الإلكتروني إلى الخادم
                showNotification('شكراً لاشتراكك! ستتلقى نصائحنا الفنية قريباً.', 'success');
                emailInput.value = '';
            } else {
                showNotification('يرجى إدخال بريد إلكتروني صحيح.', 'error');
            }
        });
    }
    
    // دالة التحقق من صحة البريد الإلكتروني
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // دالة لعرض الإشعارات
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // إضافة أنماط للإشعار
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.padding = '1rem 1.5rem';
        notification.style.borderRadius = '5px';
        notification.style.color = 'white';
        notification.style.fontFamily = 'var(--font-body)';
        notification.style.zIndex = '9999';
        notification.style.boxShadow = 'var(--shadow-md)';
        notification.style.transition = 'all 0.3s ease';
        
        if (type === 'success') {
            notification.style.background = 'var(--arabic-teal)';
        } else {
            notification.style.background = '#e74c3c';
        }
        
        document.body.appendChild(notification);
        
        // إزالة الإشعار بعد 3 ثوانٍ
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // ========== تأثيرات إضافية للبطاقات عند التحويم ==========
    const cards = document.querySelectorAll('.arabic-card, .profession-category');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ========== تأثير التمرير للهيدر ==========
    let lastScroll = 0;
    const header = document.querySelector('.arabic-header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.boxShadow = 'var(--shadow-md)';
            header.style.background = 'var(--gradient-primary)';
        } else if (currentScroll > lastScroll) {
            // التمرير لأسفل
            header.style.transform = 'translateY(-100%)';
        } else {
            // التمرير لأعلى
            header.style.transform = 'translateY(0)';
            header.style.boxShadow = 'var(--shadow-lg)';
            header.style.background = 'rgba(44, 62, 80, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ========== تحميل الصفحة ==========
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // ========== رسالة ترحيب في الكونسول ==========
    console.log('%c🎨 مرحباً بك في موقع البروفوليو الفني!', 'color: #1a5276; font-size: 18px; font-weight: bold;');
    console.log('%c🕌 تم تصميم هذا الموقع بلمسة فنية عربية بألوان باردة ومحايدة', 'color: #117864; font-size: 14px;');
});