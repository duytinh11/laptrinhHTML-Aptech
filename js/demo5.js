document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu > li');
    let timeoutId; // Biến để lưu trữ ID của timeout

    menuItems.forEach(item => {
        const submenu = item.querySelector('.submenu');

        // Sự kiện khi chuột đi vào LI cha
        item.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId); // Xóa bất kỳ timeout nào đang chờ ẩn submenu
            if (submenu) {
                submenu.style.display = 'block';
            }
        });

        // Sự kiện khi chuột rời khỏi LI cha
        item.addEventListener('mouseleave', () => {
            // Đặt một timeout ngắn trước khi ẩn submenu
            timeoutId = setTimeout(() => {
                if (submenu) {
                    submenu.style.display = 'none';
                }
            }, 200); // 200ms (0.2 giây) độ trễ
        });

        // Nếu có submenu, thêm sự kiện để ngăn ẩn khi di chuột vào submenu
        if (submenu) {
            submenu.addEventListener('mouseenter', () => {
                clearTimeout(timeoutId); // Xóa timeout để giữ submenu hiển thị
            });

            submenu.addEventListener('mouseleave', () => {
                // Đặt timeout để ẩn submenu khi chuột rời khỏi nó
                timeoutId = setTimeout(() => {
                    submenu.style.display = 'none';
                }, 200);
            });
        }
    });
});