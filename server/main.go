package main

import (
	"server/core"
	"server/global"
	"server/initialize"
)

func main() {
	global.DB = initialize.GormPgSql()

	core.RunServer()
}
