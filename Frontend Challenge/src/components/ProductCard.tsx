import { Box, Typography } from "@mui/material";
import { Product } from "../helpers/types";
import { memo } from "react";

const ProductCard: React.FC<Product> = ({
	title,
	description,
	price,
	category,
	images,
}) => {
	return (
		<Box
			display="flex"
			padding={2}
			border="1px solid black"
			gap={2}
			width={{ xs: "100%", md: "30%" }}
			my={3}
		>
			<img
				src={images[0]}
				height="100%"
				width="80px"
				alt="product image"
				loading="lazy"
			/>

			<Box>
				<Typography variant="h6">{title}</Typography>
				<Typography variant="caption" textOverflow="ellipsis">
					{description}
				</Typography>
				<Box display="flex" justifyContent="space-between" width="100%">
					<Typography variant="body1">${price}</Typography>
					<Typography variant="body1">{category.name}</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default memo(ProductCard);
