package config

type Server struct {
	System   System
	Redis    Redis
	Postgres Postgres
}

type Redis struct {
	Host      string
	Password  string
	Timeout   int
	MaxActive int
	MaxIdle   int
}

type Postgres struct {
	Host     string
	User     string
	Password string
	Dbname   string
	Port     string
}

type System struct {
	Port string
}
