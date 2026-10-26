"use strict";

/* ==========================================================================
   ДАННЫЕ ПЕСЕН
   Чтобы добавить песню, скопируйте любой блок в SONGS и заполните поля:
   id (латиницей, уникальный), title, lang ("ru" | "kk" | "kk+ru"),
   key (необязательно), note (необязательно), noText: true (только аккорды),
   text (текст; аккорды можно писать строкой над текстом, как в заметках).
   Разделы "Куплет", "Припев", "Бридж", "Вставка", "Вступление", "Қайырмасы"
   распознаются автоматически.
   ========================================================================== */
const SONGS = [
{ id: "ar-kunde", title: "Әр күнде Иса маған қажетсің", lang: "kk+ru", key: "D", text: `
Әр күнде Иса маған қажетсің
Әрбір сәтте өмірімде
Киелі Сенің қасында
Болғым келеді
Құшағыңа мені алшы

Тәңірім сені мадақтамын
Жүзінді ансамын
Сен жалғыс Сен маған кажетсін
Әр күнде мен табынамын
Өзінді арнаймын
Сен жалғыс Сен маған кажетсін

Каждый день в Тебе Иисус нуждаюсь
Вся жизнь моя лишь для Тебя
В Твоих объятиях мой Господь жажду быть вечность
О Дух Святой коснись меня

Хвала Тебе Господь Ты Святый
Быть хочу с Тобою рядом
Ты только Ты достоин славы
Каждый день я поклоняюсь
Лишь в Тебе нуждаюсь
Ты только Ты достоин славы` },

{ id: "rahmet", title: "Рахмет Саган Кудай", lang: "kk", text: `
Рахмет Саган Кудай
Рахмет Саган Кудай
Рахмет О Кудай Ием
Иса ушен Рахмет

Рахмет Саган Кудай
Рахмет Саган Кудай
Рахмет О Кудай Ием
Иса ушен Рахмет

Енди менен Кушим бар.
Менен байлыгым бар.
Мен ушен Иса Алемге келди .
Рахмет .` },

{ id: "kudai-zharylkagan", title: "Құдай жарылқаған адам ізгі", lang: "kk", text: `
1 куплет
Құдай жарылқаған адам ізгі
Иені терең қастерлейді
Құдайдың Сөзіне ол құлақ салады

Иені таныған ол бақытты
Жақын адамға дем береді
Бірін-бірі баталап осы әнді айтады

Қайырмасы
Жаратқан Ием сені жарылқап
Аман есен сақтай гөрсін
Иеміз саған жүзінен нұрын
Шашып рахымын төге көрсін
Иеміз саған жылы жүзбен қарап
Амандық пен тыныштық сыйлай берсін

Куплет2
Уа Жаратқан Ие Ол мейірімді
Оның шексіз салтанаты
Істері керемет құдіреті күшті

Иемізбен бірге жүрген адам
Ол жақсылыққа бай болады
Ән айтып жарылқайды әрбір адамды` },

{ id: "tolko-ty-gospod", title: "Только Ты Господь", lang: "ru", note: "Фрагмент", text: `
Только Ты Господь

Наш Бог благ и милостив

Колымы коке жайып` },

{ id: "men-sagan-olen-aitam", title: "Мен Саған өлең айтам", lang: "kk", text: `
Мен Саған өлең айтам
Тәңір Саған табынам
Саған мәңгі ризамын
Құтқарғанына қуанам

Көктен жерге келдің
Шын өмір беру үшін
Қасиетті қаныңды төктің
Құнымды төледің
Өлімнен Сен құтқардың
Көкке көтерілдің
Атыңды мен көтерем` },

{ id: "alleluia-zhivoy", title: "Аллилуйя Иисус Живой", lang: "ru", note: "Фрагмент", text: `
Аллилуйя Иисус Живой` },

{ id: "lyublyu-tebya", title: "Люблю Тебя! Бесконечна Твоя милость", lang: "ru", text: `
1 КУПЛЕТ
Люблю Тебя! Бесконечна Твоя милость!
Во все дни держишь за руку меня
Воспеваю Твою благость
С утра когда встаю.
И до ночи о Тебе, Бог, пою!

ПРИПЕВ:
Всю жизнь мою Ты был так верен!
Во все года Ты был так благ ко мне
О Твоей благости, Господь мой,
Я буду петь во все дни на земле

2 КУПЛЕТ:
Твой голос, Бог, проводил меня сквозь пламя!
Среди тьмы ночной — Ты со мною, Бог, Ты рядом!
Я знаю, Ты — Отец мой
Я знаю, Ты — мой Друг
В Твоей любви каждый день я живу!

БРИДЖ:
Во всем Твоя благость, Бог,
Идёт всегда со мной!
Во всем Твоя благость, Бог
Идёт всегда со мной!
Полагаю жизнь я у ног Твоих
Я весь навеки Твой.
Во всем Твоя благость, Бог,
Идёт всегда со мной!` },

{ id: "hochu-byt-blizhe", title: "Хочу я быть ближе", lang: "ru", key: "A", text: `
Куплет:
Хочу я быть ближе, ближе к Тебе
Пусть Небо реальностью станет моей
Хочу я услышать песни небес
Где ангелы вторят

Припев:
Аллилуйя, Святой, Святой
Всемогущий, Ты велик
Кто достоин? Кто сравнится
С Тобою Царь наш, Ты велик
Ты велик

Бридж:
Как воск растают горы перед Лицом Его
Силы тьмы трепещут перед Именем Того
Кто вознесён над всеми, Кто умер, но воскрес
Кто сможет устоять перед Его величием
Величием, величием.` },

{ id: "vsem-serdtsem", title: "Всем сердцем жажду я", lang: "ru", key: "Am", text: `
1 куплет:
Здесь не будет шоу, слов пустых не нужно.
Пусть звучит Тебе хвала.
Не стремлюсь я в песне окунуться в чувства.
Я пою лишь для Тебя!

Припев:
Всем сердцем жажду я. Если петь, то для Тебя,
Петь всей силой для Царя.
Я не могу найти никаких других причин
Лишь Тебя превозносить.

2 куплет:
Возжелал Ты сердце вместо совершенства.
Всё, что есть, Тебе отдам.
Ценнее всех песен недолговечных страстного сердца поклонение.
Пусть моя песня звучит лишь с целью - ведь Ты достоин славы всей, Бог!` },

{ id: "holy-forever", title: "Holy forever (Святый вовеки)", lang: "ru", key: "F", text: `
1 куплет:
Тысячи спасённых, преклонясь у трона,
Песню Агнцу вечную поют.
Всех времён святые,
Кто был и кто придет,
Там песню Агнцу вечную споют.

Вставка:
Твоё имя славно,
Твоё имя чудно,
Твоё имя выше всех
Царей и престолов,
Властей и правительств,
Твоё имя выше всех!

Припев:
Небеса поют: "Святый!"
Вся земля поёт: "Святый!"
Ты превознесён, Святый!
Святый вовеки!
Мы тебе поём: "Святый!"
Чудный Царь царей, Святый!
Бесконечно Ты Святый,
Святый вовеки!

2 куплет:
Если ты искуплен,
Если ты прощён,
Песню славы Агнцу вечно пой!
Пой, освобожденный,
Ты Им усыновлен!
Песню славы Агнцу вечно пой!
Возвысим в песне вечной голос свой!` },

{ id: "yahweh-manifest", title: "Яхве Манифест", lang: "ru", text: `
C D H E
C D E
Когда думаю о Боге -F-
F -C/Em Am7- Dm7 -Cm7 F7 Bb- F/A Gm  C
C.                      G.        Dm.              Am
Мы на мгновение, Ты тот Кто вечен
F.                 C/E.      Bb.               G
Бог от начала, прежде времён
C.                 G.           Dm.           Am
Мы дуновение, а Ты бесконечен
F.                        C/E.     Bb.          G
Любовью навеки превознесён

Am.              F.           C.          G
Святый Святый, Бог Всемогущий
Am.           F.           C.          G
Достоин Агнец закланный
Am.             F.          C.                     G
Хвала, величие, честь , поклонение
Dm.    Am        G.   Dm.  Am      G
Имени Твоему, Имени Твоему
Мы те кто разбиты, Ты наш Целитель
Иисус Искупитель, сильный спасать
Ты песня сердца, Мы будем петь вечно
Имя Иисуса благословлять` },

{ id: "zemlya-vsya-polna", title: "Земля вся полна Твоей славы", lang: "ru", note: "Темп 82", text: `
Вступление
Am Dm/F  C Em

Am
Народы, царства на земле,
но Ты Господь превыше всех
F.                  C.  G
Царствуй Иисус
Am
Мир принадлежит Тебе
Всё что в нём, в Твоей руке
F.                  C.   G
Царствуй Иисус

             C/E.                       F.                  G
Мы поём ,,да придет Царство Твоё
Мы моём что Твоё Царство придёт

           F.     C.         Am.            G
Земля вся полна Твоей славы
      F.    C.       Am.           G
И небо возносит хвалу
        F.     C.        Am.             G
Тебя всё творение прославит
      F.             G.      Am
Святой Святой Бог
       F.          G.        Am. (C)
Святой Святой Бог

Ты Бог в славе, сильный Ты
Своим светом истины нас озари
Как водой полны моря, так наполнит пусть меня, слава Твоя

Вставка
Am
Святой Святой Бог Всемогущий
Dm/F
Святой Святой, вся земля поёт, что
C
Ты один достоин, только Ты достоин
Em
И всё творение пред Твои лицём падёт

Выход со встаки все играют ноты
Ля Си До Ре` },

{ id: "ne-zabudu", title: "Не забуду я никогда ( о этот день..)", lang: "ru", noText: true, text: `
k: A D F#m D
A D F#m D E

p: A D F#m E
C#m D F#m E -4

vs: F#m C#m D     |A E|` },

{ id: "ty-bog-znayuschiy", title: "Ты Бог, знающий все сердца", lang: "ru", noText: true, text: `
-G-
G D Em C` },

{ id: "cherez-tvoy-krest", title: "Через Твой крест оплачен долг", lang: "ru", noText: true, text: `
-F-
k: F Dm Bb
F Dm Bb Dm C

p: F C Dm Bb

vs: Gm Dm F C` },

{ id: "drugom-menya-nazval", title: "Другом меня назвал", lang: "ru", noText: true, text: `
-C-
p: C Am Dm C

k: C Am Dm C
C Am Dm Hb

vs: F C/E Dm C` },

{ id: "doveryat-budu", title: "Доверять буду я Тебе", lang: "ru", noText: true, text: `
-A-
k: A F#m  Hm D

p: A E F#m D

vs: D E F#m
D E F# m E /G#` },

{ id: "v-prisutstvii", title: "В присутствии Твоём", lang: "ru", noText: true, text: `
-Am-
Am F C G/H` },

{ id: "lyubov-tvoya-bozhe", title: "Любовь Твоя Боже", lang: "ru", noText: true, text: `
-G-
k: G D Em C (4 раза)

p: G D Em C
G D C

vs: Em D C` }
];

