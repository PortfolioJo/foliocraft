// ملف JavaScript للثيم النيون العصري
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== شاشة التحميل ==========
    const loader = document.querySelector('.loader');
    
    setTimeout(() => {
        loader.classList.add('fade-out');
        
        setTimeout(() => {
            loader.style.display = 'none';
            
            // عرض النافذة المنبثقة بعد 3 ثواني
            setTimeout(() => {
                showSubscribeModal();
            }, 3000);
        }, 500);
    }, 2000);
    
    // ========== القائمة المتنقلة ==========
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // تحريك الأشرطة
            const bars = this.querySelectorAll('.neon-bar');
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
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            
            const bars = menuToggle.querySelectorAll('.neon-bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
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
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
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
                // زيادة تدريجية
                let increment = Math.ceil(target / 50);
                let newValue = current + increment;
                
                if (newValue > target) newValue = target;
                
                stat.textContent = newValue;
                
                // استمرار حتى الوصول للهدف
                if (newValue < target) {
                    setTimeout(() => {
                        stat.textContent = newValue;
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
    
    // ========== علامات التبويب ==========
    const tabButtons = document.querySelectorAll('.tab-btn');
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
    
    // ========== قائمة التدقيق ==========
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.querySelector('.progress-text');
    const resetChecklist = document.getElementById('resetChecklist');
    
    if (checkboxes.length > 0) {
        // تحديث شريط التقدم
        function updateChecklistProgress() {
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
            checkbox.addEventListener('change', updateChecklistProgress);
        });
        
        // زر إعادة تعيين القائمة
        if (resetChecklist) {
            resetChecklist.addEventListener('click', function() {
                checkboxes.forEach(checkbox => {
                    checkbox.checked = false;
                });
                updateChecklistProgress();
                
                // تأثير بسيط
                this.style.transform = 'rotate(360deg)';
                setTimeout(() => {
                    this.style.transform = 'rotate(0)';
                }, 500);
            });
        }
        
        // تحديث التقدم في البداية
        updateChecklistProgress();
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
                
                // إضافة تأثيرات خاصة للبطاقات
                if (entry.target.classList.contains('neon-card')) {
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, 300);
                }
            }
        });
    }, observerOptions);
    
    // مراقبة العناصر لإضافة تأثيرات
    document.querySelectorAll('.neon-card, .reason-card, .tip-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // ========== تأثيرات النيون عند التحويم ==========
    const neonElements = document.querySelectorAll('.neon-btn, .neon-card, .social-icon');
    
    neonElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            if (this.classList.contains('cyan-glow') || this.classList.contains('cyan-btn')) {
                this.style.boxShadow = '0 0 20px rgba(0, 243, 255, 0.7)';
            } else if (this.classList.contains('pink-glow') || this.classList.contains('pink-btn')) {
                this.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.7)';
            } else if (this.classList.contains('green-glow')) {
                this.style.boxShadow = '0 0 20px rgba(0, 255, 157, 0.7)';
            } else if (this.classList.contains('yellow-glow')) {
                this.style.boxShadow = '0 0 20px rgba(255, 255, 0, 0.7)';
            }
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
    
    // ========== النماذج ==========
    const newsletterForm = document.getElementById('newsletterForm');
    const modalForm = document.getElementById('modalForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && validateEmail(email)) {
                showNotification('شكراً لاشتراكك! ستتلقى آخر التحديثات قريباً.', 'success');
                emailInput.value = '';
            } else {
                showNotification('يرجى إدخال بريد إلكتروني صحيح.', 'error');
            }
        });
    }
    
    if (modalForm) {
        modalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && validateEmail(email)) {
                showNotification('تم إرسال القوالب إلى بريدك! تحقق من مجلد الرسائل غير المرغوب فيها أيضاً.', 'success');
                emailInput.value = '';
                hideSubscribeModal();
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
    
    // ========== النافذة المنبثقة ==========
    const subscribeModal = document.getElementById('subscribeModal');
    const closeModal = document.querySelector('.close-modal');
    
    function showSubscribeModal() {
        // التحقق مما إذا كان المستخدم قد شاهد النافذة من قبل
        if (!localStorage.getItem('subscribeModalShown')) {
            setTimeout(() => {
                subscribeModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }, 1000);
        }
    }
    
    function hideSubscribeModal() {
        subscribeModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        localStorage.setItem('subscribeModalShown', 'true');
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', hideSubscribeModal);
    }
    
    // إغلاق النافذة عند النقر خارجها
    subscribeModal.addEventListener('click', function(e) {
        if (e.target === this) {
            hideSubscribeModal();
        }
    });
    
    // ========== إشعارات ==========
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // إضافة أنماط للإشعار
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.padding = '1rem 1.5rem';
        notification.style.borderRadius = 'var(--radius-md)';
        notification.style.color = 'white';
        notification.style.fontFamily = 'var(--font-body)';
        notification.style.zIndex = '9999';
        notification.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        notification.style.transition = 'all 0.3s ease';
        notification.style.transform = 'translateY(-100px)';
        notification.style.opacity = '0';
        
        if (type === 'success') {
            notification.style.background = 'linear-gradient(45deg, var(--neon-green), var(--neon-cyan))';
            notification.style.border = '1px solid var(--neon-cyan)';
        } else {
            notification.style.background = 'linear-gradient(45deg, #ff4444, #ff7700)';
            notification.style.border = '1px solid #ff4444';
        }
        
        document.body.appendChild(notification);
        
        // ظهور الإشعار
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
            notification.style.opacity = '1';
        }, 100);
        
        // إزالة الإشعار بعد 3 ثوانٍ
        setTimeout(() => {
            notification.style.transform = 'translateY(-100px)';
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // ========== تأثيرات إضافية ==========
    // تأثير الكتابة للعنوان
    const neonTitle = document.querySelector('.neon-title');
    if (neonTitle) {
        const spans = neonTitle.querySelectorAll('span');
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
        let rotation = 0;
        
        phoneMockup.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const rotateY = (x / rect.width - 0.5) * 10;
            const rotateX = (0.5 - y / rect.height) * 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        phoneMockup.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
    
    // ========== تأثيرات الصوت (اختياري) ==========
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('neon-btn') || 
            e.target.closest('.neon-btn') || 
            e.target.classList.contains('tab-btn')) {
            
            // تأثير صوتي (يمكن إضافة صوت حقيقي)
            playClickSound();
        }
    });
    
    function playClickSound() {
        // في التطبيق الحقيقي، يمكنك إضافة صوت هنا
        // const audio = new Audio('click-sound.mp3');
        // audio.volume = 0.3;
        // audio.play();
    }
    
    // ========== تأثيرات الخلفية الديناميكية ==========
    function createFloatingNeonElements() {
        const colors = ['cyan', 'pink', 'green', 'yellow'];
        const section = document.querySelector('.neon-section');
        
        for (let i = 0; i < 15; i++) {
            const element = document.createElement('div');
            element.className = `floating-neon neon-${colors[Math.floor(Math.random() * colors.length)]}`;
            
            // مواضع عشوائية
            const size = Math.random() * 20 + 10;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const duration = Math.random() * 20 + 20;
            const delay = Math.random() * 5;
            
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.right = `${posX}%`;
            element.style.top = `${posY}%`;
            element.style.animationDuration = `${duration}s`;
            element.style.animationDelay = `${delay}s`;
            
            section.appendChild(element);
        }
    }
    
    // استدعاء دالة العناصر العائمة
    createFloatingNeonElements();
    
    // ========== رسالة ترحيب في الكونسول ==========
    console.log('%c✨ نيون بورت - إصدار جيل Z 2025 ✨', 'background: linear-gradient(45deg, #00f3ff, #ff00ff, #00ff9d, #ffff00); color: #0a0a0f; padding: 10px; border-radius: 5px; font-size: 14px; font-weight: bold;');
    console.log('%c🎯 موقع لبناء بروفوليو قوي بمظهر نيون عصري', 'color: #00f3ff; font-size: 12px;');
    
    // ========== تحميل إضافي عند التمرير ==========
    let isLoading = false;
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.innerHeight + window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        
        if (scrollPosition >= documentHeight - 100 && !isLoading) {
            isLoading = true;
            
            // محاكاة تحميل المحتوى
            const loadingIndicator = document.createElement('div');
            loadingIndicator.className = 'loading-indicator';
            loadingIndicator.innerHTML = `
                <div class="loading-spinner"></div>
                <span>جاري تحميل المزيد...</span>
            `;
            
            // إضافة الأنماط
            const loadingStyle = document.createElement('style');
            loadingStyle.textContent = `
                .loading-indicator {
                    text-align: center;
                    padding: 2rem;
                    color: var(--text-muted);
                }
                .loading-spinner {
                    border: 3px solid rgba(0, 243, 255, 0.1);
                    border-top: 3px solid var(--neon-cyan);
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 1rem;
                }
            `;
            
            document.head.appendChild(loadingStyle);
            document.querySelector('#tips').appendChild(loadingIndicator);
            
            // محاكاة التأخير
            setTimeout(() => {
                document.querySelector('#tips').removeChild(loadingIndicator);
                document.head.removeChild(loadingStyle);
                isLoading = false;
                
                // رسالة أن كل المحتوى تم تحميله
                showNotification('تم تحميل كل المحتوى! 🎉', 'success');
            }, 1500);
        }
    });
});