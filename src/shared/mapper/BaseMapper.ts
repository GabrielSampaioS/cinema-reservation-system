import { Mapper } from "./Mapper";

export abstract class BaseMapper<TEntity, TDto> implements Mapper<TEntity, TDto> {
    abstract toDTO(entity: TEntity): TDto;

    toDTOList(entities: TEntity[]): TDto[] {
        return entities.map((entity) => this.toDTO(entity));
    }
}
