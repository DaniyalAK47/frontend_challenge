import { Chip, CircularProgress, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import CategorySelector from "../components/CategorySelector";
import ProductCard from "../components/ProductCard";
import { Category, Product } from "../helpers/types";
import { useFetch } from "../hooks/useFetch";

export const Listing: React.FC<{}> = ({}) => {
	const [selectedCategory, setSelectedCategory] = useState<number>(0);
	const scrollRef = useRef<any>([]);
	const {
		data: categories,
		error: categoriesError,
		loading: categoriesLoading,
	} = useFetch<Category[]>("https://api.escuelajs.co/api/v1/categories");

	const {
		data: products,
		error: productsError,
		loading: productsLoading,
	} = useFetch<Product[]>("https://api.escuelajs.co/api/v1/products");

	const scrollToSection = (id: number) => {
		if (scrollRef.current.length) {
			scrollRef.current[id].scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<Box>
			{categoriesError ||
				(productsError && (
					<Typography variant="h6" color="error">
						Error loading data. Please try again later.
					</Typography>
				))}

			<Box display="flex">
				{categoriesLoading ? (
					<CircularProgress />
				) : categories && categories?.length > 0 ? (
					categories?.map(({ name, id }, index) => (
						<CategorySelector
							label={name}
							selected={selectedCategory === index ? true : false}
							key={id}
							onClick={() => {
								setSelectedCategory(index);
								scrollToSection(id);
							}}
						/>
					))
				) : (
					<Typography>No data</Typography>
				)}
			</Box>

			{categoriesLoading || productsLoading ? (
				<CircularProgress />
			) : categories && categories.length > 0 ? (
				categories.map(({ name, id }) => (
					<>
						<Typography
							variant="h5"
							ref={(ref) => (scrollRef.current[id] = ref)}
						>
							{name}
						</Typography>
						<Divider variant="fullWidth" orientation="horizontal" />
						{products
							?.filter(({ category }) => category.name === name)
							.map((filteredProduct) => (
								<ProductCard {...filteredProduct} key={filteredProduct.id} />
							))}
					</>
				))
			) : (
				<Typography>No data avaliable</Typography>
			)}
		</Box>
	);
};