/* ==========================================================================
   АККОРДЫ: распознавание и транспонирование
   Нестандартные записи (H, Hb, Hm, G/H, C/Em) не изменяются.
   ========================================================================== */
const SEC_RE = /^\s*(?:\d+\s*)?(?:куплет|припев|бридж|вставка|вступление|қайырмасы)\s*\d*\s*:?\s*$/i;
const QUAL_RE = /^(?:maj|min|dim|aug|sus|add|m|M|\d+|\+)*$/;
const CHORD_RE = /^(?:([A-H])([#b]?)([^/]*))?(?:\/([A-H])([#b]?)([^/]*))?$/;
const SHARPS = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const FLATS = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const NATURAL = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

function splitToken(raw) {
  const m = raw.match(/^([|(\-]*)(.*?)([|).\-:,]*)$/);
  return { pre: m[1], core: m[2], post: m[3] };
}

function chordInfo(core) {
  if (!core) return null;
  const m = core.match(CHORD_RE);
  if (!m) return null;
  const [, r, a, q, b, ba, bq] = m;
  if (!r && !b) return null;
  if (r && !QUAL_RE.test(q)) return null;
  if (!r && q) return null;
  if (b && !QUAL_RE.test(bq || "")) return null;
  return { r, a, q: q || "", b, ba, bq: bq || "" };
}

/* "chord" | "label" | "decor" | null */
function tokenKind(raw) {
  if (/^(k|p|vs):$/i.test(raw)) return "label";
  if (/^(?:[-–]?\d+|\(\d+|раза?\)|m)$/.test(raw)) return "decor";
  return chordInfo(splitToken(raw).core) ? "chord" : null;
}

function isChordLine(line) {
  const toks = line.match(/\S+/g);
  if (!toks) return false;
  const kinds = toks.map(tokenKind);
  return kinds.every(Boolean) && kinds.includes("chord");
}

function noteName(letter, acc, shift, flats) {
  const base = NATURAL[letter] + (acc === "#" ? 1 : acc === "b" ? -1 : 0);
  return (flats ? FLATS : SHARPS)[(((base + shift) % 12) + 12) % 12];
}

/* Возвращает { text, amb }. amb = аккорд неоднозначен и не трогается. */
function transposeToken(raw, shift, flats) {
  const { pre, core, post } = splitToken(raw);
  const c = chordInfo(core);
  if (!c) return { text: raw, amb: false };
  if (c.r === "H" || c.b === "H" || c.bq) return { text: raw, amb: true };
  if (!shift) return { text: raw, amb: false };
  let out = "";
  if (c.r) out += noteName(c.r, c.a, shift, flats) + c.q;
  if (c.b) out += "/" + noteName(c.b, c.ba, shift, flats);
  return { text: pre + out + post, amb: false };
}

function parseSong(text) {
  const lines = text.replace(/\r/g, "").split("\n");
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (!l.trim()) {
      if (out.length && out[out.length - 1].t !== "blank") out.push({ t: "blank" });
    } else if (SEC_RE.test(l)) {
      out.push({ t: "sec", s: l.trim().replace(/:$/, "") });
    } else if (isChordLine(l)) {
      const toks = [...l.matchAll(/\S+/g)].map(m => ({ raw: m[0], i: m.index }));
      const nx = lines[i + 1];
      if (nx !== undefined && nx.trim() && !isChordLine(nx) && !SEC_RE.test(nx)) {
        out.push({ t: "pair", toks, lyr: nx.replace(/\s+$/, "") });
        i++;
      } else out.push({ t: "chords", toks });
    } else out.push({ t: "lyr", s: l.trim() });
  }
  while (out.length && out[out.length - 1].t === "blank") out.pop();
  return out;
}

function usesFlats(blocks) {
  return blocks.some(b => b.toks && b.toks.some(k => {
    const c = chordInfo(splitToken(k.raw).core);
    return c && c.a === "b" && c.r !== "H";
  }));
}

/* ==========================================================================
   Подготовка данных
   ========================================================================== */
const norm = s => s.toLowerCase().replace(/ё/g, "е");
SONGS.forEach((s, n) => {
  s.order = n;
  s.blocks = parseSong(s.text);
  s.hasChords = s.blocks.some(b => b.toks);
  s.flats = usesFlats(s.blocks);
  s.hasAmb = s.blocks.some(b => b.toks && b.toks.some(k => transposeToken(k.raw, 1, false).amb));
  const lyrics = s.blocks.filter(b => b.t === "lyr" || b.t === "pair").map(b => b.s || b.lyr);
  s.preview = lyrics.slice(0, 2).join(" ");
  s.haystack = norm(s.title + " " + lyrics.join(" "));
});

const LANG_LABEL = { ru: "Русский", kk: "Қазақша", "kk+ru": "Қазақша + Русский" };
const FILTERS = [
  { id: "all", label: "Все" },
  { id: "ru", label: "Русский" },
  { id: "kk", label: "Қазақша" },
  { id: "chords", label: "С аккордами" },
  { id: "fav", label: "Избранное" }
];

/* ==========================================================================
   Состояние и хранилище
   ========================================================================== */
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* хранилище недоступно */ } }
};
const state = {
  q: "", filter: "all", sort: "alpha", song: null, shift: 0, scroll: 0,
  fav: new Set(store.get("sc_fav", [])),
  fs: Math.min(34, Math.max(13, store.get("sc_fs", 18)))
};

