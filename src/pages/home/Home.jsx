import React from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/Category/Category"

export const Home = () => {
  return (
    <>
      {/*  <Slider />*/}
      <Category />
      <Card />
    </>
  )
}