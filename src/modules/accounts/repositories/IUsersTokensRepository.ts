import { ICreateUserTokenDTO } from "../dtos/ICreateUserTokenDTO";
import { User } from "../infra/typeorm/entities/Users";
import { UserTokens } from "../infra/typeorm/entities/UserTokens";

interface IUsersTokensRepository {
    create({
        expires_date,
        refresh_token,
        user_id,
    }: ICreateUserTokenDTO): Promise<UserTokens>;

    findByUserIdAndRefreshToken(
        user_id: string,
        refresh_token: string
    ): Promise<UserTokens>;

    deleteById(id: string): Promise<void>;
}

export { IUsersTokensRepository };
