import request from "../utils/request";

export const Project = {
    async getProjectList(keyword?: string | string[], page?: number, pageSize?: number) {
        return request.get("/api/findProjectList", {params: {keyword, page, pageSize}})
    },
    async getProjectById(id: number) {
        return request.get(`/api/findProject/${id}`)
    }
}
