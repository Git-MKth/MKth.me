# MKth.me

Persönliche Startseite. Statisches HTML/CSS/JS — kein Build, keine Abhängigkeiten, kein Tracking.

## Dateien

| Datei | Zweck |
| --- | --- |
| `index.html` | Startseite (Hero) |
| `style.css` | Styles über CSS-Variablen (aktuell ungenutzt, war für `legal.html`) |
| `app.js` | Theme-Umschalter (aktuell ungenutzt, war für `legal.html`) |
| `CNAME` | Custom Domain für GitHub Pages (`mkth.me`) |

## Lokal ansehen

```bash
cd ~/Projects/Git-MKth/MKth.me
python3 -m http.server 8777
open http://127.0.0.1:8777/
```

Direktes Öffnen per `open index.html` funktioniert auch, dann greifen nur die
`localStorage`-Pfade des Theme-Umschalters anders.

## Deployment (GitHub Pages)

1. Einstellungen → Pages → Source: `Deploy from a branch`, Branch `main`, Ordner `/ (root)`.
2. Custom Domain `mkth.me` (steht bereits in `CNAME`), `Enforce HTTPS` aktivieren.
3. DNS beim Registrar: `A`-Records auf die GitHub-Pages-IPs
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`;
   `www` als `CNAME` auf `<user>.github.io`.

## Stand 2026-10-26

`legal.html` (Impressum + Datenschutz) ist entfernt und auf der Startseite verlinkt nichts mehr darauf.
Für eine rein private, nicht geschäftsmäßige Seite ist kein Impressum nach § 5 DDG nötig.
Wird die Seite geschäftlich genutzt, muss `legal.html` wiederhergestellt werden (Historie: `git log -- legal.html`).

## Technische Notizen

- Theme: `<html data-theme="auto|light|dark">`. Ein gespeicherter Wert wird per
  Inline-Script im `<head>` vor dem ersten Paint gesetzt (kein Flackern).
  Ohne gespeicherte Wahl folgt die Seite `prefers-color-scheme`.
- Farben, Radien und Abstände liegen als Tokens oben in `style.css`.
- Animationen respektieren `prefers-reduced-motion`.
- Der Hero-Halo fadet auf dieselbe Farbe mit Alpha 0 — nicht auf `transparent`,
  sonst entsteht ein grauer Saum.
