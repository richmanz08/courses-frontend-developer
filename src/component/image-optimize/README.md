# 🖼️ Next.js Image Optimization

## 📚 สารบัญ
1. [ข้อดีของการใช้ Next.js `<Image>`](#ข้อดีของการใช้-nextjs-image)
2. [เปรียบเทียบ `<img>` vs `<Image>`](#เปรียบเทียบ-img-vs-image)
3. [ทำไมต้อง set `remotePatterns` ใน next.config.ts](#ทำไมต้อง-set-remotepatterns)
4. [วิธีการใช้งาน](#วิธีการใช้งาน)
5. [Best Practices](#best-practices)

---

## ✨ ข้อดีของการใช้ Next.js `<Image>`

### 1. 🚀 **Automatic Image Optimization**
- แปลงรูปเป็น **modern formats** (WebP, AVIF) อัตโนมัติ
- Resize รูปตาม device size
- Compress รูปโดยไม่ลดคุณภาพมาก
- Serve รูปที่เหมาะสมกับ screen size

```tsx
// ✅ Next.js จะสร้าง multiple versions อัตโนมัติ
<Image 
  src="/photo.jpg"  // Original: 5MB
  width={800}
  height={600}
  alt="Photo"
/>

// Output:
// - photo-320w.webp   (30KB)   // Mobile
// - photo-640w.webp   (80KB)   // Tablet
// - photo-1024w.webp  (150KB)  // Desktop
// - photo-1920w.webp  (300KB)  // Large screen
```

### 2. ⚡ **Lazy Loading**
- โหลดรูปเมื่อ scroll มาใกล้เท่านั้น (default)
- ประหยัด bandwidth
- Page load เร็วขึ้น

```tsx
// ❌ <img> tag: โหลดทุกรูปทันที
<img src="/image1.jpg" />
<img src="/image2.jpg" />
<img src="/image3.jpg" />
// Total: 15MB โหลดทันที!

// ✅ <Image>: โหลดเมื่อเลื่อนมาใกล้
<Image src="/image1.jpg" width={800} height={600} />
<Image src="/image2.jpg" width={800} height={600} />
<Image src="/image3.jpg" width={800} height={600} />
// โหลดทีละรูปตามความจำเป็น
```

### 3. 🎯 **No Layout Shift (CLS Prevention)**
- กำหนด width/height ไว้ล่วงหน้า
- ป้องกันการ "กระโดด" ของ content
- ปรับปรุง Core Web Vitals

```tsx
// ❌ Layout Shift Problem
<img src="/photo.jpg" />
// Browser ไม่รู้ขนาด → reserve space → รูปโหลด → layout shift!

// ✅ No Layout Shift
<Image 
  src="/photo.jpg" 
  width={800} 
  height={600}  // Browser รู้ขนาดล่วงหน้า
  alt="Photo"
/>
```

### 4. 🔥 **Priority Loading**
- ควบคุมว่ารูปไหนสำคัญ ต้องโหลดก่อน
- ปรับปรุง LCP (Largest Contentful Paint)

```tsx
// ✅ Hero image: โหลดทันที
<Image 
  src="/hero.jpg" 
  width={1920} 
  height={1080}
  priority  // โหลดก่อนรูปอื่น
  alt="Hero"
/>

// ✅ Other images: lazy load
<Image src="/gallery-1.jpg" width={400} height={300} alt="Gallery" />
```

### 5. 📱 **Responsive by Default**
- ปรับขนาดตาม viewport อัตโนมัติ
- ไม่ต้องเขียน media queries เอง

```tsx
<Image 
  src="/banner.jpg"
  width={1920}
  height={400}
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Banner"
/>
// Mobile: โหลดรูปขนาด 768px
// Desktop: โหลดรูปขนาด 960px
```

### 6. 💾 **Built-in Caching**
- Cache รูปที่ optimize แล้ว
- ไม่ต้อง optimize ซ้ำ
- ลด server load

---

## 📊 เปรียบเทียบ `<img>` vs `<Image>`

| Feature | `<img>` | `<Image>` |
|---------|---------|-----------|
| **Optimization** | ❌ ไม่มี | ✅ อัตโนมัติ |
| **Format** | ไฟล์ต้นฉบับ | WebP, AVIF |
| **Lazy Loading** | ❌ ไม่มี | ✅ มี (default) |
| **Responsive** | ต้องเขียนเอง | ✅ อัตโนมัติ |
| **Layout Shift** | ⚠️ มีปัญหา | ✅ ไม่มีปัญหา |
| **Priority** | ❌ ไม่มี | ✅ ตั้งค่าได้ |
| **Cache** | ขึ้นกับ browser | ✅ Built-in |
| **ขนาดไฟล์** | ใหญ่ | ✅ เล็กกว่า 50-70% |
| **Performance** | ⚠️ แย่ | ✅ ดีมาก |

### ตัวอย่างขนาดไฟล์:

```
Original JPEG: 2.5 MB

❌ <img>:
├─ image.jpg     → 2.5 MB (ทุก device)

✅ <Image>:
├─ image-320w.webp   → 45 KB  (Mobile)
├─ image-640w.webp   → 120 KB (Tablet)
├─ image-1024w.webp  → 280 KB (Desktop)
└─ image-1920w.webp  → 550 KB (4K)

💰 ประหยัด bandwidth: 80-90%
```

---

## 🔒 ทำไมต้อง set `remotePatterns` ใน next.config.ts?

### 🎯 เหตุผลหลัก

#### 1. **ความปลอดภัย (Security)**
```tsx
// ❌ ถ้าไม่มี whitelist
// คนอื่นสามารถใช้ server ของคุณโหลดรูปจากไหนก็ได้!

// Hacker สามารถทำแบบนี้:
<img src="https://yoursite.com/_next/image?url=https://evil-site.com/malware.jpg&w=3840" />

// 💥 ผลลัพธ์:
// - Server คุณโหลดไฟล์จาก evil-site.com
// - ใช้ CPU/bandwidth ของคุณ
// - อาจโหลด malware หรือ inappropriate content
// - ไม่สามารถควบคุมได้!
```

#### 2. **ประหยัดค่าใช้จ่าย (Cost Control)**
```
สมมติถูก abuse:

📊 1,000,000 requests/วัน × 2MB/request = 2TB bandwidth
💰 AWS bandwidth: $0.09/GB
💸 ค่าใช้จ่าย: 2,000GB × $0.09 = $180/วัน = $5,400/เดือน

✅ ถ้ามี whitelist:
- เฉพาะ domains ที่อนุญาต
- ควบคุมค่าใช้จ่ายได้
- ประมาณการได้แม่นยำ
```

#### 3. **ป้องกันการโจมตี (DDoS/Abuse Prevention)**
```javascript
// Attack Example:
while(true) {
  // ส่ง request optimize รูปไม่หยุด
  fetch(`/_next/image?url=https://huge-site.com/10mb-${Math.random()}.jpg&w=3840`);
}

// 💥 ผลลัพธ์:
// - Server CPU 100%
// - Memory หมด
// - Website ช้าหรือล่ม
```

#### 4. **Performance & Monitoring**
```typescript
// ✅ มี whitelist:
// - รู้ว่ารูปมาจาก domains ไหนบ้าง
// - Cache ได้มีประสิทธิภาพ
// - Monitor usage ได้ง่าย
// - Optimize CDN routing
```

---

## ⚙️ วิธีการใช้งาน

### 1. **เพิ่ม domains ใน next.config.ts**

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // 1. Public CDN
      {
        protocol: "https",
        hostname: "cdn.example.com",
        pathname: "/**",
      },
      
      // 2. AWS S3
      {
        protocol: "https",
        hostname: "my-bucket.s3.amazonaws.com",
        pathname: "/**",
      },
      
      // 3. All S3 buckets (wildcard)
      {
        protocol: "https",
        hostname: "**.s3.**.amazonaws.com",
        pathname: "/**",
      },
      
      // 4. Specific folder only
      {
        protocol: "https",
        hostname: "images.example.com",
        pathname: "/public/**",  // เฉพาะ /public/*
      },
    ],
  },
};

export default nextConfig;
```

### 2. **ใช้งานใน Component**

```tsx
import Image from "next/image";

export function MyComponent() {
  return (
    <div>
      {/* Local Image */}
      <Image 
        src="/logo.png"  // ไฟล์ใน public/
        width={200}
        height={100}
        alt="Logo"
      />

      {/* Remote Image (ต้องอยู่ใน whitelist) */}
      <Image 
        src="https://cdn.example.com/photo.jpg"
        width={800}
        height={600}
        alt="Photo"
      />

      {/* AWS S3 */}
      <Image 
        src="https://my-bucket.s3.amazonaws.com/images/product.jpg"
        width={600}
        height={600}
        alt="Product"
      />
    </div>
  );
}
```

---

## 🎯 Best Practices

### ✅ **DO:**

```tsx
// 1. ใช้ <Image> แทน <img> เสมอ
import Image from "next/image";
<Image src="/photo.jpg" width={800} height={600} alt="Photo" />

// 2. ระบุ width และ height เสมอ
<Image 
  src="/photo.jpg" 
  width={800}   // ✅
  height={600}  // ✅
  alt="Photo"
/>

// 3. ใช้ priority กับรูปสำคัญ (above the fold)
<Image 
  src="/hero.jpg" 
  width={1920} 
  height={1080}
  priority  // ✅ Hero image
  alt="Hero"
/>

// 4. ใส่ alt text ที่มีความหมาย
<Image 
  src="/product.jpg" 
  width={600} 
  height={600}
  alt="Nike Air Max 2024 - White/Blue"  // ✅ Descriptive
/>

// 5. ใช้ fill กับ container ที่มี position: relative
<div className="relative w-full h-96">
  <Image 
    src="/banner.jpg" 
    fill
    className="object-cover"  // ✅
    alt="Banner"
  />
</div>

// 6. เพิ่มเฉพาะ domains ที่คุณควบคุม
remotePatterns: [
  { 
    protocol: "https", 
    hostname: "your-cdn.com",  // ✅ Your domain
    pathname: "/**" 
  },
]
```

### ❌ **DON'T:**

```tsx
// 1. อย่าใช้ <img> tag ธรรมดา
<img src="/photo.jpg" />  // ❌

// 2. อย่าลืมใส่ width/height
<Image src="/photo.jpg" />  // ❌ Missing dimensions

// 3. อย่าลืมใส่ alt
<Image src="/photo.jpg" width={800} height={600} />  // ❌ Missing alt

// 4. อย่าใช้ priority กับทุกรูป
<Image src="/gallery-50.jpg" priority />  // ❌ ไม่จำเป็น

// 5. อย่าอนุญาตทุก domain
remotePatterns: [
  { protocol: "https", hostname: "**" }  // ❌ อันตราย!
]

// 6. อย่าใช้ HTTP (ใช้ HTTPS เท่านั้น)
remotePatterns: [
  { protocol: "http", hostname: "example.com" }  // ❌ Not secure
]
```

---

## 📐 Responsive Images

```tsx
// 1. Fixed size
<Image src="/photo.jpg" width={800} height={600} alt="Photo" />

// 2. Fill container
<div className="relative w-full h-96">
  <Image 
    src="/photo.jpg" 
    fill
    className="object-cover"
    alt="Photo"
  />
</div>

// 3. Responsive with sizes
<Image 
  src="/photo.jpg"
  width={1200}
  height={800}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt="Photo"
/>
```

---

## 🔥 Loading States

```tsx
// 1. Priority (above the fold) - โหลดทันที
<Image 
  src="/hero.jpg" 
  width={1920} 
  height={1080}
  priority
  alt="Hero"
/>

// 2. Lazy (default) - โหลดเมื่อเลื่อนมาใกล้
<Image 
  src="/gallery.jpg" 
  width={400} 
  height={300}
  alt="Gallery"
/>

// 3. Placeholder blur
<Image 
  src="/photo.jpg" 
  width={800} 
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  alt="Photo"
/>
```

---

## 🎨 Object Fit

```tsx
// Cover: เต็ม container (อาจครอป)
<Image 
  src="/photo.jpg" 
  fill
  className="object-cover"
  alt="Cover"
/>

// Contain: ไม่ครอป แต่อาจมีพื้นที่ว่าง
<Image 
  src="/photo.jpg" 
  fill
  className="object-contain"
  alt="Contain"
/>

// Fill: ยืดเต็ม (อาจบิดเบี้ยว)
<Image 
  src="/photo.jpg" 
  fill
  className="object-fill"
  alt="Fill"
/>
```

---

## 📊 Configuration Options

```typescript
// next.config.ts
export default {
  images: {
    // Allowed domains
    remotePatterns: [...],
    
    // Image formats (ordered by preference)
    formats: ['image/avif', 'image/webp'],
    
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // Image sizes for srcset
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Minimum cache time (seconds)
    minimumCacheTTL: 60,
    
    // Disable static imports optimization
    disableStaticImages: false,
    
    // Allowed image sizes
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
```

---

## 🚀 Performance Tips

### 1. **Optimize Image Size**
```bash
# ก่อนอัปโหลด:
# - Resize ให้เหมาะสม (ไม่ต้องใช้ 4K สำหรับ thumbnail)
# - Compress ด้วย tools (TinyPNG, ImageOptim)
# - เลือก format ที่เหมาะสม (JPEG, PNG, WebP)
```

### 2. **Use Priority Wisely**
```tsx
// ✅ เฉพาะ 1-2 รูปต่อหน้า
<Image src="/hero.jpg" priority />

// ❌ อย่าใช้กับทุกรูป
<Image src="/gallery-1.jpg" priority />  // ❌
<Image src="/gallery-2.jpg" priority />  // ❌
<Image src="/gallery-3.jpg" priority />  // ❌
```

### 3. **Lazy Load Below the Fold**
```tsx
// Above the fold
<Image src="/hero.jpg" priority />

// Below the fold (ไม่ต้องใส่ priority)
<Image src="/content-1.jpg" />
<Image src="/content-2.jpg" />
```

---

## 📝 สรุป

### **ทำไมต้องใช้ Next.js `<Image>`:**
1. ✅ **Performance** - เร็วกว่า 50-70%
2. ✅ **SEO** - Core Web Vitals ดีขึ้น
3. ✅ **UX** - ไม่มี layout shift
4. ✅ **Cost** - ประหยัด bandwidth
5. ✅ **Automatic** - ไม่ต้องทำอะไรมาก

### **ทำไมต้อง set remotePatterns:**
1. 🔒 **Security** - ป้องกัน abuse
2. 💰 **Cost Control** - ควบคุมค่าใช้จ่าย
3. 🛡️ **Protection** - ป้องกันการโจมตี
4. ⚡ **Performance** - Optimize cache

### **Migration Path:**
```tsx
// Before
<img src="https://example.com/photo.jpg" alt="Photo" />

// After
// 1. เพิ่ม domain ใน next.config.ts
// 2. เปลี่ยนเป็น Image component
<Image 
  src="https://example.com/photo.jpg" 
  width={800} 
  height={600}
  alt="Photo"
/>
```

---

## 🔗 References

- [Next.js Image Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Core Web Vitals](https://web.dev/vitals/)
- [Image Optimization Best Practices](https://web.dev/fast/#optimize-your-images)

---

**สร้างเมื่อ:** 20 มกราคม 2569  
**Component:** `/src/component/image-optimize/`