const $ = id => document.getElementById(id);
const el = {
  catalog: $("catalogView"), songView: $("songView"), grid: $("grid"), chips: $("chips"),
  search: $("searchInput"), clear: $("clearSearch"), sort: $("sortSelect"), info: $("resultInfo"),
  empty: $("empty"), emptyText: $("emptyText"), favCount: $("favCount"), body: $("songBody")
};
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ==========================================================================
   Тема
   ========================================================================== */
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  $("themeBtn").textContent = t === "dark" ? "☀" : "☾";
  $("themeBtn").setAttribute("aria-label", t === "dark" ? "Включить светлую тему" : "Включить тёмную тему");
  document.querySelector('meta[name="theme-color"]').content = t === "dark" ? "#0f141a" : "#f3f5f7";
  store.set("sc_theme", t);
}
setTheme(store.get("sc_theme", window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
$("themeBtn").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));

/* ==========================================================================
   Каталог
   ========================================================================== */
function matches(s) {
  const q = norm(state.q.trim());
  if (q && !q.split(/\s+/).every(w => s.haystack.includes(w))) return false;
  switch (state.filter) {
    case "ru": return s.lang !== "kk";
    case "kk": return s.lang !== "ru";
    case "chords": return s.hasChords;
    case "fav": return state.fav.has(s.id);
    default: return true;
  }
}

