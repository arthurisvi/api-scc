import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableUsers1642822276834 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuarios",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "senha",
                        type: "varchar"
                    },
                    {
                        name: "n_whatsapp",
                        type: "varchar"
                    },
                    {
                        name: "nome_time",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestap",
                        default: "now()"
                    },

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios")
    }

}
