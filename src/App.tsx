import styled from "styled-components";
import Header from "./components/layout/Header/Header";
import ComparativeInterface from "./components/layout/ComparativeInterface/ComparativeInterface";

const AppStyle = styled.div`
  width: 1495px;
  height: 1080px;
  margin: 0 auto;
  padding: 0 90px;
`
const App = () =>
    <AppStyle>
        <Header/>
        <ComparativeInterface/>
    </AppStyle>

export default App;
