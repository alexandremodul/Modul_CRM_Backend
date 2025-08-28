import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AdcCampoOp1738772767701 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("op", new TableColumn({
            name: "op",
            type: "varchar",
            length: "255",
            isNullable: true, 
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("op", "op");
    }
}
