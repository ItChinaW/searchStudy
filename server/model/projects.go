package model

import (
	"github.com/lib/pq"
	"gorm.io/gorm"
)

type Projects struct {
	gorm.Model
	ProjectsTitle           string         `json:"projectsTitle"`
	ProjectsContent         string         `json:"projectsContent"`
	ProjectsAnswer          string         `json:"projectsAnswer"`
	ProjectsSelection       string         `json:"projectsSelection"`
	ProjectsCategory        string         `json:"projectsCategory"`
	ProjectsTags            pq.StringArray `gorm:"type:varchar[]" json:"projectsTags"`
	ProjectsCollectionCount uint64         `json:"projectsCollectionCount"`
	ProjectsReadCount       uint64         `json:"projectsReadCount"`
}
