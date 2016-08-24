package controllers

import "github.com/revel/revel"

type App struct {
	*revel.Controller
}

func init() {
	revel.TemplateFuncs["eql"] = func(a, b interface{}) bool {
		return a == b
	}
}

//******************************************
func (c App) Index() revel.Result {
	var greeting string = "Konichiwa World"
	return c.Render(greeting)
}

//******************************************
func (c App) Palette() revel.Result {
	return c.Render()
}
