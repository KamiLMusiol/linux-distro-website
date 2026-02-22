# linux-distro-website

Projekt strony internetowej prezentującej statystyki udziału systemów operacyjnych w rynku. Aplikacja skupia się na ekosystemie Linuxa, oferując opisy popularnych dystrybucji oraz wizualizacje danych z plików csv.

## Opis projektu
- **Dynamiczne Wykresy** – automatyczne generowanie wykresów słupkowych i kołowych na podstawie danych z pliku CSV.
- **Responsywny Layout** – interfejs dostosowany do różnych rozdzielczości ekranu.
- **Tresc** – informacje o dystrybucjach Ubuntu, Debian oraz Fedora. (bardziej forma lorem ipsum)
- **Nawigacja** – stały pasek boczny (sidebar) ułatwiający przełączanie się między sekcjami.

## Technologie
- **HTML/CSS3** 
- **JavaScript(Chart.js)**
- **PapaParse** (przetwarzanie plików CSV)



##  Struktura plików
```text
├── linux_na_tle_innych_systemow.html          # Strona główna z wykresami
├── ubuntu.html         # Podstrona Ubuntu
├── debian.html         # Podstrona Debian
├── fedora.html         # Podstrona Fedora
├── css/
│   ├── templatki.css   # Główne style strukturalne
│   └── ...             # Pozostałe arkusze stylów
├── js/
│   └── chart.js        # Logika pobierania danych i rysowania wykresów
├── data/
│   └── systemy.csv     # Dane źródłowe w formacie CSV
└── img/
    └── ...             # Ikony i grafiki systemów
