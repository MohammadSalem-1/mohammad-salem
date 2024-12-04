// إضافة تفاعل عند الضغط على زر "ابدأ اللعب"
document.querySelectorAll('.game-link').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();  // منع إعادة تحميل الصفحة
        alert('تم البدء في اللعبة!');  // رسالة تفاعلية
    });
});

// إضافة تأثير عند التمرير على الأزرار
document.querySelectorAll('.game-link').forEach(item => {
    item.addEventListener('mouseenter', function() {
        item.style.backgroundColor = '#ffca28';  // تغيير اللون عند المرور
    });

    item.addEventListener('mouseleave', function() {
        item.style.backgroundColor = '#00bcd4';  // استرجاع اللون الأصلي
    });
});
