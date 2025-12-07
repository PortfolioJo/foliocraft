// script.js - موقع مطعم النخيل الذهبي
document.addEventListener('DOMContentLoaded', function() {
    // نظام الترجمة الكامل للمطعم
    const translations = {
        ar: {
            // التنقل
            logo: "النخيل الذهبي",
            navHome: "الرئيسية",
            navMenu: "قائمة الطعام",
            navAbout: "عن المطعم",
            navOrder: "الطلبات",
            navContact: "اتصل بنا",
            language: "EN",
            
            // الصفحة الرئيسية
            heroBadge: "★ منذ 1985 ★",
            heroTitle: "نكهات لا تُنسى تجربة لا تُعوَّض",
            heroDescription: "نقدم لكم أجود المأكولات العربية والعالمية بطابع عصري وأنيق. كل طبق يحمل قصة وكل نكهة تحمل ذكريات.",
            viewMenu: "تصفح القائمة",
            orderNow: "اطلب الآن",
            feature1: "خدمة 24/7",
            feature2: "توصيل سريع",
            feature3: "جودة مميزة",
            featuredTitle: "أطباقنا المميزة",
            dish1Title: "كبسة لحم معتمدة",
            dish1Desc: "كبسة لحم عربية أصيلة مع أرز بسمتي وخلطة توابل سرية",
            dish2Title: "شيش طاووق مشوي",
            dish2Desc: "دجاج مشوي على الفحم مع صلصة الثوم والأعشاب",
            dish3Title: "سلطة النخيل الخاصة",
            dish3Desc: "سلطة طازجة مع خضروات عضوية وصلصة زيت الزيتون",
            categoriesTitle: "تصنيفات القائمة",
            category1Title: "الوجبات الرئيسية",
            category1Desc: "أشهى المأكولات العربية والعالمية",
            category2Title: "المقبلات والسلطات",
            category2Desc: "تشكيلة متنوعة من المقبلات الطازجة",
            category3Title: "المشويات",
            category3Desc: "مشويات على الفحم بوصفاتنا السرية",
            category4Title: "الحلويات",
            category4Desc: "أشهى الحلويات الشرقية والغربية",
            category5Title: "المشروبات",
            category5Desc: "مشروبات باردة وساخنة وعصائر طازجة",
            category6Title: "قائمة الأطفال",
            category6Desc: "وجبات خاصة وممتعة للأطفال",
            
            // صفحة القائمة
            menuTitle: "قائمة الطعام",
            menuDescription: "استمتع بتجربة طعام لا تُنسى مع قائمتنا المميزة من الأطباق العربية والعالمية",
            popular: "الأكثر طلباً",
            new: "جديد",
            menuItem1Title: "كبسة لحم معتمدة",
            menuItem1Desc: "كبسة لحم عربية أصيلة مع أرز بسمتي وخلطة توابل سرية، تقدم مع صلصة الطماطم والزبادي",
            menuItem2Title: "شيش طاووق مشوي",
            menuItem2Desc: "دجاج مشوي على الفحم مع صلصة الثوم والأعشاب، يقدم مع أرص وبطاطس",
            menuItem3Title: "سلطة النخيل الخاصة",
            menuItem3Desc: "سلطة طازجة مع خضروات عضوية وصلصة زيت الزيتون والليمون",
            menuItem4Title: "حمص بطحينة",
            menuItem4Desc: "حمص طازج مع طحينة وزيت زيتون وليمون، يقدم مع خبز ساخن",
            menuItem5Title: "مشكل مشاوي",
            menuItem5Desc: "تشكيلة من اللحم والدجاج والكباب المشوي على الفحم",
            menuItem6Title: "كنافة بالنوكا",
            menuItem6Desc: "كنافة محشية بالقشطة والمكسرات، تقدم ساخنة",
            menuItem7Title: "عصير فرش مانجو",
            menuItem7Desc: "عصير مانجو طازج مع قطع الفواكه",
            menuItem8Title: "قهوة عربية",
            menuItem8Desc: "قهوة عربية أصيلة مع هيل",
            addToCart: "أضف للسلة",
            
            // صفحة عن المطعم
            aboutTitle: "عن مطعم النخيل الذهبي",
            aboutDescription: "قصة تمتد لأكثر من 35 عاماً من العطاء والتميز في عالم المأكولات العربية",
            aboutStoryTitle: "قصة بدأت بحب للطعام",
            aboutStoryDesc: "تأسس مطعم النخيل الذهبي عام 1985 على يد الشيف أحمد العتيبي، الذي بدأ بمطعم صغير في قلب الرياض. بفضل الجودة والطعم الأصيل، توسع المطعم ليصبح أحد أشهر المطاعم في المملكة.",
            aboutValuesTitle: "قيمنا",
            aboutAchievementsTitle: "إنجازاتنا",
            teamTitle: "فريقنا المميز",
            chefTitle: "شيف أحمد العتيبي",
            chefDesc: "مؤسس المطعم وأحد أشهر الطهاة في المملكة بخبرة تزيد عن 40 عاماً",
            team1Title: "فريق الطهي",
            team1Desc: "فريق من الطهاة المحترفين المدربين على أعلى المستويات",
            team2Title: "فريق الخدمة",
            team2Desc: "فريق متخصص في خدمة العملاء وتقديم تجربة طعام استثنائية",
            
            // صفحة الطلبات
            orderTitle: "طلباتك",
            orderDescription: "أضف وجباتك المفضلة إلى السلة واطلبها الآن",
            orderSummary: "ملخص الطلب",
            subtotal: "المجموع الفرعي",
            delivery: "رسوم التوصيل",
            tax: "الضريبة",
            total: "المجموع الكلي",
            checkout: "اتمام الطلب",
            
            // صفحة الاتصال
            contactTitle: "اتصل بنا",
            contactDescription: "نحن هنا لخدمتك في أي وقت، اتصل بنا أو زُر فرعنا",
            locationTitle: "العنوان",
            locationText: "حي العليا، شارع الملك فهد، الرياض 12211",
            phoneTitle: "الهاتف",
            emailTitle: "البريد الإلكتروني",
            hoursTitle: "ساعات العمل",
            hoursText: "الأحد - الخميس: 10 ص - 12 ص",
            weekendHours: "الجمعة - السبت: 1 م - 1 ص",
            mapTitle: "موقعنا على الخريطة",
            formName: "الاسم *",
            formEmail: "البريد الإلكتروني *",
            formPhone: "رقم الهاتف *",
            formSubject: "الموضوع *",
            formMessage: "الرسالة *",
            formMessagePlaceholder: "اكتب رسالتك هنا...",
            formSubmit: "إرسال الرسالة",
            
            // التذييل
            footerAbout: "عن المطعم",
            footerAboutUs: "عن النخيل الذهبي",
            footerOurStory: "قصتنا",
            footerTeam: "فريق العمل",
            footerValues: "قيمنا",
            footerMenu: "القائمة",
            footerMainDishes: "الوجبات الرئيسية",
            footerAppetizers: "المقبلات",
            footerGrill: "المشويات",
            footerDesserts: "الحلويات",
            footerContact: "تواصل معنا",
            footerAddress: "العنوان:",
            footerPhone: "الهاتف:",
            footerEmail: "البريد:",
            footerHours: "ساعات العمل",
            footerDelivery: "التوصيل متاح 24/7",
            footerCopyright: "© 2024 مطعم النخيل الذهبي. جميع الحقوق محفوظة."
        },
        en: {
            // Navigation
            logo: "Golden Palm",
            navHome: "Home",
            navMenu: "Menu",
            navAbout: "About",
            navOrder: "Orders",
            navContact: "Contact",
            language: "AR",
            
            // Home Page
            heroBadge: "★ Since 1985 ★",
            heroTitle: "Unforgettable Flavors Unmatched Experience",
            heroDescription: "We offer you the finest Arabic and international cuisine with a modern and elegant touch. Every dish tells a story and every flavor holds memories.",
            viewMenu: "Browse Menu",
            orderNow: "Order Now",
            feature1: "24/7 Service",
            feature2: "Fast Delivery",
            feature3: "Premium Quality",
            featuredTitle: "Our Featured Dishes",
            dish1Title: "Signature Lamb Kabsa",
            dish1Desc: "Authentic Arabic lamb kabsa with basmati rice and secret spice blend",
            dish2Title: "Grilled Chicken Shish Tawook",
            dish2Desc: "Chicken grilled on charcoal with garlic and herb sauce",
            dish3Title: "Golden Palm Special Salad",
            dish3Desc: "Fresh salad with organic vegetables and olive oil dressing",
            categoriesTitle: "Menu Categories",
            category1Title: "Main Dishes",
            category1Desc: "Delicious Arabic and international cuisine",
            category2Title: "Appetizers & Salads",
            category2Desc: "Variety of fresh appetizers",
            category3Title: "Grills",
            category3Desc: "Charcoal grills with our secret recipes",
            category4Title: "Desserts",
            category4Desc: "Finest Eastern and Western desserts",
            category5Title: "Beverages",
            category5Desc: "Cold and hot drinks and fresh juices",
            category6Title: "Kids Menu",
            category6Desc: "Special and fun meals for children",
            
            // Menu Page
            menuTitle: "Our Menu",
            menuDescription: "Enjoy an unforgettable dining experience with our premium selection of Arabic and international dishes",
            popular: "Most Popular",
            new: "New",
            menuItem1Title: "Signature Lamb Kabsa",
            menuItem1Desc: "Authentic Arabic lamb kabsa with basmati rice and secret spice blend, served with tomato sauce and yogurt",
            menuItem2Title: "Grilled Chicken Shish Tawook",
            menuItem2Desc: "Chicken grilled on charcoal with garlic and herb sauce, served with rice and potatoes",
            menuItem3Title: "Golden Palm Special Salad",
            menuItem3Desc: "Fresh salad with organic vegetables and olive oil and lemon dressing",
            menuItem4Title: "Hummus with Tahini",
            menuItem4Desc: "Fresh hummus with tahini, olive oil and lemon, served with warm bread",
            menuItem5Title: "Mixed Grill Platter",
            menuItem5Desc: "Assortment of beef, chicken and kebab grilled on charcoal",
            menuItem6Title: "Kunafa with Nuts",
            menuItem6Desc: "Kunafa stuffed with cream and nuts, served hot",
            menuItem7Title: "Fresh Mango Juice",
            menuItem7Desc: "Fresh mango juice with fruit pieces",
            menuItem8Title: "Arabic Coffee",
            menuItem8Desc: "Authentic Arabic coffee with cardamom",
            addToCart: "Add to Cart",
            
            // About Page
            aboutTitle: "About Golden Palm Restaurant",
            aboutDescription: "A story spanning over 35 years of giving and excellence in the world of Arabic cuisine",
            aboutStoryTitle: "A Story Started with Love for Food",
            aboutStoryDesc: "Golden Palm Restaurant was founded in 1985 by Chef Ahmed Al-Otaibi, who started with a small restaurant in the heart of Riyadh. Thanks to quality and authentic taste, the restaurant expanded to become one of the most famous restaurants in the Kingdom.",
            aboutValuesTitle: "Our Values",
            aboutAchievementsTitle: "Our Achievements",
            teamTitle: "Our Distinguished Team",
            chefTitle: "Chef Ahmed Al-Otaibi",
            chefDesc: "Restaurant founder and one of the most famous chefs in the Kingdom with over 40 years of experience",
            team1Title: "Cooking Team",
            team1Desc: "A team of professional chefs trained to the highest standards",
            team2Title: "Service Team",
            team2Desc: "A team specialized in customer service and providing an exceptional dining experience",
            
            // Orders Page
            orderTitle: "Your Orders",
            orderDescription: "Add your favorite meals to the cart and order them now",
            orderSummary: "Order Summary",
            subtotal: "Subtotal",
            delivery: "Delivery Fee",
            tax: "Tax",
            total: "Total",
            checkout: "Proceed to Checkout",
            
            // Contact Page
            contactTitle: "Contact Us",
            contactDescription: "We are here to serve you anytime, call us or visit our branch",
            locationTitle: "Address",
            locationText: "Al Olaya District, King Fahd Road, Riyadh 12211",
            phoneTitle: "Phone",
            emailTitle: "Email",
            hoursTitle: "Working Hours",
            hoursText: "Sunday - Thursday: 10 AM - 12 AM",
            weekendHours: "Friday - Saturday: 1 PM - 1 AM",
            mapTitle: "Our Location on Map",
            formName: "Name *",
            formEmail: "Email *",
            formPhone: "Phone *",
            formSubject: "Subject *",
            formMessage: "Message *",
            formMessagePlaceholder: "Write your message here...",
            formSubmit: "Send Message",
            
            // Footer
            footerAbout: "About Restaurant",
            footerAboutUs: "About Golden Palm",
            footerOurStory: "Our Story",
            footerTeam: "Our Team",
            footerValues: "Our Values",
            footerMenu: "Menu",
            footerMainDishes: "Main Dishes",
            footerAppetizers: "Appetizers",
            footerGrill: "Grills",
            footerDesserts: "Desserts",
            footerContact: "Contact Us",
            footerAddress: "Address:",
            footerPhone: "Phone:",
            footerEmail: "Email:",
            footerHours: "Working Hours",
            footerDelivery: "Delivery available 24/7",
            footerCopyright: "© 2024 Golden Palm Restaurant. All rights reserved."
        }
    };

    // تهيئة تأثيرات الخلفية
    function initBackgroundEffects() {
        const spicesBackground = document.getElementById('spicesBackground');
        const kitchenSmoke = document.getElementById('kitchenSmoke');
        
        // إنشاء جزيئات الفلفل والملح
        for (let i = 0; i < 50; i++) {
            const spice = document.createElement('div');
            spice.classList.add('spice-particle');
            spice.style.left = `${Math.random() * 100}%`;
            spice.style.top = `${Math.random() * 100}%`;
            spice.style.animationDelay = `${Math.random() * 20}s`;
            spice.style.opacity = `${0.3 + Math.random() * 0.5}`;
            spicesBackground.appendChild(spice);
            
            const salt = document.createElement('div');
            salt.classList.add('salt-particle');
            salt.style.left = `${Math.random() * 100}%`;
            salt.style.top = `${Math.random() * 100}%`;
            salt.style.animationDelay = `${Math.random() * 15}s`;
            salt.style.opacity = `${0.2 + Math.random() * 0.4}`;
            spicesBackground.appendChild(salt);
        }
        
        // إنشاء دخان المطبخ
        for (let i = 0; i < 10; i++) {
            const smoke = document.createElement('div');
            smoke.classList.add('smoke-particle');
            smoke.style.left = `${10 + Math.random() * 80}%`;
            smoke.style.animationDelay = `${Math.random() * 15}s`;
            kitchenSmoke.appendChild(smoke);
        }
    }

    // تهيئة المتغيرات
    let currentLang = 'ar';
    let currentPage = 'home';
    let cartItems = [];
    const quickOrderBtn = document.getElementById('quickOrderBtn');
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');

    // وظيفة تغيير اللغة
    function changeLanguage(lang) {
        currentLang = lang;
        
        // تحديث اتجاه الصفحة
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        // تغيير الخط حسب اللغة
        document.body.style.fontFamily = lang === 'ar' ? "'Cairo', sans-serif" : "'Inter', sans-serif";
        
        // تحديث جميع النصوص
        updateAllTexts();
        
        // تحديث زر اللغة
        const languageText = languageBtn.querySelector('.language-text');
        if (languageText) {
            languageText.textContent = translations[lang].language;
        }
        
        // تحديث القائمة المنسدلة للغة
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            }
        });
        
        // تحديث زر الطلب السريع
        const quickOrderSpan = quickOrderBtn.querySelector('span');
        if (quickOrderSpan) {
            quickOrderSpan.textContent = translations[lang].orderNow;
        }
    }

    // وظيفة تحديث جميع النصوص
    function updateAllTexts() {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[currentLang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.hasAttribute('placeholder')) {
                        element.setAttribute('placeholder', translations[currentLang][key]);
                    }
                } else if (element.tagName === 'BUTTON' && element.type === 'submit') {
                    element.innerHTML = `<i class="fas fa-paper-plane"></i> ${translations[currentLang][key]}`;
                } else {
                    const text = translations[currentLang][key];
                    if (text.includes('<br>')) {
                        element.innerHTML = text;
                    } else {
                        element.textContent = text;
                    }
                }
            }
        });
    }

    // وظيفة تغيير الصفحة
    function changePage(pageId) {
        if (pageId === currentPage) return;
        
        // إخفاء جميع الصفحات
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // إزالة النشاط من جميع روابط التنقل
        document.querySelectorAll('.navbar-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // إظهار الصفحة المحددة
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            
            // إضافة النشاط للرابط المحدد
            const targetLink = document.querySelector(`.navbar-link[data-page="${pageId}"]`);
            if (targetLink) {
                targetLink.classList.add('active');
            }
            
            // تحديث المتغير الحالي
            currentPage = pageId;
            
            // إغلاق القائمة على الأجهزة المحمولة
            if (window.innerWidth <= 768) {
                navbarMenu.classList.remove('active');
                navbarToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            // تفعيل تأثيرات البطاقات
            setTimeout(checkCards, 300);
            
            // التمرير إلى أعلى الصفحة
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // زر الطلب السريع
    quickOrderBtn.addEventListener('click', function() {
        changePage('order');
    });

    // تبديل القائمة على الأجهزة المحمولة
    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
        this.innerHTML = navbarMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // التنقل عبر روابط القائمة
    document.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            changePage(pageId);
        });
    });

    // التنقل عبر الأزرار
    document.querySelectorAll('.btn[data-page]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            changePage(pageId);
        });
    });

    // التنقل عبر روابط التذييل
    document.querySelectorAll('.footer-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            if (pageId) {
                changePage(pageId);
                
                // إذا كان هناك عامل تصفية
                const filter = this.getAttribute('data-filter');
                if (filter && pageId === 'menu') {
                    setTimeout(() => {
                        const filterBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
                        if (filterBtn) {
                            filterBtn.click();
                        }
                    }, 500);
                }
            }
        });
    });

    // التنقل عبر بطاقات التصنيفات
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            changePage('menu');
            
            setTimeout(() => {
                const filterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
                if (filterBtn) {
                    filterBtn.click();
                }
            }, 500);
        });
    });

    // تبديل اللغة
    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });

    // اختيار لغة من القائمة
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            languageDropdown.classList.remove('show');
        });
    });

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function(e) {
        if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('show');
        }
    });

    // تصفية قائمة الطعام
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // إزالة النشاط من جميع الأزرار
            filterBtns.forEach(b => b.classList.remove('active'));
            // إضافة النشاط للزر المحدد
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            menuItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // إضافة عناصر إلى السلة
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const itemId = this.getAttribute('data-item');
            addToCart(itemId);
        });
    });

    // وظيفة إضافة إلى السلة
    function addToCart(itemId) {
        const menuItem = document.querySelector(`.menu-item[data-category][data-item="${itemId}"]`);
        if (!menuItem) return;
        
        const title = menuItem.querySelector('h3').textContent;
        const price = parseInt(menuItem.querySelector('.menu-item-price').textContent);
        
        // رسالة نجاح
        const message = currentLang === 'ar' 
            ? 'تم إضافة العنصر إلى سلة التسوق!' 
            : 'Item added to cart!';
        
        showNotification(message, 'success');
        
        // تحديث السلة
        updateCart();
    }

    // تحديث السلة
    function updateCart() {
        // هنا يمكنك إضافة منطق تحديث السلة
        console.log('Cart updated');
    }

    // إرسال نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // رسالة نجاح
            const message = currentLang === 'ar' 
                ? 'شكراً لك على رسالتك! سنجيب عليك في أقرب وقت ممكن.' 
                : 'Thank you for your message! We will get back to you as soon as possible.';
            
            showNotification(message, 'success');
            
            // إعادة تعيين النموذج
            contactForm.reset();
        });
    }

    // وظيفة عرض الإشعار
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 30px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #d4a017, #059669)' : 'linear-gradient(135deg, #dc2626, #d4a017)'};
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.15);
            z-index: 9999;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 12px;
            transform: translateX(150%);
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        `;
        
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}" style="font-size: 20px;"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        // عرض الإشعار
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // إخفاء الإشعار بعد 4 ثواني
        setTimeout(() => {
            notification.style.transform = 'translateX(150%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 400);
        }, 4000);
    }

    // إضافة تأثيرات للبطاقات عند التمرير
    const cards = document.querySelectorAll('.dish-card, .category-card, .menu-item, .philosophy-card, .contact-card');
    
    function checkCards() {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // إعداد البطاقات الأولية
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
    
    // تفعيل تأثيرات البطاقات عند التحميل
    setTimeout(checkCards, 300);
    
    // تفعيل تأثيرات البطاقات عند التمرير
    window.addEventListener('scroll', checkCards);
    
    // تهيئة اللغة الافتراضية
    changeLanguage('ar');
    
    // تهيئة تأثيرات الخلفية
    initBackgroundEffects();
});