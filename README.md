# CodeReview-JS-01
CodeReview materiału z pierwszego odcinka kursu javascript.
### Zmiany
#### HTML
Akurat tutaj wiele się nie zmieniło, usunięty został atrybut type z tagu script, który został przeniesiony na koniec tagu body. Dzięki wykonaniu tego działania, z poziomu skryptu możemy bezproblemowo odnieść się do elementów dokumentu, bez podpinania się pod zdarzenie załadowania strony (co miałoby miejsce, gdyby został osiedlony w tagu head). Atrybut onload został wyrzucony, alternatywa została opisana wyżej.
#### JS
Natomiast jeśli chodzi o Javascript, to przepisane zostało praktycznie wszystko. Pozbyliśmy się ~~kobylastego~~ brzydkiego wyciągania daty i godziny, na rzecz [formattera Intl](http://tutorials.comandeer.pl/js-intl.html) i metody [toLocaleTimeString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString). Sam timeout, którego celem było odświeżanie timera dostał ładną funkcję do wykonania, zamiast brzydkiej zmiennej string. Oprócz tego, kod doczekał się ładnych zmiennych, których nazwy określają ich cel. Całość zamknięta jest w IIFE, czyli po prostu domknięciu po to, żeby zadeklarowane zmienne nie wypływały w przestrzeń globalną. Dodatkowo, nad domknięciem czuwa tryb ścisły, który nie pozwala stosować złych praktyk.
