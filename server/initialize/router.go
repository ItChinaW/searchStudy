package initialize

import (
	"github.com/gin-gonic/gin"
	"server/router/system"
)

func Routers() *gin.Engine {
	Router := gin.Default()
	systemRouter := system.RouterGroupApp.ProjectsRouter

	systemRouter.InitProjectRouter(Router)
	
	return Router
}
