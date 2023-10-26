Ten folder zawiera prosty serwer, dzięki któremu będziemy mogli odczytać listę folderów oraz notatek. Umożliwia on też tworzenie nowych folderów i notatek oraz edycje już isniejących notatek.

Żeby uruchomić server wywołaj w terminalu na poziomie folderu `back-end` komendy:

```command
npm i
npm run dev
```

Możesz również wywołać te same komendy folder wyżej - wtedy uruchomisz jednocześnie server i projekt frontendowy.

### Model danych

#### Produkty

Elementy zwracane i zapisywane do serwera mają następujące pola:

```json
{
    "id": 1,
    "gender": "men",
    "category": "odziez",
    "subcategory": "koszulki",
    "productName": "T-Shirt",
    "brand": "Top Brand",
    "pricePLN": 49,
    "priceUSD": 10,
    "photos": [
        "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
        "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
        "http://localhost:3000/product-photos/man-t-shirt-3.jpg"
    ],
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
    "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
},
```

#### Produkty ulubione

Elementy zwracane i zapisywane do serwera mają następujące pola:

```json
{
    "productId": 1
}
```

### Opis endpointów

| Ścieżka               | Metoda | Jak działa?                                                                                    |
| --------------------- | ------ | ---------------------------------------------------------------------------------------------- |
| /products             | `GET`  | Wyszstkie produkty                                                                             |
| /women/bestsellers    | `GET`  | Pobiera bestsellery z kategorii "Kobieta"                                                      |
| /men/bestsellers      | `GET`  | Pobiera bestsellery z kategorii "Mężczyzna"                                                    |
| /children/bestsellers | `GET`  | Pobiera bestsellery z kategorii "Dzięci"                                                       |
| /products             | `GET`  | Pobiera wszystkie produkty.                                                                    |
| /favourites           | `GET`  | Pobiera wszystkie produkty dodane do listy ulubionych                                          |
| /favourites           | `POST` | Dodaje produkt do listy ulubionych. Wymagania przesłania body z ID produktu np: {productId: 1} |

### Przykłady użycia

<details>
 <summary> [GET] - <i>/products</i>  </summary>
<br>
Wywołanie:

```js
fetch('http://localhost:3000/products`)
    .then(res => res.json())
    .console.log(res => res.json());
```

Konsola:

```js
[
    {
        id: 1,
        gender: "men",
        category: "odziez",
        subcategory: "koszulki",
        productName: "T-Shirt",
        brand: "Top Brand",
        pricePLN: 49,
        priceUSD: 10,
        photos: [
            "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
            "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
            "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
        ],
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
        maintenanceInfo:
            "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
    },
    {
        id: 2,
        gender: "men",
        category: "odziez",
        subcategory: "koszulki",
        productName: "T-Shirt",
        brand: "Top Brand",
        pricePLN: 49,
        priceUSD: 10,
        photos: [
            "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
            "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
            "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
        ],
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
        maintenanceInfo:
            "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
    },
];
```

</details>
