interface Item {
	id: number;
	// name: string;
	creationAt: string;
	updatedAt: string;
}

export interface Category extends Item {
	// id: number;
	name: string;
	image: string;
	// creationAt: string;
	// updatedAt: string;
}

export interface Product extends Item{
	// id: number;
	title: string;
	price: number;
	description: string;
	images: string[];
	// creationAt: string;
	// updatedAt: string;
	category: Category;
}
