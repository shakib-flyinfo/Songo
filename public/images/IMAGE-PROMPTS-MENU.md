# SHONGO — বাকি ১১টি মেনু আইটেমের এআই প্রম্পট

আগের `IMAGE-PROMPTS.md` এর মতোই ব্যবহার করো। প্রতিটি প্রম্পটের **শুরুতে** এই স্টাইল লাইন জুড়ে দাও, যাতে আগের ছবিগুলোর সাথে মিলে যায়:

```
Professional editorial food photography, soft natural window light, warm cream, copper and terracotta color palette, realistic textures, shallow depth of field, high-end restaurant branding, ultra detailed, no text, no watermark, no logo
```

**সবার জন্য:** সাইজ স্কোয়ার (1:1), ১২০০×১২০০+ । ডিশ ছবির মাঝখানে রাখো (সাইটে কখনো স্কোয়ার, কখনো 4:3 কেটে দেখায়)। প্রতিটি ২–৪ বার চালিয়ে সেরাটা নাও।

ফাইলগুলো `public/images/menu/` এ **ঠিক এই নামে** রাখো। না রাখলে এখনকার সাময়িক ছবি দেখাবে, রাখলেই বদলে যাবে।

---

## স্টার্টার ও মেইন

### ১. Bhorta & Starters — `bhorta-starters.jpg`
```
Top-down shot of an assorted Bengali starters platter on a round dark ceramic plate: three hand-mashed bhorta balls (shutki bhorta, begun bhorta, potato bhorta) garnished with chopped coriander and green chili, crispy golden begun bhaja slices and small fried fritters, a lime wedge on the side, rustic dark slate surface
```

### ২. Beef Rezala — `beef-rezala.jpg`
```
Top-down shot of Beef Rezala, a Bengali pale creamy-white rich gravy with tender beef pieces, whole green chilies, cardamom pods and a drizzle of ghee on top, served in a round white ceramic bowl, with a small side of plain white rice, light marble surface
```

### ৩. Chicken Roast — `chicken-roast.jpg`
```
Top-down shot of Bengali-style Chicken Roast, glossy caramelized golden-brown chicken pieces in a rich gravy with a halved boiled egg and fried onions, served on a cream ceramic plate, copper spoon at the edge, warm light
```

### ৪. Rui Kalia — `rui-kalia.jpg`
```
Top-down shot of Rui Kalia, rohu fish steaks in a thick rich reddish-orange spiced gravy with ginger and onion paste, a few whole green chilies on top, served in a deep copper-rimmed bowl, wooden table
```

## বিরিয়ানি ও পোলাও

### ৫. Foto Pulao — `foto-pulao.jpg`
```
Top-down shot of fragrant Bengali white pulao (polao), fluffy basmati rice with ghee, whole spices (cardamom, cinnamon, bay leaf), golden fried onions and cashew nuts on top, served in a round cream ceramic bowl, light linen cloth, soft steam
```

### ৬. Tehari — `tehari.jpg`
```
Top-down shot of Dhaka-style beef Tehari, aromatic golden-yellow rice with tender beef pieces, a boiled egg half, green chilies and fresh coriander, served on a dark round plate, a small bowl of salad (onion, cucumber, lemon) beside it, rustic background
```

## ঐতিহ্যবাহী মিষ্টি

### ৭. Rasmalai — `rasmalai.jpg`
```
Top-down shot of Rasmalai, soft white flattened cheese discs soaking in creamy saffron-colored thickened milk, topped with chopped pistachios and a few saffron strands, served in a shallow white ceramic bowl, pale cream background
```

### ৮. Payesh — `payesh.jpg`
```
Top-down shot of Bengali Payesh, creamy rice pudding made with milk and gobindobhog rice, garnished with raisins, slivered almonds and a bay leaf, served in a small brass or white bowl, warm golden tones, wooden surface
```

## বোটানিক্যাল ড্রিঙ্কস

### ৯. Sylheti Seven-Layer Tea — `sylheti-seven-layer-tea.jpg`
```
Side view close-up of a tall clear glass of Sylheti seven-layer tea showing seven distinct horizontal layers in shades of brown, amber, orange and cream, on a small wooden tray, tea leaves scattered beside it, blurred green tea-garden background, soft morning light
```

### ১০. Borhani — `borhani.jpg`
```
Side view of a glass of Bengali Borhani, a spiced yogurt drink in creamy pale beige with specks of mint and black salt, garnished with a fresh mint sprig, condensation on the glass, light wooden table, blurred background
```

### ১১. Lebu Pani — `lebu-pani.jpg`
```
Side view of a glass of fresh Lebu Pani (Bengali lemonade) with ice cubes, lemon slices and fresh mint leaves, a green lemon (gondhoraj lime) beside it on a light marble surface, bright refreshing light, condensation on glass
```

---

## সমস্যা হলে
- বাংলাদেশি ডিশ ভুল আসলে প্রম্পটের শুরুতে "authentic Bangladeshi" যোগ করো, বা ডিশের বর্ণনা আরও বিস্তারিত দাও।
- ছবি পাওয়ার পর `npm run check:images` চালিয়ে দেখো সব নাম মিলেছে কিনা। এক্সটেনশন আলাদা হলে `npm run check:images -- --fix` ঠিক করে দেবে।