function renderChips() {
  el.chips.innerHTML = FILTERS.map(f => {
    const n = SONGS.filter(s => f.id === "all" ? true : f.id === "fav" ? state.fav.has(s.id) :
      f.id === "chords" ? s.hasChords : f.id === "ru" ? s.lang !== "kk" : s.lang !== "ru").length;
    return `<button type="button" class="chip" data-f="${f.id}" aria-pressed="${state.filter === f.id}">${f.label} ${n}</button>`;
  }).join("");
}

function renderCatalog() {
  const list = SONGS.filter(matches).sort((a, b) =>
    state.sort === "alpha" ? a.title.localeCompare(b.title, "ru") : a.order - b.order);
  el.clear.hidden = !state.q;
  renderChips();
  el.grid.innerHTML = list.map(s => `
    <article class="card">
      <a class="card-link" href="#/song/${encodeURIComponent(s.id)}">
        <h3>${esc(s.title)}</h3>
        <p class="preview">${s.noText ? "Только аккорды" : esc(s.preview)}</p>
        <div class="tags">
          ${s.key ? `<span class="tag key">${esc(s.key)}</span>` : ""}
          <span class="tag">${LANG_LABEL[s.lang]}</span>
          ${s.hasChords ? '<span class="tag">Аккорды</span>' : ""}
          ${s.noText ? '<span class="tag warn">Текст не добавлен</span>' : ""}
          ${s.note ? `<span class="tag">${esc(s.note)}</span>` : ""}
        </div>
      </a>
      <button type="button" class="icon-btn fav-btn" data-id="${esc(s.id)}" aria-pressed="${state.fav.has(s.id)}"
        aria-label="${state.fav.has(s.id) ? "Убрать из избранного" : "Добавить в избранное"}: ${esc(s.title)}">${state.fav.has(s.id) ? "★" : "☆"}</button>
    </article>`).join("");
  el.info.textContent = list.length ? `Найдено: ${list.length} из ${SONGS.length}` : "";
  el.empty.hidden = list.length > 0;
  el.grid.hidden = list.length === 0;
  if (!list.length) {
    el.emptyText.textContent = state.filter === "fav" && !state.q
      ? "В избранном пока пусто. Нажмите ☆ на карточке песни, чтобы добавить её сюда."
      : "Ничего не найдено. Проверьте написание или попробуйте другое слово.";
  }
  el.favCount.textContent = state.fav.size;
}

