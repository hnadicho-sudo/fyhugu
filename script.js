let images = [
  "../img/Ourfirstdate.jpg",
  "../img/Secdate.jpg",
  "../img/thirddate.jpg",
  "../img/socute.jpg",
  "../img/sofunwthu.jpg",
   "../img/energyfull.jpg",
  "../img/thelastdatetillnow.jpg"
];

let captions = [
  "That first day together — I remember it like sunshine.",
  "That second date —  အကြိုက်ဆုံးပုံရိပ်လေးတခုဖြစ်ခဲ့ကြတယ်။ ရင်လည်းခုန်ခဲ့ရသလို ၂ ပတ်ခွဲရမာမို့ကြိတ်ပြီးလည်းဝမ်းနည်းမိခဲ့တယ်။",
  "That third date —  အရမ်းပျော်ခဲ့တယ့်နေ့လေးတနေ့ပေါ့။ ပြေးဖက်တယ့် moment ကိုတော့မရိုက်လိုက်ရပေမယ့် ဘယ်တော့မှ မေ့လျော့မရဘူး။",
  "That moment —  အရမ်းသဘောကျခဲ့ရတယ့် momentလေးတခုပေါ့ မင်းရဲ့နွေးထွေးမှုကြောင့် ငိုချင်လာရတယ့်ထိ မြတ်နိုးမိတယ်။",
  "Our energy together —  မမရဲ့ပထမဆုံး သင်္ကြန်လျှောက်လည်ခွင့်ရတယ့်နှစ်မာ မင်းနဲ့တူတူဖြတ်သန်းရတော့ အတိုင်းဆမရှိပျော်ခဲံ့ရတယ်။",
  "I've got courage buz of you —  မမနဲ့လိုက်ခဲ့ပေးလို့အများကြီးကျေးဇူးတင်ပါတယ်။ မမတွက်နဲ့အဆူခံပြီးလိုက်လာပေးတယ့်ပေါက်စလေးကိုလည်းမမကအများကြီးချစ်တယ်နော်ပေါက်စလေး",
  "The last date till now —  မမတို့ရဲ့ ပထမဆုံး movie date လေး။ မရှိတယ့်ကြားကရအောင်လိုက်ခဲ့ပေးတယ့်အတွက် အရမ်းကျေးဇူးတင်ပါတယ်။ မမတို့ရဲ့ ပထမဆုံး movie date လေးကိုတော့ မမတို့ရဲ့ အမှတ်တရလေးတခုအဖြစ် အမြဲသိမ်းဆည်းထားမှာပါ။"
];

let index = 0;

const startBtn = document.getElementById('startBtn');
const galleryWrap = document.getElementById('galleryWrap');
const finalSection = document.getElementById('final');
const slideEl = document.getElementById('slide');
const captionEl = document.getElementById('caption');
const thumbs = document.getElementById('thumbs');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const closeBtn = document.getElementById('closeBtn');
const replayBtn = document.getElementById('replay');

function init() {
  // attach handlers
  startBtn && startBtn.addEventListener('click', openGallery);
  prevBtn && prevBtn.addEventListener('click', showPrev);
  nextBtn && nextBtn.addEventListener('click', showNext);
  closeBtn && closeBtn.addEventListener('click', closeGallery);
  replayBtn && replayBtn.addEventListener('click', replay);

  // ensure thumbnails are clickable (fallback if not generated)
  if (thumbs) {
    thumbs.querySelectorAll('img').forEach(img => {
      img.addEventListener('click', () => {
        const idx = Number(img.dataset.index || 0);
        showSlide(idx);
      });
    });
  }
}

function openGallery() {
  startBtn.style.display = 'none';
  finalSection.classList.add('hidden');
  galleryWrap.classList.remove('hidden');
  showSlide(0);
}

function showSlide(n) {
  if (n < 0) n = 0;
  if (n >= images.length) n = images.length - 1;
  index = n;
  slideEl.src = images[index];
  captionEl.innerText = captions[index] || '';
  // update active thumb
  thumbs && thumbs.querySelectorAll('img').forEach(img => img.classList.remove('active'));
  const activeThumb = thumbs && thumbs.querySelector(`img[data-index="${index}"]`);
  activeThumb && activeThumb.classList.add('active');
}

function showNext() {
  if (index < images.length - 1) {
    showSlide(index + 1);
  } else {
    showFinal();
  }
}

function showPrev() {
  if (index > 0) showSlide(index - 1);
}

function closeGallery() {
  galleryWrap.classList.add('hidden');
  startBtn.style.display = '';
}

function showFinal() {
  galleryWrap.classList.add('hidden');
  finalSection.classList.remove('hidden');
  typeEffect("I just want to say... I WILL ALWAYS LOVE YOU ❤️");
}

function replay() {
  document.getElementById('typing').innerHTML = '';
  openGallery();
}

function typeEffect(text) {
  let i = 0;
  let speed = 60;
  const target = document.getElementById('typing');
  target.innerHTML = '';
  function typing() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

document.addEventListener('DOMContentLoaded', init);