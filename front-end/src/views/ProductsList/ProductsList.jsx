import { Layout } from "../../components/Layout/Layout";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Products } from "../../components/Products/Products";
import { Pagination } from "../../components/Pagination/Pagination";
export function ProductsList() {
    const products = [
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
        {
            id: 3,
            gender: "men",
            category: "odziez",
            subcategory: "koszulki",
            productName: "T-shirt 2",
            brand: "Sun Tzu",
            pricePLN: 199,
            priceUSD: 49,
            photos: [
                "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
            ],
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            maintenanceInfo:
                "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
        },
        {
            id: 4,
            gender: "men",
            category: "odziez",
            subcategory: "koszulki",
            productName: "T-shirt 3",
            brand: "Sun Tzu",
            pricePLN: 199,
            priceUSD: 49,
            photos: [
                "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
            ],
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            maintenanceInfo:
                "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
        },
        {
            id: 5,
            gender: "men",
            category: "odziez",
            subcategory: "koszulki",
            productName: "T-shirt 4",
            brand: "Sun Tzu",
            pricePLN: 129,
            priceUSD: 39,
            photos: [
                "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
            ],
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            maintenanceInfo:
                "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
        },
        {
            id: 6,
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
            id: 7,
            gender: "men",
            category: "odziez",
            subcategory: "koszulki",
            productName: "T-shirt 2",
            brand: "Sun Tzu",
            pricePLN: 199,
            priceUSD: 49,
            photos: [
                "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
            ],
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            maintenanceInfo:
                "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
        },
        {
            id: 8,
            gender: "men",
            category: "odziez",
            subcategory: "koszulki",
            productName: "T-shirt 3",
            brand: "Sun Tzu",
            pricePLN: 199,
            priceUSD: 49,
            photos: [
                "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
                "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
            ],
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            maintenanceInfo:
                "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
        },
    ];
    return (
        <Layout>
            <FlexContainer>
                <ExpandableMenu />
                <div>
                    <Breadcrumbs />
                    <Products headerText="Swetry" products={products} />
                    <Pagination numberOfPages={5} />
                </div>
            </FlexContainer>
        </Layout>
    );
}
