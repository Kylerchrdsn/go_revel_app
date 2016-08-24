package controllers

import "github.com/revel/revel"

type Life struct {
	*revel.Controller
}

//******************************************
func (c Life) Index() revel.Result {
	var rows, cols [12]int
	for i := 0; i < 12; i++ {
		rows[i] = i + 1
		cols[i] = i + 1
	}
	return c.Render(rows, cols)
}
