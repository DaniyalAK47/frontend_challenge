import { styled } from "@mui/material/styles";
import { Button, Chip } from "@mui/material";
import { memo } from "react";

type SelectedProps = {
	selected: boolean;
};

const CategorySelector = styled(Chip)<SelectedProps>(({ selected }) => ({
	padding: "10px 16px 10px 16px",
	backgroundColor: `${selected ? "lightorange" : "lightblue"}`,
	marginRight: "5px",
	cursor: "pointer",
	"&:hover": {
		backgroundColor: "#315362",
	},
	"&:active": {
		backgroundColor: "#39ABDB",
	},
}));

export default memo(CategorySelector);
