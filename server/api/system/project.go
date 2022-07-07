package system

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"server/model"
)

type ProjectApi struct{}

func (i *ProjectApi) CreateProject(c *gin.Context) {
	var project model.Projects
	_ = c.ShouldBindJSON(&project)
	fmt.Println(project)
	if err := projectService.CreateProject(project); err != nil {
		fmt.Println(err)
		return
	}
	c.JSON(200, gin.H{
		"message": "success",
	})
}

func (i *ProjectApi) DeleteProject(c *gin.Context) {

}

func (i *ProjectApi) GetProject(c *gin.Context) {
	id := c.Param("id")
	project, err := projectService.GetProject(id)
	if err != nil {
		c.JSON(400, gin.H{
			"message": err,
		})
		return
	}
	c.JSON(200, gin.H{
		"data":    project,
		"message": "success",
	})
}

func (i *ProjectApi) UpdateProject(c *gin.Context) {

}

func (i *ProjectApi) GetProjectList(c *gin.Context) {
	var pageListInfo model.PageListInfo
	_ = c.ShouldBindQuery(&pageListInfo)
	projectList, err := projectService.GetProjectList(pageListInfo)
	if err != nil {
		c.JSON(400, gin.H{
			"message": err,
		})
		return
	}
	c.JSON(200, gin.H{
		"data":    projectList,
		"message": "success",
	})
}
