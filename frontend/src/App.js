import {React, useMemo, useState } from "react";
import styled from "styled-components";
import Dashboard from "./components/dashboard/Dashboard";
import Expenses from "./components/expenses/Expenses";
import Incomes from "./components/income/Income";
import Navigation from "./components/navigation/Navigation";
import Orb from "./components/orb/orb";
import { useGlobalContext } from "./context/GlobalContext";
import black from "./images/black.jpeg";
import {MainLayout} from "./styles/layout"
function App() {
  const [active, setActive] = useState(1)
  const global = useGlobalContext()
  console.log(global);
  const displayData = () => {
    switch(active){
      case 1: 
      return <Dashboard />
      case 2: 
      return <Dashboard />
      case 3: 
      return <Incomes />
      case 4:
       return  <Expenses />

        default: 
        return <Dashboard />
    }
  }
  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  return (
    <AppStyled black={black} className="App">
      {orbMemo}
    <MainLayout>
      <Navigation active={active} setActive = {setActive} />
      <main>
        {displayData()}
      </main>
    </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
height: 100vh;
background-image: url(${props => props.black});
position: relative;
background-size: cover;
background-repeat: no-repeat;

main{
  flex:1;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow-x: hidden;
  &:: -webkit-scrollbar{
    width: 0
  }
}
`;
export default App;
