export interface BaseDto {
    ID: number
    CreateTime: string
    DeletedAt: string
    UpdatedAt: string
}

export interface ProjectDto extends BaseDto {
    projectsAnswer: string
    projectsCategory: string
    projectsContent: string
    projectsTitle: string
    projectsSelection: string
    projectsTags: string[]
    projectsCollectionCount: number
    projectsReadCount: number
}
