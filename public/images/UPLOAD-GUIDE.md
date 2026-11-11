# ছবি ও লোগো বসানোর গাইড

ফাইলগুলো **একই নামে** নিচের ফোল্ডারে রাখলেই বসে যাবে (বর্তমান ছবিগুলো ডিজাইন থেকে ক্রপ করা সাময়িক ছবি, নতুন ফাইল দিলে বদলে যাবে)।
অন্য নাম বা অনলাইন লিংক ব্যবহার করতে চাইলে `src/data/images.ts` এ পাথ/URL বদলাও।

| ফাইল | কোথায় দেখায় | সাইজ |
|---|---|---|
| `hero/hero-scene.jpg` | Hero ডানদিকের পুরো ছবি (ডিশ+পাত্র) | ১৪০০×১৩০০+ |
| `hero/hero-dish.png` | শুধু ইলিশের প্লেট (কাটআউট, ট্রান্সপারেন্ট) | ১০০০×১০০০+ |
| `hero/hero-bowl-top.png`, `hero-copper-pot.png`, `hero-copper-spoon.png`, `hero-bread.png` | Hero সাজানোর কাটআউট (এখন ব্যবহার হয় না) | — |
| `about/interior.jpg` | About ডানের বড় ছবি | ১২০০×১২০০+ |
| `about/chef.jpg` | About বামে ছোট ছবি ১ | ৯০০×৭০০+ |
| `about/plating.jpg` | About বামে ছোট ছবি ২ | ৯০০×৭০০+ |
| `menu/kacchi-biryani.jpg` | Showcase + মেনু | ৮০০×৮০০+ |
| `menu/shorshe-ilish.jpg` | Showcase + মেনু | ৮০০×৮০০+ |
| `menu/bhorta-platter.jpg` | Showcase + মেনু | ৮০০×৮০০+ |
| `menu/chotpoti.jpg` | Showcase + মেনু | ৮০০×৮০০+ |
| `menu/chingri-malaikari.jpg` | মেনু | ৮০০×৮০০+ |
| `menu/mishti-doi.jpg` | মেনু | ৮০০×৮০০+ |
| `reservation/family-dining.jpg` | Experience SHONGO এর ডানের ছবি | ১০০০×১০০০+ |

## লোগো ও সাজসজ্জা (`public/icons/`)
- `logo.svg`, `award-laurel.svg`, `pattern-jali.svg` — এখন বিল্ট-ইন রূপে বসানো, নিজের ফাইল দিয়ে বদলাও
- `public/favicon.ico` — ফেভিকন
- `logo-full.svg` — পুরো লোগো (আইকন+লেখা), দিলে `images.logo.full` এ বসাও
- `logo.svg` — শুধু "S" আইকন, `images.logo.mark` এ বসাও
- `pattern-jali.svg` — কোণার প্যাটার্ন, `images.decor.pattern` এ বসাও
- ফেভিকন: `src/app/icon.png` (বা `favicon.ico`) রাখলে Next নিজেই নেবে

## চেক করতে
```bash
npm run check:images
```
