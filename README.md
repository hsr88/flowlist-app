# ⚡ FlowList

> **Zarządzaj energią, nie czasem.**
> Minimalistyczny planer zadań typu PWA, który pomaga wejść w stan głębokiego skupienia (Flow).

![FlowList Banner](public/icon.png)

## 📖 O projekcie

**FlowList** to nie jest kolejna zwykła lista to-do. To narzędzie zaprojektowane, aby walczyć z prokrastynacją i paraliżem decyzyjnym. Zamiast planować każdą minutę, użytkownik zarządza swoją **energią**.

Aplikacja działa w modelu **Local-First / Cloud Sync** – można z niej korzystać jako gość (offline, LocalStorage) lub założyć konto, aby synchronizować dane między urządzeniami (Supabase).

🔗 **Live Demo:** [https://app.flowlist.one](https://app.flowlist.one)
🌐 **Landing Page:** [https://flowlist.one](https://flowlist.one)

---

## 🔥 Kluczowe Funkcje

### 🧠 Zarządzanie Energią
Zadania nie mają dat (chyba że chcesz), mają "wagę energetyczną":
* 🟦 **Low Energy:** Małe zadania (np. odpisać na e-mail).
* 🟩 **Medium Energy:** Standardowa praca.
* 🟥 **High Energy:** Wymagające projekty.

### 🍅 Flow Mode (Tryb Skupienia)
Specjalny tryb, który odcina rozpraszacze:
* Wbudowany **Timer Pomodoro** (25m / 5m).
* **Soundscapes:** Generator szumów w tle (Deszcz, Kawiarnia, Ogień, Fale).
* **Screen Wake Lock:** Blokada wygaszania ekranu na telefonie podczas pracy.

### ✨ AI Breakdown
Integracja z **OpenAI**. Jeśli zadanie jest zbyt duże i przytłaczające (oznaczone kolorem czerwonym), jedno kliknięcie "Rozbij z AI" dzieli je na 3-5 małych, wykonalnych kroków.

### 🔄 Rutyny (Nawyki)
System definiowania folderów z nawykami (np. "Poranny Rozruch"). Aplikacja automatycznie dodaje zestaw zadań do listy w wybrane dni tygodnia.

### 📱 PWA & Offline First
* Aplikacja jest instalowalna na telefonie (Progressive Web App).
* Działa w trybie **Gościa** (zapis w `localStorage`).
* Po zalogowaniu synchronizuje dane z chmurą (**Supabase**).

---

## 🛠️ Tech Stack

* **Frontend:** [Svelte](https://svelte.dev/) + [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Backend / DB:** [Supabase](https://supabase.com/) (PostgreSQL + Auth)
* **AI:** OpenAI API (przez Vercel Serverless Functions)
* **Deployment:** [Vercel](https://vercel.com/)

---

📄 Licencja

Projekt stworzony przez [Krystian Welcel](htttps://hsr.in.net). Wszelkie prawa zastrzeżone. Kontakt: haser88@gmail.com
