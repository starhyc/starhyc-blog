// 主要JavaScript文件

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 添加导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // 添加文章卡片点击效果
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 如果点击的是卡片本身而不是链接，跳转到文章详情页
            if (e.target === this) {
                const link = this.querySelector('a');
                if (link) {
                    window.location.href = link.href;
                }
            }
        });
    });
    
    // 搜索功能
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            filterPosts(searchTerm);
        });
    }
});

// 过滤文章函数
function filterPosts(searchTerm) {
    const postCards = document.querySelectorAll('.post-card');
    
    postCards.forEach(card => {
        const title = card.querySelector('h3 a').textContent.toLowerCase();
        const excerpt = card.querySelector('.post-excerpt').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 日期格式化函数
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('zh-CN', options);
}

// 模拟加载更多文章
function loadMorePosts() {
    console.log('加载更多文章...');
    // 这里可以添加实际的加载逻辑
}