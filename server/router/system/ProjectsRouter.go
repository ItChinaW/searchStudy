package system

import (
	"github.com/gin-gonic/gin"
	"server/api/system"
)

type ProjectsRouter struct{}

func (s *ProjectsRouter) InitProjectRouter(Router *gin.Engine) {
	apiRouter := Router.Group("api")
	ProjectApi := system.ApiGroupApp.ProjectApi
	{
		apiRouter.GET("findProject/:id", ProjectApi.GetProject)
		apiRouter.GET("findProjectList", ProjectApi.GetProjectList)
		apiRouter.DELETE("deleteProjectList", ProjectApi.DeleteProject)
		apiRouter.PUT("updateProjectList", ProjectApi.UpdateProject)
		apiRouter.POST("createProject", ProjectApi.CreateProject)
	}
}
