# projectCDV

JavaScript project to Collegium Da Vinci

// PIERWSZA STRONA

// Tworzenie bazy danych zestawów komputerowych

Pierwsza strona bazuje na generowaniu listy produktów (komputerów), które pobierają dane statystyczne. Na tą potrzebę została stworzona klasa "Computer", na podstawie której zostały tworzone obiekty z różnymi zestawami komputerowymi. Następnie obiekty zostały połączone w jedną tabelę dla łatwiejszego operowania ich elementami w późniejszym etapie.

// Dynamiczne generowanie struktury z danymi komputerów

Dane obiektu są przetwarzane, i na ich podstawie dynamicznie generujemy div'a (.pcBox), który tworzy strukturę przedstawioną poniżej:

<div id="pcContainer" class="mainContainer">
  <div data-description="0" class="pcBox">
    <div class="pcImage"><img src="./assets/computers/ ... .jpg" /></div>
    <div class="pcData">
      <p>Procesor: <span class="procesor"> ... </span></p>
      <p>Price: <span class="price"> ... </span></p>
      <p>
        GraphicsCard: <span class="graphicsCard"> ... </span>
      </p>
      <p>Motherboard: <span class="motherboard"> ... </span></p>
      <p>Ram: <span class="ram"> ... </span></p>
      <p>Category: <span class="category"> ... </span></p>
      <p>DiscSSD: <span class="discSSD"> ... </span></p>
      <p>System: <span class="system"> ... </span></p>
    </div>
  </div>
</div>

Jak widać, div'y ".pcBox" są kolejno dodawane do kontenera "#pcContainer". W ".pcBox" dodajemy data-description posiadający komentarz z numerem zestawu komputerowego odwołujący się do lokalnej bazy danych. 
// Była również działająca koncepcja, aby w tym miejscu był przechowywany string JSON'owy z całym obiektem danego zestawu, jednak zdecydowałem się tą wersję, aby generowany HTML nie był tak długi i nieczytelny. (Jedyne komentarze kodu, które są w projekcie odwołują się właśnie do tego - mój dylemat wynikał z braku wiedzy, który sposób wykorzystuje się w praktyce).  
".pcBox" posiada kolejne 2 div'y: ".pcImage", który pobiera i generuje obraz oraz ".pcData", który pobiera dane tekstowe/liczbowe. ".pcData" ma dynamicznie generowany element <p>, w którym powstaje opis tekstowy na podstawie nazw w obiekcie (delikatnie zmodyfikowany: duża litera, dodanie dwukropka itd.). Wewnątrz <p> generujemy <span> z klasą o nazwie, która również jest generowana z obiektu. Do <span> pobierana jest informacja o danym elemencie zestawu komputerowego i zostaje zaczytana w formie tekstu.
Funkcja generatora odporna jest na zmiany obiektu i została w późniejszej fazie delikatnie rozszerzona, aby mogła być użyta dla kolejnych dynamicznych generacji danych.

// Filtr
W późniejszym etapie do pierwszej strony została dodana funkcja filtracji, która pobiera String z Input'a, konwertując go w w tablicę osobnych słów. Sprawdza on wszystkie wprowadzone słowa, czy występują w obiekcie danego zestawu komputerowego (f.every + f.same + f.includes). Dodatkowo został dodany suwak z przykładowymi zakresami cenowymi, który filtruje za pomocą koniunkcji (&&) wysokość ceny oraz wcześniejszego filtra słownego.
Filtr po wciśnięciu przycisku usuwa wszystkie "dzieci" kontenera i dodaje te przykłady, które spełniają wymagania filtru.

Po kliknięciu div'a ".pcBox" przechodzimy do drugiej (z trzech) części strony.

// DRUGA STRONA

// Formularz

