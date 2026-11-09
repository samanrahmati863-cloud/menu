# 🦖 COFFEE — QR menu

Animated Persian menu for the dino café, hosted free on GitHub Pages.

- `index.html` — the menu (what customers see after scanning)
- `qr.html` — printable QR card that always points to this site
- `assets/menu-data.js` — **edit items, notes and prices here**
- `assets/menu-print.jpg` — the original printed menu

## Put it online (one time, ~5 min)
1. Create a free account at github.com (if you don't have one).
2. New repository → name it e.g. `menu` → **Public** → Create.
3. On the empty repo page click **uploading an existing file**, drag in *everything inside* this folder (not the folder itself), then **Commit changes**.
4. Repo **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
5. After ~1 minute the menu is live at `https://YOUR-USERNAME.github.io/menu/`.

## Make the QR code
Open `https://YOUR-USERNAME.github.io/menu/qr.html` → **چاپ** (print) or **دانلود SVG** for the designer.
The QR points to the site address, so you never need to reprint it when the menu changes.

## Change prices / items
Open `assets/menu-data.js` on GitHub → pencil icon ✏️ → edit → **Commit changes**.
Example: `{ name: "آمریکانو", price: "۹۵" }`. Live in about a minute.
