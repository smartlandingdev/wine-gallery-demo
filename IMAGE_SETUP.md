# 🍷 Wine Store - Image Setup Guide

## How to Add Your Own Wine Images

All image paths have been updated to use local files instead of external URLs. Here's how to add your own wine store images:

## 📁 Folder Structure

```
public/
├── images/
    ├── hero-background.jpg          # Header background (wine cellar)
    ├── story-cellar.jpg            # Story section image
    ├── video-thumbnail.jpg         # Video section thumbnail
    ├── gallery/                    # Wine collection images
    │   ├── wine1.jpg
    │   ├── wine2.jpg
    │   ├── wine3.jpg
    │   ├── wine4.jpg
    │   ├── wine5.jpg
    │   └── wine6.jpg
    ├── blog/                       # Blog article images
    │   ├── wine-pairing.jpg
    │   ├── wine-storage.jpg
    │   └── wine-regions.jpg
    └── partners/                   # Winery logos
        ├── chateau-margaux.png
        ├── antinori.png
        ├── opus-one.png
        ├── dom-perignon.png
        ├── caymus.png
        └── barolo.png
```

## 🖼️ Required Images & Recommended Sizes

### Main Images
- **hero-background.jpg** (2000x1200px) - Wine cellar or vineyard background
- **story-cellar.jpg** (800x600px) - Professional wine cellar photo
- **video-thumbnail.jpg** (1200x675px) - Wine cellar or vineyard for video

### Gallery Images (400x600px each)
- **wine1.jpg** - Château Margaux bottle
- **wine2.jpg** - Barolo wine bottle
- **wine3.jpg** - Cabernet Sauvignon bottle
- **wine4.jpg** - Champagne bottle
- **wine5.jpg** - Premium red wine bottle
- **wine6.jpg** - Italian wine bottle

### Blog Images (400x300px each)
- **wine-pairing.jpg** - Wine and food pairing scene
- **wine-storage.jpg** - Wine storage/cellar
- **wine-regions.jpg** - Vineyard landscape

### Partner Logos (150x80px each)
- **chateau-margaux.png** - Château Margaux logo
- **antinori.png** - Antinori winery logo
- **opus-one.png** - Opus One logo
- **dom-perignon.png** - Dom Pérignon logo
- **caymus.png** - Caymus logo
- **barolo.png** - Barolo region logo

## 📝 Quick Setup Steps

1. **Create the folders** (already done):
   ```bash
   mkdir -p public/images/gallery
   mkdir -p public/images/blog
   mkdir -p public/images/partners
   ```

2. **Add your images** to the appropriate folders with the exact filenames shown above

3. **Test the site** - Images will automatically appear once files are added

## 🔄 Alternative: Change Image Names

If you prefer different filenames, update the paths in these files:

- **Gallery**: `src/components/Gallery.tsx` (lines 10, 16, 22, 28, 34, 40)
- **Header**: `src/components/Header.tsx` (line 15)
- **Story**: `src/components/Story.tsx` (line 33)
- **Blog**: `src/components/Blog.tsx` (lines 11, 18, 25)
- **Partners**: `src/components/Partners.tsx` (lines 10, 15, 20, 25, 30, 35)
- **Video**: `src/components/Video.tsx` (line 28)

## 📸 Image Tips

- Use **high-quality** wine photography
- Ensure **consistent lighting** across gallery images
- **Optimize** images for web (compress to reduce file size)
- Use **professional** wine bottle photography
- For logos, use **transparent PNG** files when possible

## 🚀 Ready to Go!

Once you add your images to the `public/images/` folders, they'll automatically appear on your wine store website!