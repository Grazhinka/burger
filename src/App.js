import { Catalog } from "./components/catalog/catalog"
import { Header } from "./components/header/header"
import { Navigation } from "./components/navigation/navigation"

export const App=()=>{
  return (
  <>
    <Header/>
    <main>
        <Navigation/>
        <Catalog/>
    </main>
    <footer></footer>
  </>
  )
}
