<!DOCTYPE html>
<html lang="en">

<head>

    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Al Yarubi International Group SPC</title>
        <meta name="description" content="Al Yarubi International Group SPC - شركة عمانية متخصصة في الاستيراد والتصدير منذ عام 2009، نقدم منتجات عالية الجودة وصديقة للبيئة بأسعار منافسة." />
        <meta name="keywords" content="Al Yarubi, الاستيراد والتصدير, منتجات صحية, سلطنة عمان, شركة عمانية, جودة عالية, شركة العربي" />
        <meta name="author" content="Al Yarubi International Group SPC" />
        <meta name="language" content="ar" />
        <meta name="robots" content="index, follow" />

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Al Yarubi International Group SPC" />
        <meta property="og:description" content="شركة عمانية رائدة في مجال الاستيراد والتصدير منذ 2009، تقدم منتجات صحية وبيئية بأسعار منافسة." />
        <meta property="og:image" content="./logo.png" />
        <meta property="og:url" content="./index.php" />
        <meta property="og:site_name" content="Al Yarubi International Group SPC" />

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Al Yarubi International Group SPC" />
        <meta name="twitter:description" content="شركة عمانية للاستيراد والتصدير، تقدم منتجات عالية الجودة وصديقة للبيئة." />
        <meta name="twitter:image" content="./logo.png" />

        <!-- Favicon -->
        <link rel="shortcut icon" href="./logo.png" type="image/x-icon" />

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic&display=swap" rel="stylesheet" />

        <!-- Vendor CSS Files -->
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        <!-- Main CSS File -->
        <link rel="stylesheet" href="./style.css">
    </head>

<body>
    <div class="container">
        <div class="card">
            <h1>Alyarubi Group / مجموعة العربي</h1>

            <form id="orderForm" method="POST" action="send-mail.php">
                <label for="fullName">Full Name / الاسم بالكامل</label>
                <input type="text" id="fullName" name="fullName" value="<?= htmlspecialchars($fullName ?? '') ?>" required>
                <small class="error" id="fullNameError"></small>

                <label for="phoneNumber">Phone Number / رقم الهاتف</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value="<?= htmlspecialchars($phone ?? '') ?>" required>
                <small class="error" id="phoneError"></small>

                <label for="email">Email / البريد الإلكتروني</label>
                <input type="email" id="email" name="email" value="<?= htmlspecialchars($email ?? '') ?>" required>
                <small class="error" id="emailError"></small>

                <label for="productName">Product Name / اسم المنتج</label>
                <input type="text" id="productName" name="productName" value="<?= htmlspecialchars($product ?? '') ?>" required>
                <small class="error" id="productError"></small>

                <label for="quantity">Quantity / الكمية المطلوبة</label>
                <input type="number" id="quantity" name="quantity" min="1" value="<?= htmlspecialchars($quantity ?? '1') ?>" required>
                <small class="error" id="quantityError"></small>

                <label for="notes">Additional Notes (Optional) / ملاحظات إضافية</label>
                <textarea id="notes" name="notes"><?= htmlspecialchars($notes ?? '') ?></textarea>

                <button type="submit">Submit Order / إرسال الطلب</button>
            </form>

        </div>
    </div>
    <script src="./script.js"></script>
</body>

</html>