package system

import (
	"server/global"
	"server/model"
)

type ProjectService struct{}

func (i *ProjectService) CreateProject(project model.Projects) (err error) {
	err = global.DB.Create(&project).Error
	return err
}

func (i *ProjectService) DeleteProject() {

}

func (i *ProjectService) GetProject() {
}

func (i *ProjectService) UpdateProject() {

}

func (i *ProjectService) GetProjectList(info model.PageListInfo) (list interface{}, err error) {
	var project []model.Projects
	err = global.DB.Where("projects_title LIKE ?", "%"+info.Keyword+"%").Find(&project).Error
	return project, err
}
