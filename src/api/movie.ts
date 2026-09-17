
export type Movie = {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  description: string;
  image: string;
};

export const movies: Movie[] = [
  {
    id: 1,
    title: "تلقین",
    genre: "علمی تخیلی",
    year: 2010,
    rating: 8.8,
    description:
      "دزدی که می‌تواند وارد خواب دیگران شود، مأموریتی متفاوت برای کاشتن یک ایده در ذهن یک فرد دریافت می‌کند.",
    image:
      "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
  },
  {
    id: 2,
    title: "میان‌ستاره‌ای",
    genre: "علمی تخیلی",
    year: 2014,
    rating: 8.7,
    description:
      "گروهی از فضانوردان برای پیدا کردن سیاره‌ای مناسب برای زندگی انسان‌ها راهی سفری خطرناک در فضا می‌شوند.",
    image:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 3,
    title: "شوالیه تاریکی",
    genre: "اکشن",
    year: 2008,
    rating: 9.0,
    description:
      "بتمن با دشمنی جدید و غیرقابل پیش‌بینی به نام جوکر روبه‌رو می‌شود که شهر گاتهام را به آشوب می‌کشد.",
    image:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 4,
    title: "فارست گامپ",
    genre: "درام",
    year: 1994,
    rating: 8.8,
    description:
      "داستان زندگی مردی ساده‌دل که اتفاقات مهم و تاریخی زیادی را در طول زندگی خود تجربه می‌کند.",
    image:
      "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
  },
  {
    id: 5,
    title: "باشگاه مشت‌زنی",
    genre: "درام",
    year: 1999,
    rating: 8.8,
    description:
      "مردی خسته از زندگی روزمره با فردی مرموز آشنا می‌شود و وارد دنیای زیرزمینی مبارزه می‌شود.",
    image:
      "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  },
  {
    id: 6,
    title: "پدرخوانده",
    genre: "جنایی",
    year: 1972,
    rating: 9.2,
    description:
      "داستان خانواده‌ای قدرتمند که در دنیای جرم و جنایت سازمان‌یافته فعالیت می‌کنند.",
    image:
      "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
  {
    id: 7,
    title: "ماتریکس",
    genre: "علمی تخیلی",
    year: 1999,
    rating: 8.7,
    description:
      "یک برنامه‌نویس متوجه می‌شود دنیایی که در آن زندگی می‌کند ممکن است واقعیت واقعی نباشد.",
    image:
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    id: 8,
    title: "جزیره شاتر",
    genre: "معمایی",
    year: 2010,
    rating: 8.2,
    description:
      "یک مأمور برای بررسی ناپدید شدن بیماری از یک بیمارستان روانی به جزیره‌ای دورافتاده می‌رود.",
    image:
      "https://image.tmdb.org/t/p/w500/nrmXQ0zcZUL8jFLrakWc90IR8z.jpg",
  },
  {
    id: 9,
    title: "گلادیاتور",
    genre: "اکشن",
    year: 2000,
    rating: 8.5,
    description:
      "یک فرمانده رومی پس از خیانت و از دست دادن خانواده‌اش به مبارزی در میدان نبرد تبدیل می‌شود.",
    image:
      "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
  },
  {
    id: 10,
    title: "نجات سرباز رایان",
    genre: "جنگی",
    year: 1998,
    rating: 8.6,
    description:
      "گروهی از سربازان در جریان جنگ جهانی دوم مأمور می‌شوند یک سرباز را پیدا کرده و به خانه بازگردانند.",
    image:
      "https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV.jpg",
  },
  {
    id: 11,
    title: "شلاق",
    genre: "درام",
    year: 2014,
    rating: 8.5,
    description:
      "یک نوازنده جوان برای رسیدن به سطح حرفه‌ای با استادی سختگیر و روش‌های آموزشی افراطی روبه‌رو می‌شود.",
    image:
      "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCr7gJr.jpg",
  },
  {
    id: 12,
    title: "انگل",
    genre: "هیجانی",
    year: 2019,
    rating: 8.5,
    description:
      "یک خانواده فقیر به‌تدریج وارد زندگی یک خانواده ثروتمند می‌شوند و اتفاقات غیرمنتظره‌ای رخ می‌دهد.",
    image:
      "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
  },
  {
    id: 13,
    title: "زندگی زیباست",
    genre: "درام",
    year: 1997,
    rating: 8.6,
    description:
      "پدری در شرایط سخت جنگ تلاش می‌کند با استفاده از تخیل خود از فرزندش محافظت کند.",
    image:
      "https://image.tmdb.org/t/p/w500/74hLDKjD5aGYOotO6esUVaeISa2.jpg",
  },
  {
    id: 14,
    title: "حیثیت",
    genre: "معمایی",
    year: 2006,
    rating: 8.5,
    description:
      "رقابت دو شعبده‌باز به دشمنی شدیدی تبدیل می‌شود و هرکدام تلاش می‌کند راز دیگری را کشف کند.",
    image:
      "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg",
  },
  {
    id: 15,
    title: "وال-ای",
    genre: "انیمیشن",
    year: 2008,
    rating: 8.4,
    description:
      "یک ربات کوچک که وظیفه جمع‌آوری زباله‌ها را دارد، با پیدا شدن رباتی جدید وارد ماجرایی بزرگ می‌شود.",
    image:
      "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
  },
  {
    id: 16,
    title: "بالا",
    genre: "انیمیشن",
    year: 2009,
    rating: 8.3,
    description:
      "پیرمردی خانه خود را با هزاران بادکنک به پرواز درمی‌آورد تا به رؤیای قدیمی خود برسد.",
    image:
      "https://image.tmdb.org/t/p/w500/mFvoEwSfLqbcWwC7mH8v2hY8.jpg",
  },
  {
    id: 17,
    title: "تلماسه",
    genre: "علمی تخیلی",
    year: 2021,
    rating: 8.0,
    description:
      "پاول آتریدس همراه خانواده‌اش به سیاره‌ای بیابانی سفر می‌کند؛ جایی که سرنوشت او با آینده یک جهان گره می‌خورد.",
    image:
      "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  },
  {
    id: 18,
    title: "رستگاری در شاوشنک",
    genre: "درام",
    year: 1994,
    rating: 9.3,
    description:
      "مردی که به اشتباه به حبس ابد محکوم شده، در زندان تلاش می‌کند امید خود را حفظ کند.",
    image:
      "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  },
  {
    id: 19,
    title: "مایل سبز",
    genre: "درام",
    year: 1999,
    rating: 8.5,
    description:
      "نگهبان یک زندان با زندانی عجیبی روبه‌رو می‌شود که توانایی خارق‌العاده‌ای دارد.",
    image:
      "https://image.tmdb.org/t/p/w500/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
  },
  {
    id: 20,
    title: "ارباب حلقه‌ها",
    genre: "فانتزی",
    year: 2001,
    rating: 8.8,
    description:
      "یک هابیت جوان مأمور می‌شود حلقه‌ای قدرتمند را برای نابودی به سرزمین موردور ببرد.",
    image:
      "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
  },
  {
    id: 21,
    title: "شیرشاه",
    genre: "انیمیشن",
    year: 1994,
    rating: 8.5,
    description:
      "شیر جوانی پس از از دست دادن پدرش باید جایگاه واقعی خود را پیدا کند و به سرزمینش بازگردد.",
    image:
      "https://image.tmdb.org/t/p/w500/yDaMQbBfyGzGWKxUsPMxzWVuJlY.jpg",
  },
  {
    id: 22,
    title: "بازگشت به آینده",
    genre: "علمی تخیلی",
    year: 1985,
    rating: 8.3,
    description:
      "نوجوانی با یک ماشین زمان به گذشته سفر می‌کند و ناخواسته آینده خود را تحت تأثیر قرار می‌دهد.",
    image:
      "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
  },
  {
    id: 23,
    title: "گلادیاتور ۲",
    genre: "اکشن",
    year: 2024,
    rating: 6.8,
    description:
      "سال‌ها پس از مرگ ماکسیموس، لوسیوس مجبور می‌شود برای بقا و آینده امپراتوری وارد میدان مبارزه شود.",
    image:
      "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
  },
  {
    id: 24,
    title: "گرین بوک",
    genre: "درام",
    year: 2018,
    rating: 8.2,
    description:
      "یک راننده و یک نوازنده در سفری جاده‌ای با تفاوت‌های فرهنگی و اجتماعی زیادی روبه‌رو می‌شوند.",
    image:
      "https://image.tmdb.org/t/p/w500/7BsvSuDQuoqhWmU2fL3aYjQ7.jpg",
  },
];
```