el.search.addEventListener("input", () => { state.q = el.search.value; renderCatalog(); });
el.clear.addEventListener("click", () => { state.q = ""; el.search.value = ""; renderCatalog(); el.search.focus(); });
el.sort.addEventListener("change", () => { state.sort = el.sort.value; renderCatalog(); });
el.chips.addEventListener("click", e => {
  const b = e.target.closest("[data-f]");
  if (b) { state.filter = b.dataset.f; renderCatalog(); }
});
$("resetBtn").addEventListener("click", () => {
  state.q = ""; state.filter = "all"; el.search.value = ""; renderCatalog();
});
el.grid.addEventListener("click", e => {
  const b = e.target.closest(".fav-btn");
  if (b) { toggleFav(b.dataset.id); }
});

function toggleFav(id) {
  state.fav.has(id) ? state.fav.delete(id) : state.fav.add(id);
  store.set("sc_fav", [...state.fav]);
  renderCatalog();
  if (state.song) updateFavBtn();
}

/* ==========================================================================
   Страница песни
   ========================================================================== */
function chordHtml(raw, shift, flats) {
  const kind = tokenKind(raw);
  if (kind === "label") return `<span class="lbl">${esc(raw)}</span>`;
  if (kind === "decor") return `<span class="dec">${esc(raw)}</span>`;
  const r = transposeToken(raw, shift, flats);
  const shown = esc(r.text.replace(/\.+$/, ""));
  return `<span class="ch${r.amb && shift ? " amb" : ""}">${shown}</span>`;
}

