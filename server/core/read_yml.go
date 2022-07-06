package core

import (
	yaml "gopkg.in/yaml.v2"
	"io/ioutil"
	"log"
	"server/config"
)

func Config() config.Server {
	Setting := config.Server{}
	file, err := ioutil.ReadFile("./config.yml")
	if err != nil {
		log.Fatal("fail to read file：", err)
	}
	err = yaml.Unmarshal(file, &Setting)
	if err != nil {
		log.Fatal("fail to yaml unmarshal:", err)
	}
	return Setting
}
