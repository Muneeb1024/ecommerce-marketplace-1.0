export interface Product {
    [x: string]: any;
    image: any;
    _id: string;
    _type: "product";
    title: string;
    description: string;
    price: number;
    tags: string[];
    dicountPercentage: number;
    isNew: boolean;
    inventory: number;
    slug: {
        _type: "slug";
        current: string;
    }
    productImage?: {
        asset: {
            _ref: string;
            _type: "image";
        }
    }
}




