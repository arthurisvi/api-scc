import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("jogadores")
class Jogador {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  jogador_id: number;

  @Column()
  nome: string;

  @Column()
  clube: string;

  @Column()
  posicao: string;

  @Column()
  foto: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }

    if (this.posicao === "Defender") {
      this.posicao = "Defensor";
    } else if (this.posicao === "Goalkeeper") {
      this.posicao = "Goleiro";
    } else if (this.posicao === "Midfielder") {
      this.posicao = "Meio-campo";
    } else if (this.posicao === "Attacker") {
      this.posicao = "Atacante";
    }
  }
}

export { Jogador };
