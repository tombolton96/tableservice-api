export class CreateOrgDto {
    readonly name: string;
    readonly description?: string;
    readonly email: string;
    readonly password: string;
}
