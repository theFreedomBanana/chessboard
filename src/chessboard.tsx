import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import React, { memo, useState } from "react";

const BOARD = new Array(8).fill(new Array(8).fill(undefined));

const styles = () => createStyles({
	case: { border: "1px solid black", display: "inline-block", height: "50px", padding: "5px", width: "50px" },
	highlightedCase: { backgroundColor: "blue", border: "1px solid black", display: "inline-block", height: "50px", padding: "5px", width: "50px" },
	queen: { backgroundColor: "red", height: "50px", width: "50px" },
});

export const Chessboard = withStyles(styles)(
	memo(
		({ classes }: WithStyles) => {
			const [queens, setQueens] = useState<{ boardCaseIndex: number; rowIndex: number; }[]>([]);

			let errorMsg;

			queens.forEach((queen, index) => {
				queens.forEach((queenBis, indexBis) => {
					if (index !== indexBis) {
						if (queen.rowIndex === queenBis.rowIndex
							|| queen.boardCaseIndex === queenBis.boardCaseIndex
							|| Math.abs(queen.rowIndex - queenBis.rowIndex) ===
								Math.abs(queen.boardCaseIndex - queenBis.boardCaseIndex)
						) {
							errorMsg = "Une reine est attaqué";
						}
					}
				});
			});

			return (
				<>
					<p>{errorMsg}</p>
					{BOARD.map(
						(row, rowIndex) => (
							<div key={rowIndex}>
								{row.map((boardCase: undefined, boardCaseIndex: number) => (
									<div
										className={
											queens.find((queen) => {

												return queen.rowIndex === rowIndex
													|| queen.boardCaseIndex === boardCaseIndex
													|| Math.abs(queen.rowIndex - rowIndex) ===
														Math.abs(queen.boardCaseIndex - boardCaseIndex);
											})
												? classes.highlightedCase
												: classes.case
										}
										key={boardCaseIndex}
										onClick={() => {
											const newQueens = [...queens];
											let indexToDelete;
											newQueens.forEach((queen, index) => {
												if (queen.boardCaseIndex === boardCaseIndex && queen.rowIndex === rowIndex) {
													indexToDelete = index;
												}
											});
											if (indexToDelete !== undefined) {
												newQueens.splice(indexToDelete, 1);
											} else {
												newQueens.push({ boardCaseIndex, rowIndex });
											}
											setQueens(newQueens);
										}}
									>
										{queens.find((queen) => {
											if (queen.rowIndex === rowIndex && queen.boardCaseIndex === boardCaseIndex) {
												return true;
											} else {

												return false;
											}
										}) ? (
												<div className={classes.queen}></div>
											) : null
										}
									</div>
								))}
							</div>
						)
					)}
				</>
			);
		},
	),
);
