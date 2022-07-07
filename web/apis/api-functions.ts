import request from "../utils/request";

export const Project = {
    async getProjectList(keyword?: string | string[]) {
        return request.get("/api/findProjectList", {params: {keyword}})
    },
    async getProjectById(id: number) {
        return request.get(`/api/findProject/${id}`)
    }
}
