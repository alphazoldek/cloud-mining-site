// عنوان محفظة USDT (يمكنك تغييره)
const usdtAddress = "TXYZ12345YOURUSDTADDRESS67890ABCDE";

// عناصر الصفحة
const modal = document.getElementById('purchaseModal');
const modalMessage = document.getElementById('modalMessage');
const subscribersElem = document.getElementById('subscribers');
const totalInvestedElem = document.getElementById('totalInvested');

// القيم الابتدائية
let subscribers = 4572;
let totalInvested = 115200;

// دالة لتنسيق الأرقام بفواصل
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// تحديث عرض الإحصائيات
function updateDisplay() {
  subscribersElem.textContent = `${formatNumber(subscribers)} مستخدم`;
  totalInvestedElem.textContent = `${formatNumber(totalInvested)} USDT`;
}

// زيادة عدد المنخرطين والمبلغ بشكل عشوائي وواقعي
function incrementStats() {
  const newSubs = Math.floor(Math.random() * 5) + 1; // 1-5 مستخدمين جدد
  subscribers += newSubs;

  // مبلغ عشوائي لكل مستخدم جديد بين 10 و50 USDT
  let newAmount = 0;
  for(let i = 0; i < newSubs; i++) {
    newAmount += Math.floor(Math.random() * 41) + 10;
  }
  totalInvested += newAmount;

  updateDisplay();
}

// تفعيل التحديث كل 4 ثواني
setInterval(incrementStats, 4000);

// تحديث العرض أول مرة
updateDisplay();

// عند الضغط على زر شراء تظهر نافذة المودال مع التفاصيل
function buyPlan(planName, amount) {
  modal.style.display = 'block';
  modalMessage.innerHTML = `
    <strong>اسم الباقة:</strong> ${planName} <br/>
    <strong>المبلغ المطلوب:</strong> ${amount} USDT <br/><br/>
    <strong>أرسل المبلغ إلى عنوان USDT التالي:</strong><br/>
    <code style="background:#222; padding: 0.4rem 0.7rem; border-radius:4px; user-select: all;">${usdtAddress}</code>
    <br/><br/>
    بعد استلامنا لدفعتك والتحقق منها، سيتم إرسال الأرباح تلقائيًا إلى عنوان المحفظة التي استخدمتها في الشراء.<br/>
    يرجى التأكد من صحة العنوان واحتفظ بإثبات الدفع.
  `;
}

// إغلاق النافذة
function closeModal() {
  modal.style.display = 'none';
}

// تأكيد الشراء (يمكن تعديل حسب حاجتك)
function confirmPurchase() {
  alert('شكرًا لشرائك! سيتم مراجعة الدفع قريبًا.');
  closeModal();
}

// إغلاق المودال عند الضغط خارجه
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
};
