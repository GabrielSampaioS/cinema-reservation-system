export interface Mapper<TEntity, TDto> {
    toDTO(entity: TEntity): TDto;
    toEntity?(dto: TDto): TEntity;
}