function renderBody(song, shift) {
  return song.blocks.map(b => {
    switch (b.t) {
      case "blank": return '<div class="blank"></div>';
      case "sec": return `<div class="sec">${esc(b.s)}</div>`;
      case "lyr": return `<div class="lyr">${esc(b.s)}</div>`;
      case "chords": return `<div class="ln chords">${b.toks.map(k => chordHtml(k.raw, shift, song.flats)).join("")}</div>`;
      case "pair": {
        let h = "";
        if (b.toks[0].i > 0) h += `<span class="seg"><span class="c">&nbsp;</span><span class="w">${esc(b.lyr.slice(0, b.toks[0].i))}</span></span>`;
        b.toks.forEach((k, x) => {
          const end = x + 1 < b.toks.length ? b.toks[x + 1].i : b.lyr.length;
          const txt = b.lyr.slice(k.i, Math.max(end, k.i));
          h += `<span class="seg"><span class="c">${chordHtml(k.raw, shift, song.flats)}</span><span class="w">${txt ? esc(txt) : "&nbsp;"}</span></span>`;
        });
        return `<div class="ln">${h}</div>`;
      }
    }
    return "";
  }).join("");
}

function toPlain(song, shift) {
  const shown = raw => transposeToken(raw, shift, song.flats).text.replace(/\.+$/, "");
  const lines = song.blocks.map(b => {
    if (b.t === "blank") return "";
    if (b.t === "sec") return b.s;
    if (b.t === "lyr") return b.s;
    if (b.t === "chords") return b.toks.map(k => shown(k.raw)).join(" ");
    let cl = "";
    b.toks.forEach(k => {
      while (cl.length < k.i) cl += " ";
      if (cl && !cl.endsWith(" ")) cl += " ";
      cl += shown(k.raw);
    });
    return cl + "\n" + b.lyr;
  });
  const key = currentKey(song, shift);
  return song.title + (key ? `\nТональность: ${key}` : "") + "\n\n" + lines.join("\n");
}

function currentKey(song, shift) {
  return song.key ? transposeToken(song.key, shift, song.flats).text : "";
}

function updateFavBtn() {
  const on = state.fav.has(state.song.id);
  const b = $("favBtn");
  b.textContent = on ? "★" : "☆";
  b.setAttribute("aria-pressed", on);
  b.setAttribute("aria-label", on ? "Убрать из избранного" : "Добавить в избранное");
}

function updateSong() {
  const s = state.song;
  el.body.style.setProperty("--fs", state.fs + "px");
  el.body.innerHTML = renderBody(s, state.shift);
  const key = currentKey(s, state.shift);
  $("tKey").textContent = key || (s.hasChords ? "Аккорды" : "—");
  $("tShift").textContent = state.shift ? (state.shift > 0 ? "+" : "") + state.shift + " п/т" : "оригинал";
  $("ambNote").hidden = !(state.shift && s.hasAmb);
  const dis = !s.hasChords;
  ["tUp", "tDown", "tReset"].forEach(id => { $(id).disabled = dis; $(id).style.opacity = dis ? ".4" : ""; });
  $("songMeta").textContent = [LANG_LABEL[s.lang], key && "Тональность " + key + (state.shift ? " (оригинал " + s.key + ")" : ""), s.note]
    .filter(Boolean).join(", ");
}