Formularz pobiera dane: First and Last Name (text), Payment (radio) i Select a delivery date (select). 
 - First and Last Name: za pomocą walidacji wzoru regex'owego. Przyjmuje jedynie 2 słowa złożone z samych liter. Można wprowadzać znaki spacji na początku, w środku i na końcu w różnych ilościach. Funkcja "repairName2" usuwa nadmiarowe spacje oraz zamienia imię i nazwisko na string'i o małych literach, rozpoczynające się z dużej litery.
 - Payment: musi zostać wybrany.
 - Select a delivery date: generuje datę z 2-tygodniowym opóźnieniem. Wyświetla ją w oficjalnym stylu - dodaje "0" dla dni i miesięcy o jednej cyfrze, poprawia miesiąc oraz dodaje myślnik pomiędzy dniem, miesiącem i rokiem.
 Jeżeli dane zostaną wprowadzone poprawnie (po straceniu focus'a) następuje walidacja danych. Przy ich pozytywnym wprowadzeniu następuje pojawienie się zielonego oznaczenia, w przeciwnym przypadku oznaczenie będzie czerwony. Walidacja również nastąpi, kiedy naciśniemy przycisk "Buy PC" - zaznaczy również te elementy, które nie zostały uzupełnione i wcześniej ocenione pod względem poprawności.
 Dane z formularza zostają zapisane w localStorage. Przy cofnięciu lub ponownym włączeniu strony, dane zostają ponownie zaczytane. Jedynie data przed zaczytaniem jest ponownie sprawdzana, czy rzeczywiście nadal jest różnica równa dwóch tygodni i w następnej kolejności zaczytuje tą datę lub nie.

 // Akcesoria
Akcesoria są generowane dynamicznie za pomocą poprzedniej funkcji, która generowała ".pcBox'y". Została ona troszkę rozszerzona o inne nazwy klas, dla poszczególnych <div'ów>. W tym momencie został dodany parametr, dzięki któremu można wybrać kontener, do którego będą dodawane wygenerowane ".pcBox'y".
Akcesoria po kliknięciu zostają zapisane JSON'owo w localStorage i podświetlają się.

// Suma
Po początkowym wybraniu zestawu komputerowego oraz dodaniu akcesoriów, suma jest na bieżąco aktualizowania. Jest również odporna na odświeżenia i cofnięcia (<button> "Back to selection").

// TRZECIA STRONA

Dojście do podsumowania jest zrealizowane po przyciśnięciu <button> "Buy PC". W tym momencie jest realizowana funkcja weryfikacji wszystkich pól w formularzu (weryfikacja została opisana wyżej). Jeżeli wszystko jest poprawne, następuje wyświetlenie części związanej z podsumowaniem.
W podsumowaniu generowany jest wybrany komputer i wyświetlany w poprzedniej formie (z pierwszej strony), jednak bez kwoty. Niżej dynamicznie wyświetlają się dane wzięte z formularza, które zapisane są w localStorage. Dodana jest tutaj suma ostateczna. Jeżeli zostały dodane akcesoria, wyświetla się napis "Added Accessories", a poniżej wyświetlą się ich ilustracje wraz nazwą.
W tym momencie localStorage jest czyszczony, a wyłączenie strony lub powrót za pomocą <button> "Main Page" spowoduje rozpoczęcie całego procesu zakupowego od nowa.


// Dodatkowo
Dodatkowymi funkcjami jest dodanie focus'ów w input'ach oraz możliwość użycia klawiszów "enter" oraz "escape" w zależności od aktualnie wyświetlanego ekranu. 


//// ENG

# projectCDV

JavaScript project to Collegium Da Vinci

// FIRST PAGE

// Create a database of computer sets

The first page is based on generating a list of products (computers) that collect statistical data. For this need, the "Computer" class was created, on the basis of which objects with various computer sets were created. Then the objects were combined into one table to make it easier to manipulate their elements at a later stage.

// Dynamically generate structure with computer data

The object's data is processed and, based on it, we dynamically generate a div (.pcBox), which creates the structure shown below:

<div id="pcContainer" class="mainContainer">
   <div data-description="0" class="pcBox">
     <div class="pcImage"><img src="./assets/computers/ ... .jpg" /></div>
     <div class="pcData">
       <p>Processor: <span class="processor"> ... </span></p>
       <p>Price: <span class="price"> ... </span></p>
       <p>
         GraphicsCard: <span class="graphicsCard"> ... </span>
       </p>
       <p>Motherboard: <span class="motherboard"> ... </span></p>
       <p>Ram: <span class="ram"> ... </span></p>
       <p>Category: <span class="category"> ... </span></p>
       <p>DiscSSD: <span class="discSSD"> ... </span></p>
       <p>System: <span class="system"> ... </span></p>
     </div>
   </div>
</div>

As you can see, the ".pcBox" divs are sequentially added to the "#pcContainer" container. In ".pcBox" we add data-description with a comment with the computer set number referring to the local database.
// There was also a working idea to store a JSON string with the entire object of a given set in this place, but I chose this version so that the generated HTML would not be so long and unreadable. (The only code comments in the project refer to this - my dilemma resulted from the lack of knowledge which method is used in practice).
".pcBox" has another 2 divs: ".pcImage" which downloads and generates an image and ".pcData" which retrieves text/numeric data. ".pcData" has a dynamically generated <p> element, which creates a text description based on the names in the object (slightly modified: capital letter, addition of a colon, etc.). Inside <p> we generate <span> with a class named which is also generated from the object. Information about a given element of the computer set is downloaded to <span> and written in the form of text.
The generator function is resistant to object changes and was slightly extended at a later stage so that it could be used for subsequent dynamic data generation.

// Filter
At a later stage, a filter function was added to the first page, which takes a String from Input, converting it into an array of separate words. It checks all entered words whether they appear in the object of a given computer set (f.every + f.same + f.includes). Additionally, a slider with sample price ranges has been added, which filters the price amount using conjunctions (&&) and the previous word filter.
After pressing the button, the filter removes all "children" of the container and adds those examples that meet the filter requirements.

After clicking the ".pcBox" div, we go to the second (of three) part of the page.

// SECOND PAGE

// Form

The form collects the following data: First and Last Name (text), Payment (radio) and Select a delivery date (select).
  - First and Last Name: using regex pattern validation. It only accepts 2 words made up of just letters. You can enter spaces at the beginning, middle and end in varying amounts. The "repairName2" function removes excess spaces and converts the name and surname to lowercase strings starting with a capital letter.
  - Payment: must be selected.
  - Select a delivery date: generates a date with a 2-week delay. It displays it in the official style - adds "0" for single-digit days and months, corrects the month, and adds a dash between the day, month and year.
  If the data is entered correctly (after losing focus), data validation takes place. If they are entered positively, a green marking appears, otherwise the marking will be red. Validation will also take place when we press the "Buy PC" button - it will also mark those elements that have not been completed and previously assessed for correctness.
  Data from the form is saved in localStorage. When you go back or re-enter the page, the data is reloaded. Only the date before loading is checked again to see if there is still a difference of two weeks and then this date is loaded or not.

  // Accessories
Accessories are dynamically generated using the previous function that generated ".pcBoxes". It has been slightly extended with other class names for individual <divs>. At this point, a parameter has been added, thanks to which you can select the container to which the generated ".pcBoxes" will be added.
When clicked, accessories are saved in JSON in localStorage and are highlighted.

// Sum
After you initially select your computer kit and add accessories, the total is continually updated. It is also resistant to refreshes and rollbacks (<button> "Back to selection").

// THIRD SIDE

Access to the summary is achieved after pressing the <button> "Buy PC". At this point, the function of verifying all fields in the form is performed (verification has been described above). If everything is correct, the summary section is displayed.
The selected computer is generated in the summary and displayed in its previous form (on the first page), but without the amount. Data taken from the form and saved in localStorage are dynamically displayed below. The final total is added here. If accessories have been added, the words "Added Accessories" are displayed and their images and names are displayed below.
At this point, localStorage is cleared, and closing the page or returning using <button> "Main Page" will start the entire purchasing process again.


// Additionally
Additional functions include adding focus in inputs and the ability to use the "enter" and "escape" keys depending on the currently displayed screen.





