// ملف JavaScript لأسلوب إنستجرام 2025
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== تفاعل زر الإعجاب ==========
    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const likesCount = this.closest('.instagram-post').querySelector('.likes-count');
            
            if (icon.classList.contains('far')) {
                // إضافة إعجاب
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.classList.add('active');
                
                // زيادة عدد الإعجابات
                const currentLikes = parseInt(likesCount.textContent.match(/\d+/)[0]);
                likesCount.textContent = `${currentLikes + 1} إعجاب`;
                
                // تأثير النبض
                this.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 300);
            } else {
                // إزالة الإعجاب
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.classList.remove('active');
                
                // تقليل عدد الإعجابات
                const currentLikes = parseInt(likesCount.textContent.match(/\d+/)[0]);
                if (currentLikes > 0) {
                    likesCount.textContent = `${currentLikes - 1} إعجاب`;
                }
            }
        });
    });
    
    // ========== نشر تعليق جديد ==========
    document.querySelectorAll('.post-comment-btn').forEach(button => {
        button.addEventListener('click', function() {
            const post = this.closest('.instagram-post');
            const commentInput = post.querySelector('.add-comment input');
            const commentsSection = post.querySelector('.post-comments');
            
            if (commentInput.value.trim() !== '') {
                // إنشاء تعليق جديد
                const newComment = document.createElement('div');
                newComment.className = 'comment';
                newComment.innerHTML = `
                    <span class="comment-user">أنت</span>
                    <span class="comment-text">${commentInput.value}</span>
                `;
                
                // إضافة التعليق قبل رابط "عرض كل التعليقات"
                const viewCommentsLink = commentsSection.querySelector('.view-comments');
                commentsSection.insertBefore(newComment, viewCommentsLink);
                
                // زيادة عدد التعليقات
                const viewCommentsText = viewCommentsLink.textContent;
                const commentCount = parseInt(viewCommentsText.match(/\d+/)[0]);
                viewCommentsLink.textContent = `عرض كل التعليقات (${commentCount + 1})`;
                
                // تفريغ حقل الإدخال
                commentInput.value = '';
                
                // تأثير بسيط
                newComment.style.opacity = '0';
                newComment.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    newComment.style.transition = 'opacity 0.3s, transform 0.3s';
                    newComment.style.opacity = '1';
                    newComment.style.transform = 'translateY(0)';
                }, 10);
            }
        });
    });
    
    // ========== نشر تعليق بالضغط على Enter ==========
    document.querySelectorAll('.add-comment input').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.closest('.add-comment').querySelector('.post-comment-btn').click();
            }
        });
    });
    
    // ========== زر المتابعة في الاقتراحات ==========
    document.querySelectorAll('.follow-btn').forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === 'متابعة') {
                this.textContent = 'متابَع';
                this.style.color = '#666';
                
                // تأثير بسيط
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            } else {
                this.textContent = 'متابعة';
                this.style.color = '';
            }
        });
    });
    
    // ========== زر إنشاء منشور جديد ==========
    const createPostBtn = document.querySelector('.create-post-btn');
    if (createPostBtn) {
        createPostBtn.addEventListener('click', function() {
            // تأثير النبض
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // إنشاء نافذة منبثقة (محاكاة)
            const modal = document.createElement('div');
            modal.className = 'create-post-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>إنشاء منشور جديد</h3>
                        <button class="close-modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <textarea placeholder="ماذا تريد مشاركته عن البروفوليو؟"></textarea>
                        <div class="modal-options">
                            <button class="option-btn">
                                <i class="fas fa-camera"></i>
                                صورة
                            </button>
                            <button class="option-btn">
                                <i class="fas fa-video"></i>
                                فيديو
                            </button>
                            <button class="option-btn">
                                <i class="fas fa-link"></i>
                                رابط
                            </button>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="cancel-btn">إلغاء</button>
                        <button class="publish-btn">نشر</button>
                    </div>
                </div>
            `;
            
            // إضافة الأنماط
            const style = document.createElement('style');
            style.textContent = `
                .create-post-modal {
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2000;
                    backdrop-filter: blur(5px);
                }
                .modal-content {
                    background: white;
                    border-radius: 1rem;
                    width: 90%;
                    max-width: 500px;
                    overflow: hidden;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                }
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.25rem;
                    border-bottom: 1px solid #e5e5e5;
                }
                .modal-header h3 {
                    font-family: 'IBM Plex Sans Arabic', sans-serif;
                    font-weight: 600;
                    margin: 0;
                }
                .close-modal {
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #666;
                }
                .modal-body {
                    padding: 1.25rem;
                }
                .modal-body textarea {
                    width: 100%;
                    height: 150px;
                    border: 1px solid #e5e5e5;
                    border-radius: 0.5rem;
                    padding: 1rem;
                    font-family: 'Rubik', sans-serif;
                    resize: none;
                    margin-bottom: 1.25rem;
                }
                .modal-body textarea:focus {
                    outline: none;
                    border-color: #0095f6;
                }
                .modal-options {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                }
                .option-btn {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    background: #f5f5f5;
                    border: none;
                    border-radius: 0.5rem;
                    padding: 1rem;
                    cursor: pointer;
                    transition: background 0.2s;
                }
                .option-btn:hover {
                    background: #e5e5e5;
                }
                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 1rem;
                    padding: 1.25rem;
                    border-top: 1px solid #e5e5e5;
                }
                .cancel-btn, .publish-btn {
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.5rem;
                    font-family: 'IBM Plex Sans Arabic', sans-serif;
                    font-weight: 600;
                    cursor: pointer;
                    border: none;
                }
                .cancel-btn {
                    background: #f5f5f5;
                    color: #666;
                }
                .publish-btn {
                    background: #0095f6;
                    color: white;
                }
            `;
            
            document.head.appendChild(style);
            document.body.appendChild(modal);
            
            // إغلاق النافذة المنبثقة
            modal.querySelector('.close-modal').addEventListener('click', () => {
                document.body.removeChild(modal);
                document.head.removeChild(style);
            });
            
            modal.querySelector('.cancel-btn').addEventListener('click', () => {
                document.body.removeChild(modal);
                document.head.removeChild(style);
            });
            
            modal.querySelector('.publish-btn').addEventListener('click', () => {
                const text = modal.querySelector('textarea').value;
                if (text.trim() !== '') {
                    // هنا يمكن إضافة منطق النشر الحقيقي
                    alert('تم نشر منشورك بنجاح! (هذه محاكاة)');
                    document.body.removeChild(modal);
                    document.head.removeChild(style);
                } else {
                    alert('يرجى إضافة نص للمنشور');
                }
            });
        });
    }
    
    // ========== تأثيرات القصص ==========
    document.querySelectorAll('.story-circle').forEach(circle => {
        circle.addEventListener('click', function() {
            if (!this.closest('.story').classList.contains('new-story')) {
                // تأثير النقر على القصة
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
                
                // محاكاة فتح القصة
                const storyType = this.closest('.story').querySelector('span').textContent;
                alert(`تشغيل قصة ${storyType}... (هذه محاكاة)`);
            }
        });
    });
    
    // ========== تأثيرات التمرير والظهور ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // إضافة تأثير الظهور للبوستات
    document.querySelectorAll('.instagram-post').forEach((post, index) => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(20px)';
        post.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        post.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(post);
    });
    
    // ========== البحث في شريط التنقل ==========
    const searchInput = document.querySelector('.nav-search input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const posts = document.querySelectorAll('.instagram-post');
            
            posts.forEach(post => {
                const postTitle = post.querySelector('.post-title').textContent.toLowerCase();
                const postText = post.querySelector('.post-text').textContent.toLowerCase();
                const postTags = post.querySelector('.post-tags').textContent.toLowerCase();
                
                if (searchTerm === '' || postTitle.includes(searchTerm) || 
                    postText.includes(searchTerm) || postTags.includes(searchTerm)) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    }
    
    // ========== التنقل النشط ==========
    const navItems = document.querySelectorAll('.nav-icon, .mobile-nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // ========== تأثيرات الأزرار ==========
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // ========== رسالة ترحيب في الكونسول ==========
    console.log('%c✨ PortfolioGram - إصدار جيل Z 2025 ✨', 'background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d); color: white; padding: 10px; border-radius: 5px; font-size: 14px;');
    console.log('%c🎯 موقع يعرض أهمية البروفوليو بأسلوب إنستجرام عصري', 'color: #0095f6; font-size: 12px;');
    
    // ========== تحميل محاكاة للمزيد من المحتوى عند التمرير ==========
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
                <span>جاري تحميل المزيد من المنشورات...</span>
            `;
            
            // إضافة الأنماط
            const loadingStyle = document.createElement('style');
            loadingStyle.textContent = `
                .loading-indicator {
                    text-align: center;
                    padding: 2rem;
                    color: #666;
                }
                .loading-spinner {
                    border: 3px solid #f3f3f3;
                    border-top: 3px solid #0095f6;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 1rem;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            
            document.head.appendChild(loadingStyle);
            document.querySelector('.posts-grid').appendChild(loadingIndicator);
            
            // محاكاة التأخير
            setTimeout(() => {
                // في التطبيق الحقيقي، هنا ستقوم بجلب بيانات جديدة
                document.querySelector('.posts-grid').removeChild(loadingIndicator);
                document.head.removeChild(loadingStyle);
                isLoading = false;
            }, 1500);
        }
    });
});