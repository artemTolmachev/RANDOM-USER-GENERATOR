import { Header } from './components/Header';
import {Main} from './components/Main';
import styled from 'styled-components';

const ManeSaction = styled.div`
  position: relative;
  z-index:9;
  padding: 2rem 0;
`


function App() {
  return (
    <ManeSaction>
       <Header/>
      <Main/>
    </ManeSaction>
  );

}

export default App;
