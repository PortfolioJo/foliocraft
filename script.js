// ملف JavaScript لـ FolioCraft
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== شاشة التحميل ==========
    const loader = document.querySelector('.loader');
    
    setTimeout(() => {
        loader.classList.add('fade-out');
        
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);
    
    // ========== القائمة المتنقلة ==========
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            const bars = this.querySelectorAll('.artistic-bar');
            if (this.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }
    
    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
            if (navLinks) {
                navLinks.classList.remove('active');
            }
            
            if (menuToggle) {
                const bars = menuToggle.querySelectorAll('.artistic-bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    });
    
    // ========== إضافة فئة نشطة للروابط عند التمرير ==========
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
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
        if (backToTop) {
            if (window.pageYOffset > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
        
        // تأثيرات التمرير للأرقام
        animateStats();
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
    
    // ========== تأثيرات الأرقام المتحركة ==========
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number[data-count]');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const current = parseInt(stat.textContent);
            
            if (isElementInViewport(stat) && current < target) {
                let increment = Math.ceil(target / 50);
                let newValue = current + increment;
                
                if (newValue > target) newValue = target;
                
                stat.textContent = newValue;
                
                if (newValue < target) {
                    setTimeout(() => {
                        animateStats();
                    }, 30);
                }
            }
        });
    }
    
    // دالة التحقق من ظهور العنصر في الشاشة
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // ========== تأثيرات للعناصر عند التمرير ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                if (entry.target.classList.contains('artistic-card')) {
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, 300);
                }
            }
        });
    }, observerOptions);
    
    // مراقبة العناصر لإضافة تأثيرات
    document.querySelectorAll('.artistic-card, .category-card, .portfolio-item, .pricing-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // ========== تأثيرات التحويم ==========
    const artisticElements = document.querySelectorAll('.artistic-btn, .artistic-card, .social-icon, .contact-method');
    
    artisticElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            if (this.classList.contains('beige-btn') || this.classList.contains('border-beige')) {
                this.style.boxShadow = '0 8px 25px rgba(232, 224, 211, 0.4)';
            } else if (this.classList.contains('nude-btn') || this.classList.contains('border-nude')) {
                this.style.boxShadow = '0 8px 25px rgba(205, 182, 172, 0.4)';
            } else if (this.classList.contains('gold-btn') || this.classList.contains('border-gold')) {
                this.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.3)';
            }
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
    
    // ========== نموذج الاتصال ==========
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // جمع بيانات النموذج
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // هنا يمكنك إضافة كود لإرسال البيانات إلى الخادم
            // مثال: استخدام Fetch API
            
            // عرض رسالة نجاح
            showNotification('تم إرسال طلبك بنجاح! سنتواصل معك في أقرب وقت لتأكيد التفاصيل.', 'success');
            
            // إعادة تعيين النموذج
            this.reset();
        });
    }
    
    // ========== إشعارات ==========
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        notification.style.position = 'fixed';
        notification.style.top = '25px';
        notification.style.right = '25px';
        notification.style.padding = '1.25rem 1.75rem';
        notification.style.borderRadius = 'var(--radius-md)';
        notification.style.color = 'white';
        notification.style.fontFamily = 'var(--font-body)';
        notification.style.fontSize = '1.05rem';
        notification.style.zIndex = '9999';
        notification.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        notification.style.transition = 'all 0.3s ease';
        notification.style.transform = 'translateY(-100px)';
        notification.style.opacity = '0';
        notification.style.maxWidth = '400px';
        notification.style.lineHeight = '1.5';
        
        if (type === 'success') {
            notification.style.background = 'linear-gradient(45deg, var(--secondary-brown), var(--accent-gold))';
            notification.style.border = '2px solid var(--accent-gold)';
        } else {
            notification.style.background = 'linear-gradient(45deg, #9e2a2a, #b45309)';
            notification.style.border = '2px solid #b45309';
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
            notification.style.opacity = '1';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateY(-100px)';
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
    
    // ========== تأثيرات إضافية ==========
    // تأثير الكتابة للعنوان
    const artisticTitle = document.querySelector('.artistic-title');
    if (artisticTitle) {
        const spans = artisticTitle.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                span.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, index * 300);
        });
    }
    
    // تأثيرات للهاتف المحمول
    const phoneMockup = document.querySelector('.phone-mockup');
    if (phoneMockup) {
        phoneMockup.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const rotateY = (x / rect.width - 0.5) * 8;
            const rotateX = (0.5 - y / rect.height) * 8;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        phoneMockup.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
    
    // ========== رسالة ترحيب في الكونسول ==========
    console.log('%c🎨 FolioCraft — فوليوكرافت 🎨', 'background: linear-gradient(45deg, #E8E0D3, #CDB6AC, #8B7355, #D4AF37); color: #1A1A1A; padding: 12px; border-radius: 6px; font-size: 14px; font-weight: bold;');
    console.log('%c📱 متخصصون في تصميم بورتفوليو احترافية للجميع', 'color: #8B7355; font-size: 12px; padding: 8px; background: #F5EFE4; border-radius: 4px;');
    console.log('%c📧 للتواصل: aseeljalal45@gmail.com | واتساب: +962785094075', 'color: #D4AF37; font-size: 11px; margin-top: 5px;');
    
    // ========== تهيئة الأرقام المتحركة عند التحميل ==========
    setTimeout(() => {
        animateStats();
    }, 500);
    
    // ========== توليد عروض بورتفوليو عشوائية ==========
    function generatePortfolioExamples() {
        const examples = [
            { name: 'أحمد - مصمم جرافيك', type: 'modern' },
            { name: 'سارة - مبرمجة ويب', type: 'creative' },
            { name: 'خالد - محلل بيانات', type: 'minimal' },
            { name: 'نور - صانعة محتوى', type: 'interactive' }
        ];
        
        const portfolioGrid = document.querySelector('.portfolio-grid');
        if (!portfolioGrid) return;
        
        // يمكن إضافة أمثلة ديناميكية هنا إذا لزم الأمر
    }
    
    generatePortfolioExamples();
});