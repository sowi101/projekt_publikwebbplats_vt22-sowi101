# Projekt i Webbutveckling III (DT173G) publik webbplats
I detta repository finns källkodfiler för en publik webbplats för ett fiktiv företag i form av en restaurang. Denna webbplats har skapats för projektarbetet i kursen Webbutveckling III på Mittuniversitetet. Webbplatsen konsumerar data från flera webbtjänster som också skapats i projektet, genom utskrift av menyer och möjlighet att boka bord. I repositoriet finns även filer för ett automatiseringssystem som kan användas för att konvertera och optimera filer.

## Webbplatsen
Webbplatsen är skapad med hjälp av HTML för grundläggande innehåll, SCSS för utseende och JavaScript för utläsning från och skapande av data till webbtjänsterna samt mobilmeny. Utöver dessa filer finns även bilder och grafik. För att konsumera webbtjänsterna används Fetch API.

### HTML-filer
- Index.html: startsida med kort information, erbjudande och puffbilder till menyerna.
- Food.html: meny, utskrift av maträtter, uppdelat i förrätter, huvudrätter och desserter.
- Drinks.html: meny, utskrift av drycker, uppdelat i rött vin, vitt vin, öl och cider samt alkoholfritt.
- Booktable.html: bordsbokning, skapande av bokning.
- About.html: Information om företaget samt bildvisning.
- Contact.html: Information om olika sätt att kontakta företaget, bland annat ett kontaktformulär (ej funktionellt).

### SCSS-filer
- main.scss: importerar partials.
- base.scss: partial som innehåller resets, variabler, skapande av mixins och basinställningar.
- components.scss: partial som innehåller regler för specifika komponenter som knappar, text på bild, tabeller och formulär.
- layout.scss: partial som innehåller regler för de större allmänna layoutelementen och för specifika webbsidor.

### JavaScript-filer
- main.js: innehåller kod för konsumering av webbplats genom Fetch API.
- navigation.js: innehåller kod för mobilmeny.

Utskrift av meny genomförs med hjälp av ett GET-anrop till API-adressen https://studenter.miun.se/~sowi2102/writeable/dt173g/projekt/webservice/menuapi.php.

Skapande av bokning genomförs med hjälp av ett POST-anrop till API-adressen https://studenter.miun.se/~sowi2102/writeable/dt173g/projekt/webservice/bookingapi.php.

## Automatiseringssystem
Jag har skapat ett automatiseringssystem med hjälp av tekniken Gulp och olika npm packages. Den innehåller tre tasks för de olika filtyperna HTML, SCSS och JavaScript och en task för bilder. Det finns också en så kallad watch-task som har till uppgift att upptäcka när det skett förändringar i filerna.

För att använda mitt automatiseringssystem behöver filerna gulpfile.js, package-lock.json och package.json laddas ner till det aktuella projekt. I terminalen skrivs sedan npm install för att installera alla packages som behövs. För att initiera automatiseringsystem används kommandot gulp.

### Tasks
- HTML-task: Kopierar HTML-filerna och placerar dem i publiceringsmappen.
- SCSS-task: Kopierar, slår ihop, konverterar och minifierar SCSS-filer till CSS-fil och placerar den i css-mappen i publiceringsmappen.
- JS-task: Kopierar, konverterar (från ny till äldre kod), slår ihop och minifierar JS-filer till en JS-fil och placerar den i js-mappen i publiceringsmappen.
- Img-task: Kopierar, komprimerar och placerar bilder i images-mappen i publiceringsmappen.
- Watch-task: Håller koll på förändringar i filerna för att köra övriga tasks på nytt.

### Packages
-	Gulp: Tekniken automatiseringssystemet bygger på.
-	Gulp-babel, @babel/core och @babel/present-env: Konvertera JavaScript-koden från nyare typ av ECMAscript till äldre typ av ECMAscript.
-	Gulp-concat: Slå ihop filer.
-	Gulp-imagemin: Komprimering av bilders filstorlek.
-	Gulp-sass och sass: Konvertera, minifiera och slå ihop SCSS-filer till en CSS-fil. 
-	Gulp-terser: Minifiering av JavaScript-filer.
-	Gulp-sourcemaps: lokalisera i vilken fil kod finns.
-	Browser-sync: uppdatering av filer i webbläsaren utan att ladda om.

## Om repositoriet
Skapat av Sofia Widholm 2022

Webbutveckling III, Webbutvecklingsprogrammet, Mittuniversitetet

Texten i menyerna är hämtade från [Fratelli](https://www.fratelliorebro.se/) och [Trattorian](https://trattorian.se/) och fotografierna är hämtade från [Unsplash](https://unsplash.com/). Övrig text och grafik är skapade av mig.
