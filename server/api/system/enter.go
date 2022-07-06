package system

import "server/service/system"

type ApiGroup struct {
	ProjectApi
}

var ApiGroupApp = new(ApiGroup)

var (
	projectService = system.ServiceGroupApp.ProjectService
)
