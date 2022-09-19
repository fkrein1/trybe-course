import { isInList } from "./helpers";
import { Pawn } from "./Pawn";
import { Piece } from "./Piece";
import { Root } from "./Root";

export class Board {
  pieces: Piece[] = [];

  constructor() {
      this.addPiece(new Pawn(['C', '2'], this));
      this.addPiece(new Root(['F', '1'], this));
  }

  private addPiece(piece: Piece) {
      if (isInList(piece.position, this.occupiedHouses))
          return;
      this.pieces.push(piece);
  }
  get occupiedHouses() {
      return this.pieces.map((piece) => piece.position);
  }

}