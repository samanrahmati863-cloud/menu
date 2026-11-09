/*
  ✏️  EDIT THE MENU HERE
  ----------------------
  - name:  item name (Persian)
  - note:  small text under/next to the name (optional)
  - price: e.g. "۱۲۰" or "120,000" — leave "" to hide prices
  Save the file on GitHub and the live menu updates in ~1 minute.
*/
window.MENU = {
  currency: "هزار تومان",   // shown after prices (only if a price is set)

  sections: [
    {
      id: "hot",
      title: "بار گرم",
      items: [
        { name: "اسپرسو تک / دوبل", price: "" },
        { name: "لته / کاپوچینو", price: "" },
        { name: "کارامل ماکیاتو", price: "" },
        { name: "آمریکانو", price: "" },
        { name: "کورتادو", price: "" },
        { name: "موکا", price: "" }
      ]
    },
    {
      id: "cold",
      title: "بار سرد",
      items: [
        { name: "آیس پینک چاکلت", price: "" },
        { name: "آیس آمریکانو", price: "" },
        { name: "آیس لته", price: "" },
        { name: "کولد برو", price: "" },
        { name: "موهیتو", note: "فصلی", price: "" },
        { name: "آفوگاتو", price: "" }
      ]
    },
    {
      id: "nocoffee",
      title: "بدون قهوه",
      items: [
        { name: "پینک چاکلت", price: "" },
        { name: "هات چاکلت", price: "" },
        { name: "چای کرک", note: "ساده / پسته زعفرانی", price: "" },
        { name: "چای", price: "" }
      ]
    },
    {
      id: "cake",
      title: "کیک و کوکی",
      items: [
        { name: "براونی", price: "" },
        { name: "کوکی", price: "" },
        { name: "کیک", price: "" }
      ]
    }
  ],

  addon: { name: "سیروپ اضافه", price: "" },

  // what the dinos say when tapped
  quotes: [
    "قهوه‌ام کو؟ ☕",
    "یه دوبل لطفاً!",
    "راااااررر!",
    "اول قهوه، بعد انقراض",
    "۶۶ میلیون سال منتظر این لته بودم",
    "خدایا شکرت بابت قهوه",
    "کافئین = زنده موندن"
  ]
};
