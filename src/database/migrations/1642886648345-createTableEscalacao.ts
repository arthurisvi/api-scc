import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableEscalacao1642886648345 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "escalacoes",
                columns: [
                {  
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {  
                    name: "jogadores",
                    type: "text"
                },
                {  
                    name: "rodada",
                    type: "integer"
                },
                {  
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            
            ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
