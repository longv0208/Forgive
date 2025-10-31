Dưới đây là **prompt hoàn chỉnh** để bạn gửi cho **Cursor** (hoặc bất kỳ AI code assistant nào) nhằm tạo **một trang web có giao diện và hành vi giống hệt ảnh bạn gửi**, với hiệu ứng vui nhộn khi bấm nút **“No”** và kết thúc bằng ảnh **“I knew you would forgive me!”**.

---

### 💡 Prompt cho Cursor

```
Tạo một trang web đơn giản (HTML + CSS + JavaScript) có giao diện tương tự như 2 ảnh sau:

Ảnh 1: giao diện chính hiển thị ảnh mèo buồn với dòng chữ "Will you forgive me?" và 2 nút "Yes" và "No".  
Ảnh 2: giao diện sau khi người dùng bấm "Yes", hiển thị ảnh mèo cầm tim với dòng chữ "I knew you would forgive me!" cùng biểu tượng trái tim ở dưới.

Yêu cầu chi tiết:

1. **Giao diện tổng thể**
   - Nền màu hồng nhạt (#ffe6f0 hoặc tương tự), có khung trắng bo tròn, viền hồng mảnh.
   - Font chữ dễ thương, dùng màu hồng đậm (#ff66b2).
   - Căn giữa toàn bộ nội dung cả theo chiều ngang và dọc.
   - Có hiệu ứng hover nhẹ cho các nút.

2. **Giao diện ban đầu**
   - Hiển thị ảnh mèo buồn (ảnh đầu tiên bạn có thể đặt là `sad-cat.png`).
   - Dòng chữ to đậm: “Will you forgive me?”
   - Hai nút: **Yes** và **No**
     - Nút Yes: màu hồng đậm (#ff80bf), chữ trắng, border-radius 10px.
     - Nút No: màu hồng nhạt (#ffcce0), chữ hồng đậm.
   - Cả hai nút nằm cạnh nhau hoặc có khoảng cách hợp lý.

3. **Hiệu ứng khi bấm “No”**
   - Mỗi lần bấm nút “No”:
     - Ảnh mèo buồn thay đổi sang ảnh khác (ví dụ `cat1.png`, `cat2.png`, `cat3.png`, `cat4.png` – mỗi lần một ảnh khác).
     - Nút “Yes” sẽ **to lên 1.3 lần** so với trước đó.
     - Nút “No” sẽ **nhỏ đi 0.7 lần** so với trước đó.
   - Sau **4 lần**, nút “No” sẽ nhỏ đến mức **rất bé (gần như không thể bấm được)** và ngừng hoạt động (disabled hoặc pointer-events: none).
   - Có thể thêm hiệu ứng mượt (transition: 0.3s).

4. **Hiệu ứng khi bấm “Yes”**
   - Toàn bộ giao diện cũ biến mất, hiển thị giao diện thứ hai:
     - Ảnh mèo cầm tim (ảnh thứ hai bạn có thể đặt là `happy-cat.png`).
     - Dòng chữ: **“I knew you would forgive me!”**
     - Dưới có icon trái tim 💗 (hoặc ảnh nhỏ).
     - Hiệu ứng fade-in nhẹ cho ảnh và chữ (opacity + scale).

5. **File structure**
```

index.html
style.css
script.js
/images
sad1.png
sad2.png
sad3.png
sad4.png
happy.png

```
- Sử dụng đường dẫn tương đối.
- Tất cả hoạt động thuần client-side, không cần backend.

- Sử dụng đường dẫn tương đối.
- Tất cả hoạt động thuần client-side, không cần backend.

6. **Tùy chọn nâng cao (nếu muốn)**
- Thêm hiệu ứng rung nhẹ cho nút “No” mỗi lần bấm.
- Thêm animation “phồng to” mượt cho nút “Yes”.
- Toàn trang có hiệu ứng tim bay nhẹ sau khi bấm “Yes”.

=> Hãy viết code hoàn chỉnh, chia thành 3 file (HTML, CSS, JS), đảm bảo chạy ngay được khi mở `index.html`.


6. **Tùy chọn nâng cao (nếu muốn)**
- Thêm hiệu ứng rung nhẹ cho nút “No” mỗi lần bấm.
- Thêm animation “phồng to” mượt cho nút “Yes”.
- Toàn trang có hiệu ứng tim bay nhẹ sau khi bấm “Yes”.

=> Hãy viết code hoàn chỉnh, chia thành 3 file (HTML, CSS, JS), đảm bảo chạy ngay được khi mở `index.html`.
```

---

Bạn chỉ cần **copy toàn bộ prompt trên** dán vào Cursor, nó sẽ sinh ra đủ 3 file cho bạn (`index.html`, `style.css`, `script.js`).
Nếu bạn muốn, mình có thể tạo luôn đoạn code hoàn chỉnh (với hiệu ứng to/nhỏ nút, đổi ảnh, hiệu ứng tim bay). Bạn có muốn mình tạo luôn code sẵn không?