function openSong(id) {
  const s = SONGS.find(x => x.id === id);
  if (!state.song && !el.catalog.hidden) state.scroll = window.scrollY;
  el.catalog.hidden = true; el.songView.hidden = false;
  document.body.classList.add("is-song");
  setNav("");
  if (!s) {
    state.song = null;
    $("songTitle").textContent = "Песня не найдена";
    $("songMeta").textContent = "";
    el.body.innerHTML = '<p>Такой песни нет в каталоге. Вернитесь в каталог и выберите песню из списка.</p>';
    ["noTextNote", "ambNote"].forEach(i => $(i).hidden = true);
    document.title = "Песня не найдена — Песни и аккорды";
    return;
  }
  state.song = s; state.shift = 0;
  $("songTitle").textContent = s.title;
  $("noTextNote").hidden = !s.noText;
  document.title = s.title + " — Песни и аккорды";
  updateFavBtn(); updateSong();
  window.scrollTo(0, 0);
}

function showCatalog(favOnly) {
  const wasSong = !el.songView.hidden;
  if (favOnly) state.filter = "fav";
  else if (state.filter === "fav" && !wasSong) state.filter = "all";
  el.songView.hidden = true; el.catalog.hidden = false;
  document.body.classList.remove("is-song");
  state.song = null;
  document.title = "Песни и аккорды";
  setNav(favOnly ? "fav" : "catalog");
  renderCatalog();
  window.scrollTo(0, wasSong ? state.scroll : 0);
}

function setNav(name) {
  document.querySelectorAll("[data-nav]").forEach(a => a.classList.toggle("active", a.dataset.nav === name));
}

function route() {
  const h = location.hash.replace(/^#\/?/, "");
  if (h.startsWith("song/")) openSong(decodeURIComponent(h.slice(5)));
  else if (h === "fav") showCatalog(true);
  else showCatalog(false);
}
window.addEventListener("hashchange", route);

/* ==========================================================================
   Управление песней
   ========================================================================== */
function transpose(d) {
  if (!state.song || !state.song.hasChords) return;
  state.shift = ((state.shift + d + 18) % 12) - 6;   /* диапазон от -6 до +5 */
  updateSong();
}
function setFont(d) {
  state.fs = Math.min(34, Math.max(13, state.fs + d));
  store.set("sc_fs", state.fs);
  if (state.song) updateSong();
}
function toast(msg) {
  const t = $("toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toast.id); toast.id = setTimeout(() => t.classList.remove("show"), 1800);
}
async function copySong() {
  if (!state.song) return;
  const text = toPlain(state.song, state.shift);
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    const ta = document.createElement("textarea");
    ta.value = text; ta.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(ta); ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
    ta.remove();
    if (!ok) return toast("Не удалось скопировать. Выделите текст вручную.");
  }
  toast("Текст скопирован");
}

$("tUp").addEventListener("click", () => transpose(1));
$("tDown").addEventListener("click", () => transpose(-1));
$("tReset").addEventListener("click", () => { state.shift = 0; updateSong(); });
$("fsUp").addEventListener("click", () => setFont(1));
$("fsDown").addEventListener("click", () => setFont(-1));
$("copyBtn").addEventListener("click", copySong);
$("favBtn").addEventListener("click", () => state.song && toggleFav(state.song.id));
$("toTop").addEventListener("click", e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); });

document.addEventListener("keydown", e => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
  if (e.key === "Escape") {
    if (typing && document.activeElement === el.search && state.q) { el.clear.click(); return; }
    if (!el.songView.hidden) location.hash = "#/";
    return;
  }
  if (typing) return;
  if (e.key === "/" && !el.catalog.hidden) { e.preventDefault(); el.search.focus(); }
  else if (!el.songView.hidden) {
    if (e.key === "]") transpose(1);
    else if (e.key === "[") transpose(-1);
    else if (e.key === "=" || e.key === "+") setFont(1);
    else if (e.key === "-") setFont(-1);
  }
});

/* ==========================================================================
   Запуск
   ========================================================================== */
route();