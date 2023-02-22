import { Provider } from "react-redux"
import { Catalog } from "./components/catalog/catalog"
import { Header } from "./components/header/header"
import { Navigation } from "./components/navigation/navigation"
import { store } from "./store"

export const App=()=>{
  return (
  <Provider store={store}>
    <Header/>
    <main>
        <Navigation/>
        <Catalog/>
    </main>
    <footer></footer>
  </Provider>
  )
}
