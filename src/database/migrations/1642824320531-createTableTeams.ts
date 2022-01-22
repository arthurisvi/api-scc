import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableTeams1642824320531 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "times",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome_time",
                        type: "varchar"
                    },
                    {
                        name: "escudo",
                        type: "varchar"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("times")
    }

}
