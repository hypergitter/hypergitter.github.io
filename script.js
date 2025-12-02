document.addEventListener('DOMContentLoaded', () => {
    // 获取所有的导航链接和内容板块
    const navLinks = document.querySelectorAll('.nav-links li');
    const sections = document.querySelectorAll('.tab-content');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // 1. 移除所有 nav 的 active 状态
            navLinks.forEach(nav => nav.classList.remove('active'));
            
            // 2. 给当前点击的 nav 添加 active 状态
            link.classList.add('active');

            // 3. 获取点击目标的 ID
            const targetId = link.getAttribute('data-target');

            // 4. 隐藏所有 section，显示目标 section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
            
            // 5. 移动端优化：点击后自动滚回顶部
            window.scrollTo(0, 0);
        });
    });
});