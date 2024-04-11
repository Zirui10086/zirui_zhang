// 等待DOM完全加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取原始图像和悬停图像元素
    var originalImage = document.querySelector('.hover-effect.original-image');
    var hoverImage = document.querySelector('.hover-effect.hover-image');

    // 检查元素是否存在以防止错误
    if (originalImage && hoverImage) {
        // 添加鼠标悬停事件监听器
        document.querySelector('.image-container').addEventListener('mouseover', function() {
            originalImage.style.opacity = '0';
            hoverImage.style.opacity = '1';
        });

        document.querySelector('.image-container').addEventListener('mouseout', function() {
            originalImage.style.opacity = '1';
            hoverImage.style.opacity = '0';
        });
    }
});
