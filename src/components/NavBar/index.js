import { Link } from "gatsby"
import React from "react"
import { Name, Menu, ItemMenu } from "./styles"
import Button from "../button"

const NavBar = () => (
  <section>
    <Name>Edgar AG</Name>
    <nav>
      <Menu>
        <li>
          <ItemMenu as={Link} to="/">
            Home
          </ItemMenu>
        </li>
        <li>
          <ItemMenu as={Link} to="/">
            Services
          </ItemMenu>
        </li>
        <li>
          <ItemMenu as={Link} to="/">
            My Story
          </ItemMenu>
        </li>
        <li>
          <ItemMenu as={Link} to="/">
            My Skills
          </ItemMenu>
        </li>
        <li>
          <ItemMenu as={Link} to="/">
            Portfolio
          </ItemMenu>
        </li>
        <li>
          <ItemMenu as={Link} to="/">
            Reviews
          </ItemMenu>
        </li>
      </Menu>
      <Button outline>Contact Me</Button>
    </nav>
  </section>
)

export default NavBar
